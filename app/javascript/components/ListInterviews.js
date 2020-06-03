import React from 'react'
import { Link } from "react-router-dom";

const ListInterviews = (props)=>{
  const interviews = props.interviews;
// console.log(interviews);
// console.log("List interviews");
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
        {interviews ? (
          interviews.map((interview) => (
            <tr key={interview.id}>
            <td> {interview.description} </td>
            <td> {interview.start_time} </td>
            <td> {interview.end_time} </td>
            <td><Link to={`/interview/show/${interview.id}`}>Show</Link></td>
            <td><Link to={`/interview/edit/${interview.id}`}>Edit</Link></td>
            <td > <button onClick={(e) => handleDelete(interview.id, e)}>Delete</button></td>
            </tr>
            ))
        ) : (
        console.log("Error")
        )}
        </tbody>
        </table>
        <Link to="/new_interview">Create Interview</Link><br></br>
   
        <Link to="/new_participant">Create Participant</Link><br></br>
        <Link to="/participants">Participant List</Link>
    </div>
  );
}

export default ListInterviews;