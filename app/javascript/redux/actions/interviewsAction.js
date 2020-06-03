import { loadInterviews, getInterview, addInterview } from "./actionCreators";

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

export function fetchInterview(id) {
    return async (dispatch) => {
      try {
        const res = await fetch(
          `http://localhost:3000/interviews/${id}`
          );
          const data = await res.json();
          console.log(data)
          dispatch(getInterview(data));
        } catch (error) {
          console.log(error);
        }
      };
}

export function createInterview(interview) {
  return async (dispatch) => {
    try {
      const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(interview)
    };

    fetch(`http://localhost:3000/interviews`, req)
      .then(res => {
        res.json();
        dispatch(addInterview());
      })
    } catch(e) {

    }
  }
}