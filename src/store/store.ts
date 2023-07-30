import { persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducers/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Middleware, configureStore } from '@reduxjs/toolkit';
import rootSaga from "../Sagas/saga";

const sagaMiddleware = createSagaMiddleware();

// Configuring the persistor, the key is used to specify the key that will be used to store the state in
// the storage engine and the storage is used to specify the storage engine that will be used.
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middlewares: Middleware[] = [sagaMiddleware];

// This will allow to persist the state of the store.
const persistedReducer = persistReducer(persistConfig, rootReducer);

if (__DEV__) {
  const createDebugger: () => Middleware = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      middlewares,
    ),
});

sagaMiddleware.run(rootSaga)
