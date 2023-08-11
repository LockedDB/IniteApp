import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '@/Models/message';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getErrorMessage } from '@/utils/utils';
import { addDoc, collection } from 'firebase/firestore';
import { firestoreDatabase } from '../../../firebaseConfig';
import { selectUserId } from '@/modules/authentication_flow/redux/profile/selectors';

interface SaveMessageRequest {
  messageText: string;
  topicId: string;
}

interface ProjectDetailsState {
  messages: Message[] | null;
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
  },
});

export const { saveMessageRequest, saveMessageFailure, saveMessageSuccess } =
  messageSlice.actions;

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

export function* messagesWatcher() {
  yield takeLatest(saveMessageRequest.type, saveMessage);
}
