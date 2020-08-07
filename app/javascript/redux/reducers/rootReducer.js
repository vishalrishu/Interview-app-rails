
import { combineReducers } from 'redux'
import interviewsReducer from './interviewsReducer';
import participantsReducer from './participantsReducer';
import interviewReducer from './interviewReducer';

const rootReducer = combineReducers({
    interviews: interviewsReducer,
    participants: participantsReducer,
    interview: interviewReducer
});

export default rootReducer;