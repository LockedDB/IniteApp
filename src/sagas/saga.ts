import { all } from 'redux-saga/effects';
import { watchProjectCreationRequest } from '@/modules/Project/Redux/saga';

export default function* rootSaga() {
  yield all([watchProjectCreationRequest()]);
}
