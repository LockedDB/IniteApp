import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { firebaseAuthentication as auth } from '../../../../firebaseConfig';
import { getErrorMessage } from '@/utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase/compat';
import UserCredential = firebase.auth.UserCredential;

interface Credentials {
  email: string;
  password: string;
}

interface AuthState {
  authenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  authenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initializeApp: state => {
      state.loading = true;
      state.error = null;
    },
    loginRequest: (state, action: PayloadAction<Credentials>) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: state => {
      state.loading = false;
      state.authenticated = true;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerRequest: (state, action: PayloadAction<Credentials>) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: state => {
      state.loading = false;
      state.authenticated = true;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.authenticated = false;
    },
  },
});

export const {
  initializeApp,
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;

function* initializeSaga() {
  const userToken: string = yield AsyncStorage.getItem('userToken');
  if (userToken) {
    yield put(loginSuccess());
  } else {
    yield put(loginFailure('no token found'));
  }
}

function* loginSaga(action: PayloadAction<Credentials>) {
  try {
    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password,
    );

    if (userCredential.user === null)
      throw Error('loginSaga: user credentials === null');

    // Save the user information or token
    yield AsyncStorage.setItem('userToken', userCredential.user.refreshToken);
    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailure(getErrorMessage(error)));
  }
}

function* registerSaga(action: PayloadAction<Credentials>) {
  try {
    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password,
    );

    if (userCredential.user === null)
      throw Error('register saga: user credentials === null');

    // Save the user information or token
    yield AsyncStorage.setItem('userToken', userCredential.user.refreshToken);
    yield put(registerSuccess());
  } catch (error) {
    yield put(registerFailure(getErrorMessage(error)));
  }
}

function* logoutSaga() {
  yield call(signOut, auth);
  yield AsyncStorage.removeItem('userToken');
  yield put(logout());
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(registerRequest.type, registerSaga);
  yield takeLatest(logout.type, logoutSaga);
  yield takeLatest(initializeApp.type, initializeSaga);
}
