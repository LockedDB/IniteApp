import {all} from 'redux-saga/effects';
import {watchProjectCreationRequest} from "../Modules/Project/Redux/saga";

export default function* rootSaga() {
  yield all([
    watchProjectCreationRequest()
  ]);
}
