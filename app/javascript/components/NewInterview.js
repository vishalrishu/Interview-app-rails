import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createInterview, edit } from "../redux/actions/interviewsAction";

const NewInterview = ()=> {

  const {description, start_time, end_time, participant_ids} = useSelector(
    state => state.interview
  );
  
  let history = useHistory();

  const dispatch = useDispatch()

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
    dispatch(createInterview(data))
    history.push("/");
  };

  const changeHandler=(key, value) => {
    dispatch(edit(key, value))
  }

  return (
    <div>
      <h1>Schedule Interview</h1>
    <form onSubmit = {handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => changeHandler('description', e.target.value)}/>
      </label><br></br>
      <label>
        Start Time:
        <input type="datetime-local" value={start_time} onChange={(e) => changeHandler('start_time' ,e.target.value)}/>
      </label><br></br>
      <label>
        End Time:
        <input type="datetime-local" value={end_time} onChange={(e) => changeHandler('end_time', e.target.value)}/>
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