import { LOAD_PARTICIPANTS } from "../actions/actionTypes";

function participantsReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_PARTICIPANTS:
            return [...action.payload];
        default:
            return state;
    }
}

export default participantsReducer