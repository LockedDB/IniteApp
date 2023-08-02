import { all } from 'redux-saga/effects';
import { watchProjectCreationRequest } from '@/modules/Project/Redux/saga';
import { watchTopicSaga } from '@/modules/Topic/Redux/saga';

export default function* rootSaga() {
  yield all([watchProjectCreationRequest(), watchTopicSaga()]);
}
