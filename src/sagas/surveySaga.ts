import { call, put, takeEvery, CallEffect, PutEffect } from 'redux-saga/effects';
import axios from 'axios';
import { Survey } from '../types';

export const fetchSurveysApi = async (): Promise<Survey[]> => {
  const response = await axios.get('/api/surveys');
  return response.data;
};

interface FetchSurveysRequestAction {
  type: 'FETCH_SURVEYS_REQUEST';
}

interface FetchSurveysSuccessAction {
  type: 'FETCH_SURVEYS_SUCCESS';
  payload: Survey[];
}

function* fetchSurveys(): Generator<CallEffect<Survey[]> | PutEffect<FetchSurveysSuccessAction>, void, Survey[]> {
  try {
    const response: Survey[] = yield call(fetchSurveysApi);
    yield put({ type: 'FETCH_SURVEYS_SUCCESS', payload: response });
  } catch (e) {
    console.error(e);
  }
}

function* surveySaga() {
  yield takeEvery('FETCH_SURVEYS_REQUEST', fetchSurveys);
}

export default surveySaga;
