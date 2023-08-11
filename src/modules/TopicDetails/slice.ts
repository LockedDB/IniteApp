import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '@/Models/message';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getErrorMessage } from '@/utils/utils';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { firestoreDatabase } from '../../../firebaseConfig';
import { selectUserId } from '@/modules/authentication_flow/redux/profile/selectors';
import firebase from 'firebase/compat';
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import DocumentData = firebase.firestore.DocumentData;

const LIMIT_MESSAGES = 25;

interface SaveMessageRequest {
  messageText: string;
  topicId: string;
}

interface ProjectDetailsState {
  messages: Message | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProjectDetailsState = {
  messages: null,
  loading: false,
  error: null,
};

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    saveMessageRequest: (state, action: PayloadAction<SaveMessageRequest>) => {
      state.loading = true;
      state.error = null;
    },
    saveMessageSuccess: state => {
      state.loading = false;
    },
    saveMessageFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchMessagesRequest: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    fetchMessagesSuccess: (state, action: PayloadAction<Message>) => {
      state.loading = false;
      state.messages = action.payload;
    },
    fetchMessagesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  saveMessageRequest,
  saveMessageFailure,
  saveMessageSuccess,
  fetchMessagesRequest,
  fetchMessagesSuccess,
  fetchMessagesFailure,
} = messageSlice.actions;

function* saveMessage({
  payload: { messageText, topicId },
}: PayloadAction<SaveMessageRequest>) {
  try {
    const uid: string = yield select(selectUserId);
    const message = {
      messageText,
      sentAt: new Date(),
      sentBy: uid,
    };

    const messagesRef = collection(
      firestoreDatabase,
      `message/${topicId}/messages`,
    );
    yield call(addDoc, messagesRef, message);

    yield put(saveMessageSuccess());
  } catch (e) {
    yield put(saveMessageFailure(getErrorMessage(e)));
  }
}

function* fetchMessages({ payload: topicId }: PayloadAction<string>) {
  try {
    const topicMessageRef = collection(firestoreDatabase, `message`);
    const document = doc(topicMessageRef, topicId);
    const messageMessagesRef = collection(document, 'messages');

    const q = query(
      messageMessagesRef,
      orderBy('sentAt'),
      limit(LIMIT_MESSAGES),
    );
    const querySnapshot: QuerySnapshot = yield call(getDocs, q);
    const messages: Message = {
      messages: querySnapshot.docs.map(doc => {
        const data: DocumentData | undefined = doc.data();

        return {
          messageText: data?.messageText,
          sentAt: data?.sentAt,
          sentBy: data?.sentBy,
        };
      }),
    };

    yield put(fetchMessagesSuccess(messages));
  } catch (e) {
    yield put(fetchMessagesFailure(getErrorMessage(e)));
  }
}

export function* messagesWatcher() {
  yield takeLatest(saveMessageRequest.type, saveMessage);
  yield takeLatest(
    [fetchMessagesRequest.type, saveMessageSuccess().type],
    fetchMessages,
  );
}
