import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Participants = ()=> {
  
  const [participants, setParticipants] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/participants")
    .then(res => res.json())
    .then(participant => {setParticipants(participant)})
  }, [])
  return (
    <div>
    <h1> Participant List </h1>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address </th>
        </tr>
      </thead>
      <tbody>
    {participants.length > 0 ? (
      participants.map((participant) => (
        <tr key={participant.id}>
        <td> {participant.name} </td>
        <td> {participant.email} </td>
        <td> {participant.address} </td>
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

export default Participants;