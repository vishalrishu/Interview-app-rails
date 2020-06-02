import {LOAD_INTERVIEWS, LOAD_PARTICIPANTS } from '../actions/actionTypes'

export function loadParticipants(participants) {
  return { type: LOAD_PARTICIPANTS, participants: participants }
}

export const loadInterviews = (interviews)=> {
  return {type: LOAD_INTERVIEWS, payload: interviews};
}