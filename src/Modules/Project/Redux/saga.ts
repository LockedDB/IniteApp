import { call, put, takeLatest } from 'redux-saga/effects';
import { collection, addDoc } from 'firebase/firestore';
import { PayloadAction } from '@reduxjs/toolkit';

import { firestoreDatabase } from '../../../../firebaseConfig';
import { CreateProjectRequest } from '../Models/project';
import { dispatchCreateProject } from './actions';
import { getErrorMessage } from '@utils/utils';

export function* watchProjectCreationRequest() {
  yield takeLatest(dispatchCreateProject.Request, createProjectWorker);
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
