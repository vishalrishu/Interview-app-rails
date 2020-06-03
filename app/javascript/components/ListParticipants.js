import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const ListParticipants = (props)=> {
    const participants = props.participants;
    console.log(participants);
    console.log("List Participants");
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
    {participants ? (
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
)}

export default ListParticipants;