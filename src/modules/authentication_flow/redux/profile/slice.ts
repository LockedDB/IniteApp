import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/Models/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getErrorMessage } from '@/utils/utils';
import {
  firebaseAuthentication,
  firebaseStorage,
  firestoreDatabase,
} from '../../../../../firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import {
  loginFailure,
  loginSuccess,
} from '@/modules/authentication_flow/redux/auth/slice';
import ImageResizer, {
  Response as ImageResponse,
} from 'react-native-image-resizer';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import firebase from 'firebase/compat';
import QuerySnapshot = firebase.firestore.QuerySnapshot;

interface UserData {
  displayName: string;
  uri: string;
}

interface ProfileState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  user: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveUserRequest: (state, payload: PayloadAction<UserData>) => {
      state.loading = true;
      state.error = null;
    },
    saveUserSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    saveUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserProfileRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchUserProfileSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserProfileFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  saveUserRequest,
  saveUserFailure,
  saveUserSuccess,
  fetchUserProfileRequest,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
} = profileSlice.actions;

export default profileSlice.reducer;

function* fetchUserProfileSaga() {
  try {
    const user = firebaseAuthentication.currentUser;

    if (user === null) {
      yield put(loginFailure('fetchUserProfileSaga: Firebase user not found'));
      return;
    }

    const userCollectionRef = collection(firestoreDatabase, 'users');
    const q = query(userCollectionRef, where('uid', '==', user?.uid));
    const querySnapshot: QuerySnapshot = yield call(getDocs, q);
    const userData = querySnapshot.docs.pop()?.data() as User;

    yield put(fetchUserProfileSuccess(userData));
  } catch (e) {
    yield put(fetchUserProfileFailure(getErrorMessage(e)));
  }
}

function* uploadImage(uri: string, filePath: string) {
  const resizedImage: ImageResponse = yield call(
    ImageResizer.createResizedImage,
    uri,
    800,
    600,
    'JPEG',
    60,
  );

  // Retrieve blob
  const response: Response = yield fetch(resizedImage.uri);
  const blob: Blob = yield response.blob();

  const fileRef = ref(firebaseStorage, filePath);
  const uploadTask = uploadBytesResumable(fileRef, blob);

  const downloadUrl: string = yield new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      null,
      error => {
        // Handle errors during upload
        console.log('error: ', JSON.stringify(error));
        reject(error);
      },
      async () => {
        // Upload completed, get download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      },
    );
  });

  return downloadUrl;
}

function* saveUserSaga({
  payload: { displayName, uri },
}: PayloadAction<UserData>) {
  try {
    const user = firebaseAuthentication.currentUser;

    if (!user) throw Error('saveUserSaga: No user found!');

    if (!user.uid || !user.email)
      throw Error(
        'saveUserSaga: No uid or email found in the firebase reference!',
      );

    // Get the download URL for the photo
    const photoURL: string = yield call(
      uploadImage,
      uri,
      `user_profile/${user.uid}`,
    );

    const userData: User = {
      uid: user.uid,
      displayName,
      email: user.email,
      projects: [],
      photoURL,
    };

    // send user data to 'users' collection
    const firestoreUserRef = collection(firestoreDatabase, 'users');
    yield call(addDoc, firestoreUserRef, userData);

    yield put(saveUserSuccess(userData));
    yield put(loginSuccess());
  } catch (e) {
    yield put(saveUserFailure(getErrorMessage(e)));
  }
}

export function* profileSaga() {
  yield takeLatest(saveUserRequest.type, saveUserSaga);
  yield takeLatest(fetchUserProfileRequest.type, fetchUserProfileSaga);
}
