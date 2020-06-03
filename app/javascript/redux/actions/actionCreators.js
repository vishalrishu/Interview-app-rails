import {LOAD_INTERVIEWS, LOAD_PARTICIPANTS, GET_INTERVIEW } from '../actions/actionTypes'

export function loadParticipants(participants) {
  return { type: LOAD_PARTICIPANTS, payload: participants }
}

export const loadInterviews = (interviews)=> {
  return {type: LOAD_INTERVIEWS, payload: interviews};
}

export const getInterview = (interview)=> {
  console.log(interview)
  console.log("Get")
  return {type: GET_INTERVIEW, payload: interview};
}

export const addInterview = (interview)=> {
  return {type: ADD_INTERVIEW, payload: interview}
}