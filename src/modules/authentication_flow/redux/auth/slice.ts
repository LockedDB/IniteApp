import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { firebaseAuthentication as auth } from '../../../../../firebaseConfig';
import { getErrorMessage } from '@/utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase/compat';
import { dispatchNavigateActionSaga } from '@/sagas/helpers';
import { StackActions } from '@react-navigation/native';
import { NEW_USER_PROFILE_SCREEN } from '@/modules/navigation/paths';
import UserCredential = firebase.auth.UserCredential;

interface Credentials {
  email: string;
  password: string;
}

interface AuthState {
  authenticated: boolean;
  loading: boolean;
  registerLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  authenticated: false,
  loading: false,
  error: null,
  /** This loading solely exists so the auth loading is not triggered and the navigation container is available*/
  registerLoading: false,
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
      state.registerLoading = true;
      state.error = null;
    },
    registerSuccess: state => {
      state.registerLoading = false;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.registerLoading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.authenticated = false;
    },
    cleanError: state => {
      state.error = null;
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
  cleanError,
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

    yield call(saveUserTokenToAsyncStorate, userCredential);
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

    yield call(saveUserTokenToAsyncStorate, userCredential);

    yield call(
      dispatchNavigateActionSaga,
      StackActions.push(NEW_USER_PROFILE_SCREEN),
    );

    yield put(registerSuccess());
  } catch (error) {
    yield put(registerFailure(getErrorMessage(error)));
  }
}

function* logoutSaga() {
  yield call(signOut, auth);
  yield call(AsyncStorage.removeItem, 'userToken');
}

function* saveUserTokenToAsyncStorate(userCredential: UserCredential) {
  if (userCredential.user === null)
    throw Error('register saga: user credentials === null');

  // Save the user information or token
  yield AsyncStorage.setItem('userToken', userCredential.user.refreshToken);
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(registerRequest.type, registerSaga);
  yield takeLatest(logout.type, logoutSaga);
  yield takeLatest(initializeApp.type, initializeSaga);
}
