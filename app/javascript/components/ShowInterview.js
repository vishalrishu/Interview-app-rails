import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"

const ShowInterview = (props)=> {

  const [interview, setInterview] = useState();

  useEffect(()=>{
    fetch(`http://localhost:3000/interviews/${props.match.params.id}`)
      .then(res => res.json())
      .then(data => {setInterview(data)})
  }, [])

  return (
    <div>
      {!interview ? (
        ""
      ) : (
        <div>
          <h3>{interview.description}</h3>
          <p>Start Time: {interview.start_time}</p>
          <p>End Time: {interview.end_time}</p>
          <div>
            <h4>Participants</h4>
            </div>
          <Link to={`/interview/edit/${props.match.params.id}`}>Edit</Link>
          <Link to="/"> Home</Link>
        </div>
      )}
    </div>
  );
}

export default ShowInterview;