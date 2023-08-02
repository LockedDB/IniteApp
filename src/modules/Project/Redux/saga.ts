import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { PayloadAction } from '@reduxjs/toolkit';

import { firestoreDatabase } from '../../../../firebaseConfig';
import { CreateProjectRequest, Project } from '@/Models/project';
import {
  dispatchCreateProject,
  dispatchDeleteProject,
  dispatchFetchProjects,
} from './actions';
import firebase from 'firebase/compat';
import { getErrorMessage } from '@/utils/utils';
import { dispatchFetchTopics } from '@/modules/Topic/Redux/actions';
import QuerySnapshot = firebase.firestore.QuerySnapshot;

export function* watchProjectCreationRequest() {
  yield takeLatest(dispatchCreateProject.Request, createProjectWorker);
  yield takeLatest(
    [
      dispatchFetchProjects.Request,
      dispatchCreateProject.Success,
      dispatchDeleteProject.Success,
    ],
    fetchProjectWorker,
  );
  yield takeLatest(dispatchDeleteProject.Request, deleteProjectWorker);
}

// Define a separate function for adding a project
function* addProjectToCollection(
  collectionRef: any,
  project: CreateProjectRequest,
): Generator {
  yield call(addDoc, collectionRef, project);
}

function* createProjectWorker({
  payload,
}: PayloadAction<CreateProjectRequest>) {
  try {
    const projectsCollectionRef = collection(firestoreDatabase, 'projects');

    yield call(addProjectToCollection, projectsCollectionRef, payload);

    yield put(dispatchCreateProject.Success());
  } catch (error: unknown) {
    yield put(dispatchCreateProject.Error(getErrorMessage(error)));
  }
}

function* fetchProjectWorker() {
  try {
    const ownerId: string = '1'; // yield select(userIdSelector)
    const projectsCollectionRef = collection(firestoreDatabase, 'projects');

    // Create a query against the collection.
    const q = query(projectsCollectionRef, where('owner_id', '==', ownerId));

    const querySnapshot: QuerySnapshot = yield call(getDocs, q);
    const projects = querySnapshot.docs.map(
      doc =>
        ({
          id: doc.id,
          name: doc.data()?.name,
          description: doc.data()?.description,
          tags: doc.data()?.tags,
          topics: doc.data()?.topics,
          participants: doc.data()?.participants,
          owner_id: doc.data()?.owner_id,
          attachments: {
            messages: doc.data()?.attachments?.messages,
            files: doc.data()?.attachments?.files,
          },
        } as Project),
    );

    yield put(dispatchFetchProjects.Success(projects));

    // The second we receive the project data, call the topics for each project
    yield put(
      dispatchFetchTopics.Request(
        projects.flatMap(({ participants }) => participants),
      ),
    );
  } catch (error) {
    yield put(dispatchFetchProjects.Error(getErrorMessage(error)));
  }
}

function* deleteProjectWorker({
  payload: { projectId },
}: PayloadAction<{ projectId: string }>) {
  try {
    const projectDocRef = doc(firestoreDatabase, `projects/${projectId}`);

    yield call(deleteDoc, projectDocRef);

    yield put(dispatchDeleteProject.Success());
  } catch (error: unknown) {
    yield put(dispatchDeleteProject.Error(getErrorMessage(error)));
  }
}
