import React, {useState, useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchInterview } from "../redux/actions/interviewsAction";
import RenderInterview from "./RenderInterview";


const ShowInterview = (props)=> {
    
  
  const interview = useSelector(
    state => state.interview
  );
  const dispatch = useDispatch()
  console.log("Show", props)
  const { match: { params: { id } } } = props;

  console.log(interview);
  useEffect(() => {
    dispatch(fetchInterview(id))
  }, [dispatch])
  return (
    <div >{interview ? 
      (<RenderInterview interview={interview}/>):("")}

    </div>
  );
}

export default ShowInterview;