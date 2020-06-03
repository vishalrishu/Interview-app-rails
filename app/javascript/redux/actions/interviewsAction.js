import { loadInterviews, getInterview, addInterview, patchInterview } from "./actionCreators";
import React from 'react';
import { Redirect } from "react-router-dom";

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

export function createInterview(data) {
  return async (dispatch) => {
    try {
      const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    };

    fetch(`http://localhost:3000/interviews`, req)
      .then(res => {
        console.log(res)
        if(res.ok) {
          alert("Interview Created");
          return <Redirect to="/" /> 
        }
        console.log("success", res)
        
        dispatch(addInterview());
      })
    } catch(e) {

    }
  }
}

export function editInterview(id, data) {
  return async (dispatch) =>{
    try {
      const req = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      };
  
      fetch(`http://localhost:3000/interviews/${id}`, req)
        .then(res => {
          dispatch(patchInterview())
        })
      console.log("submitted form")
    } catch(e) {
      console.log(e);
    }
  }
}