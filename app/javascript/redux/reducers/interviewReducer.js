import { GET_INTERVIEW, ADD_INTERVIEW, EDIT_INTERVIEW, SUBMIT_INTERVIEW, DELETE_INTERVIEW } from "../actions/actionTypes";

export const initialState = {
    description: '',
    start_time: '',
    end_time: '',
    participant_ids: []
}

function interviewReducer(state = initialState, action) 
{
    switch(action.type) {
        case GET_INTERVIEW:
            return {...action.payload};
        case ADD_INTERVIEW:
            return {...action.payload};
        case SUBMIT_INTERVIEW:
            return {...action.payload};
        case EDIT_INTERVIEW:
            const payload = action.payload
            return {...state, [payload.key]: payload.value};
        case DELETE_INTERVIEW:
            return {...action.payload};
        default:
            return state;
    }
}

export default interviewReducer