import { all } from 'redux-saga/effects';
import { watchProjectCreationRequest } from '@/modules/Project/Redux/saga';
import { watchTopicSaga } from '@/modules/Topic/Redux/saga';
import { authSaga } from '@/modules/authentication_flow/redux/slice';

export default function* rootSaga() {
  yield all([authSaga(), watchProjectCreationRequest(), watchTopicSaga()]);
}
