import { ADD_PARTICIPANT } from "../actions/actionTypes";

function participantReducer(state = {participant: []}, action) 
{
    switch(action.type) {
        case ADD_PARTICIPANT:
            return {interview: action.payload};
        default:
            return state;
    }
}

export default participantReducer