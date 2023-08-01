import { call, put, takeLatest } from 'redux-saga/effects';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { PayloadAction } from '@reduxjs/toolkit';

import { firestoreDatabase } from '../../../../firebaseConfig';
import { CreateProjectRequest, Project } from '../Models/project';
import { dispatchCreateProject, dispatchFetchProjects } from './actions';
import firebase from 'firebase/compat';
import { getErrorMessage } from '@/utils/utils';
import QuerySnapshot = firebase.firestore.QuerySnapshot;

export function* watchProjectCreationRequest() {
  yield takeLatest(dispatchCreateProject.Request, createProjectWorker);
  yield takeLatest(dispatchFetchProjects.Request, fetchProjectWorker);
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
  } catch (error) {
    yield put(dispatchFetchProjects.Error(getErrorMessage(error)));
  }
}
