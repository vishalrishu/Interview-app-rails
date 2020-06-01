import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Home = ()=> {

  const [interviews, setInterviews] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/home")
      .then(res => res.json())
      .then(interview => {setInterviews(interview)})
  }, [])
  return (
    <div>
      <h1> Interview List </h1>
        <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Start Time</th>
            <th>End Time </th>
          </tr>
        </thead>
        <tbody>
      {interviews.length > 0 ? (
        interviews.map((interview) => (
          <tr key={interview.id}>
          <td> {interview.description} </td>
          <td> {interview.start_time} </td>
          <td> {interview.end_time} </td>
          </tr>
        ))
      ) : (
        console.log("Error")
      )}
      </tbody>
      </table>
      <Link to="/new_interview">Create Interview</Link><br></br>
      
      <Link to="/new_participant">Create Participant</Link>

    </div>
  );
}

export default Home;