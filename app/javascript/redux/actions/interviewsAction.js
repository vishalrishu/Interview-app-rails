import { loadInterviews } from "./actionCreators";

export function fetchInterviews() {
    return async (dispatch) => {
  
      try {
        const res = await fetch(
          `http://localhost:3000/home`
        );
        const data = await res.json();
        console.log(data);
        dispatch(loadInterviews(data));
      } catch (error) {
        console.log(error);
      }
    };
  }