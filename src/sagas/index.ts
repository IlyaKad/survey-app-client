import { all, fork } from 'redux-saga/effects';
import surveySaga from './surveySaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([fork(surveySaga), fork(authSaga)]);
}
