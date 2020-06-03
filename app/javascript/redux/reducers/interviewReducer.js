import { GET_INTERVIEW, ADD_INTERVIEW, EDIT_INTERVIEW } from "../actions/actionTypes";

function interviewReducer(state = {interview: []}, action) 
{
    switch(action.type) {
        case GET_INTERVIEW:
            return {interview: action.payload};
        case ADD_INTERVIEW:
            return {interview: action.payload};
        case EDIT_INTERVIEW:
            return {interview: action.payload};
        default:
            return state;
    }
}

export default interviewReducer