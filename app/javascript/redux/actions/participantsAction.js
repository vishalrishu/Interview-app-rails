import { loadParticipants, addParticipant } from "./actionCreators";

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

export function createParticipant(data) {
    return async (dispatch) => {
        try {
            const req = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
              };
          
              fetch(`http://localhost:3000/participants`, req)
                .then(res => {
                    console.log(res);
                    dispatch(addParticipant());
                });
              console.log("submitted form")
        } catch(e) {
            console.log(e)
        }
    };
}