import { LOAD_PARTICIPANTS } from "../actions/actionTypes";

function participantsReducer(state = {participants: []}, action) 
{
    switch(action.type) {
        case LOAD_PARTICIPANTS:
            return { participants: action.payload};
        default:
            return state;
    }
}

export default participantsReducer