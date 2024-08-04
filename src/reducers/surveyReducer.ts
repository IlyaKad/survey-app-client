import { Survey } from '../types';

interface SurveyState {
  surveys: Survey[];
}

const initialState: SurveyState = {
  surveys: [],
};

interface FetchSurveysSuccessAction {
  type: 'FETCH_SURVEYS_SUCCESS';
  payload: Survey[];
}

type Action = FetchSurveysSuccessAction;

const surveyReducer = (state = initialState, action: Action): SurveyState => {
  switch (action.type) {
    case 'FETCH_SURVEYS_SUCCESS':
      return { ...state, surveys: action.payload };
    default:
      return state;
  }
};

export default surveyReducer;
