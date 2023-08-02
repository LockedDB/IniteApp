import { call, put, takeLatest } from 'redux-saga/effects';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { PayloadAction } from '@reduxjs/toolkit';

import { firestoreDatabase } from '../../../../firebaseConfig';
import { getErrorMessage } from '@/utils/utils';
import {
  dispatchCreateTopic,
  dispatchFetchTopics,
} from '@/modules/Topic/Redux/actions';
import { CreateTopicRequestParams, Topic } from '@/Models/topic';
import firebase from 'firebase/compat';
import QuerySnapshot = firebase.firestore.QuerySnapshot;

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
    const topics = querySnapshot.docs.map(
      doc =>
        ({
          id: doc.id,
          projectId: doc.data()?.projectId,
          topicName: doc.data()?.topicName,
          members: doc.data()?.members,
          nAttachments: doc.data()?.nAttachments,
          nMessages: doc.data()?.nMessages,
          createdAt: doc.data()?.createdAt,
          createdBy: doc.data()?.createdBy,
          recentMessage: {
            messageText: doc.data()?.recentMessage?.messageText,
            readBy: {
              sentAt: doc.data()?.recentMessage?.readBy?.sentAt,
              sentBy: doc.data()?.recentMessage?.readBy?.sentBy,
            },
          },
        } as Topic),
    );

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
