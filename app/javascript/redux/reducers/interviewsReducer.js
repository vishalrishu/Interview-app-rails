import { LOAD_PARTICIPANTS, LOAD_INTERVIEWS, GET_INTERVIEW, ADD_INTERVIEW } from "../actions/actionTypes";

function interviewsReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_INTERVIEWS:
            return [...action.payload];

        default:
            return state;
    }
}

export default interviewsReducer