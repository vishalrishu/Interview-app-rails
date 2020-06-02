import { LOAD_PARTICIPANTS, LOAD_INTERVIEWS } from "../actions/actionTypes";

function interviewsReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_PARTICIPANTS:
            return action.participants;
        case LOAD_INTERVIEWS:
            return { interviews: action.payload };
        default:
            return state;
    }
}

export default interviewsReducer