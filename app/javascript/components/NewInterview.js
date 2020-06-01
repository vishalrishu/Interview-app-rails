import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const NewInterview = ()=> {

  const [start_time, setStarttime] = useState();
  const [end_time, setEndtime] = useState();
  const [description, setDescription] = useState();
  const [participant_ids, setParticipants] = useState();

  useEffect(()=>{

    const req = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };

    fetch(`http://localhost:3000/participants`, req)
      .then(res => res.json())
  },[]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("submitted form")
  };

  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </label><br></br>
      <label>
        Start Time:
        <input type="datetime-local" value={start_time} onChange={(e) => setStarttime(e.target.value)}/>
      </label><br></br>
      <label>
        End Time:
        <input type="datetime-local" value={end_time} onChange={(e) => setEnd(e.target.value)}/>
      </label><br></br>
      <label>
        Participants
        
      </label><br></br>
      <input type="submit" value="Submit" />
    </form>
    <div>
      <Link to="/">Interview List</Link><br></br>
      
      <Link to="/participants">Participant List</Link>

    </div>
    </div>
  );
}

export default NewInterview;