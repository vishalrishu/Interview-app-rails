import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { fetchInterview } from "../redux/actions/interviewsAction";
import RenderInterview from "./RenderInterview";


const ShowInterview = (props)=> {
    
  console.log("Show", props)
    const { dispatch, interview} = props;
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

const mapStateToProps = (state) => ({
  interview: state.interview
});

export default connect(mapStateToProps)(ShowInterview);