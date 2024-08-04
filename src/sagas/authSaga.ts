import { call, put, takeEvery, CallEffect, PutEffect } from 'redux-saga/effects';
import { loginApi } from '../utils/auth';
import { User, LoginRequestAction, LoginSuccessAction, LogoutAction } from '../types';

function* login(action: LoginRequestAction): Generator<CallEffect<User> | PutEffect<LoginSuccessAction>, void, User> {
  try {
    const user: User = yield call(loginApi, action.payload);
    yield put({ type: 'LOGIN_SUCCESS', payload: user });
  } catch (e) {
    console.error(e);
  }
}

function* logout(): Generator<PutEffect<LogoutAction>, void, void> {
  try {
    // Perform any necessary cleanup here (e.g., removing tokens from local storage)
    yield put({ type: 'LOGOUT' });
  } catch (e) {
    console.error(e);
  }
}

function* authSaga() {
  yield takeEvery('LOGIN_REQUEST', login);
  yield takeEvery('LOGOUT', logout);
}

export default authSaga;
