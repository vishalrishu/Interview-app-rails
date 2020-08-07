import React from 'react'
import {Link} from "react-router-dom"
const RenderInterview = (props) => {

  const { interview } = props;
  console.log(props)
  console.log("Render")
  return Object.keys(interview).length !== 0 ? (
    <div>
        <h3>{interview.description}</h3>
        <p>Start Time: {interview.start_time}</p>
        <p>End Time: {interview.end_time}</p>
        <div>
        <h4>Participants</h4>
        </div>
        <Link to={`/interview/edit/${interview.id}`}>Edit</Link>
        <Link to="/"> Home</Link>
    </div>
  ) : null;
};

export default RenderInterview; 