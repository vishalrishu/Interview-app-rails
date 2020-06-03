import {LOAD_INTERVIEWS, LOAD_PARTICIPANTS, GET_INTERVIEW, ADD_INTERVIEW, ADD_PARTICIPANT, EDIT_INTERVIEW } from '../actions/actionTypes'

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

export const addInterview = ()=> {
  return {type: ADD_INTERVIEW}
}

export const addParticipant = () => {
  return {type: ADD_PARTICIPANT}
}

export const patchInterview = () => {
  return {type: EDIT_INTERVIEW}
}