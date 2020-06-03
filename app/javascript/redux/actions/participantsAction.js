import { loadParticipants } from "./actionCreators";

export function fetchParticipants() {
    return async (dispatch) => {
  
      try {
        const res = await fetch(
          `http://localhost:3000/participants`
        );
        const data = await res.json();
        console.log(data);
        dispatch(loadParticipants(data));
      } catch (error) {
        console.log(error);
      }
    };
  }