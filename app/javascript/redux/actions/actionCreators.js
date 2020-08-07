import {LOAD_INTERVIEWS, LOAD_PARTICIPANTS, GET_INTERVIEW, ADD_INTERVIEW, SUBMIT_INTERVIEW, ADD_PARTICIPANT, EDIT_INTERVIEW, DELETE_INTERVIEW } from '../actions/actionTypes'

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

export const addInterview = (data)=> {
  return {type: ADD_INTERVIEW, payload: data}
}

export const addParticipant = (data) => {
  return {type: ADD_PARTICIPANT, payload: data}
}

export const patchInterview = (data) => {
  return {type: SUBMIT_INTERVIEW, payload: data}
}

export const editInterview = (data) => {
  return {type: EDIT_INTERVIEW, payload: data}
}

export const deleteInterview = (data) => {
  return {type: DELETE_INTERVIEW, payload: data}
}