import { call, put, takeLatest } from 'redux-saga/effects';
import { addDoc, collection } from 'firebase/firestore';
import { PayloadAction } from '@reduxjs/toolkit';

import { firestoreDatabase } from '../../../../firebaseConfig';
import { getErrorMessage } from '@/utils/utils';
import { dispatchCreateTopic } from '@/modules/Topic/Redux/actions';
import { CreateTopicRequestParams } from '@/Models/topic';

export function* watchTopicSaga() {
  yield takeLatest(dispatchCreateTopic.Request, createTopicWorker);
  /*yield takeLatest(
                                      [
                                          dispatchFetchProjects.Request,
                                          dispatchCreateProject.Success,
                                          dispatchDeleteProject.Success,
                                      ],
                                      fetchProjectWorker,
                                  );
                                  yield takeLatest(dispatchDeleteProject.Request, deleteProjectWorker);*/
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

/*function* fetchProjectWorker() {
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
}*/

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
