import { call, put, select, takeLatest } from 'redux-saga/effects';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { PayloadAction } from '@reduxjs/toolkit';

import { firestoreDatabase } from '../../../../firebaseConfig';
import { getErrorMessage } from '@/utils/utils';
import {
  dispatchCreateTopic,
  dispatchFetchTopics,
} from '@/modules/Topic/Redux/actions';
import { CreateTopicRequestParams } from '@/Models/topic';
import firebase from 'firebase/compat';
import { getProjectsParticipants } from '@/modules/Project/Redux/selectors';
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import DocumentData = firebase.firestore.DocumentData;

export function* watchTopicSaga() {
  yield takeLatest(dispatchCreateTopic.Request, createTopicWorker);
  yield takeLatest(
    [
      dispatchFetchTopics.Request,
      /*dispatchCreateProject.Success,
                        dispatchDeleteProject.Success,*/
    ],
    fetchTopicWorker,
  );
  /* yield takeLatest(dispatchDeleteProject.Request, deleteProjectWorker);*/
}

function* createTopicWorker({
  payload: { projectId, topicName },
}: PayloadAction<CreateTopicRequestParams>) {
  try {
    const uid = '1'; // yield
    const topicsCollectionRef = collection(firestoreDatabase, 'topics');

    const topic = {
      projectId,
      topicName,
      members: [uid],
      createdBy: uid,
      createdAt: new Date(),
      nAttachments: 0,
      nMessages: 0,
      recentMessage: {
        messageText: '',
        readBy: {
          sentAt: new Date(),
          sentBy: '',
        },
      },
    };

    yield call(addDoc, topicsCollectionRef, topic);

    yield put(dispatchCreateTopic.Success());

    const participants: string[] = yield select(getProjectsParticipants);
    yield put(dispatchFetchTopics.Request(participants));
  } catch (error) {
    yield put(dispatchCreateTopic.Error(getErrorMessage(error)));
  }
}

function* fetchTopicWorker() {
  try {
    const uid: string = '1'; // yield select(userIdSelector)
    const topicsCollectionRef = collection(firestoreDatabase, 'topics');

    // Create a query against the collection.
    const q = query(topicsCollectionRef, where('createdBy', '==', uid));

    const querySnapshot: QuerySnapshot = yield call(getDocs, q);
    const topics = querySnapshot.docs.map(doc => {
      const data: DocumentData | undefined = doc.data();
      return {
        id: doc.id,
        projectId: data?.projectId,
        topicName: data?.topicName,
        members: data?.members,
        nAttachments: data?.nAttachments,
        nMessages: data?.nMessages,
        createdAt: data?.createdAt,
        createdBy: data?.createdBy,
        recentMessage: {
          messageText: data?.recentMessage?.messageText,
          readBy: {
            sentAt: data?.recentMessage?.readBy?.sentAt,
            sentBy: data?.recentMessage?.readBy?.sentBy,
          },
        },
      };
    });

    yield put(dispatchFetchTopics.Success(topics));
  } catch (error) {
    yield put(dispatchFetchTopics.Error(getErrorMessage(error)));
  }
}

/*
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
*/
