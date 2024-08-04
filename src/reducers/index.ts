import { combineReducers } from 'redux';
import surveyReducer from './surveyReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  survey: surveyReducer,
  auth: authReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
