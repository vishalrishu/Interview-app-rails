import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const EditInterview = (props)=> {

  const [start_time, setStarttime] = useState('');
  const [end_time, setEndtime] = useState('');
  const [description, setDescription] = useState('');
  const [participant_ids, setParticipants] = useState([]);


  useEffect(()=>{
    fetch(`http://localhost:3000/interviews/${props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
          setDescription(data.description)
          if(data.start_time)
          setStarttime(data.start_time.substring(0, 16))
          setEndtime(data.end_time.substring(0, 16))
        })
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault();
    let data= {
      interview: {
        start_time: start_time,
        end_time: end_time,
        description: description,
        participant_ids: []
      }
    }
    const req = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    };

    fetch(`http://localhost:3000/interviews/${props.match.params.id}`, req)
      .then(res => {
        res.json();
      })
    console.log("submitted form")
  };

  return (
    <div>
      <h1>Edit Interview</h1>
    <form onSubmit = {handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </label><br></br>
      <label>
        Start Time:
        <input type="datetime-local" value={start_time} onChange={(e) => {
            // console.log(e.target.value)
            setStarttime(e.target.value)
        }}/>
      </label><br></br>
      <label>
        End Time:
        <input type="datetime-local" value={end_time} onChange={(e) => setEndtime(e.target.value)}/>
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

export default EditInterview;