import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { fetchInterview, submitInterview, edit } from "../redux/actions/interviewsAction";
import { useSelector, useDispatch } from "react-redux";

const EditInterview = (props)=> {  

  const {description, start_time, end_time, participant_ids} = useSelector(
    state => state.interview
  );

  //console.log("gel", interview)
  const dispatch = useDispatch()

  const { match: { params: { id } } } = props;

  useEffect(() => {
    dispatch(fetchInterview(id))
    console.log("inside edit useeffect")
  }, [dispatch])
    // console.log(interview)
    // if(interview) {
    //   setDescription(interview.description)
    // }
    console.log("data")

  let history = useHistory();
  const handleSubmit = (e) =>{
    e.preventDefault();
    let data= {
      id: id,
      interview: {
        start_time: start_time,
        end_time: end_time,
        description: description,
        participant_ids: []
      }
    }
    dispatch(submitInterview(data))
    history.push("/")
  };

  const changeHandler=(key, value) => {
    dispatch(edit(key, value))
  }

  return (
    <div>
      <h1>Edit Interview</h1>
    <form onSubmit = {handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => changeHandler('description' ,e.target.value)}/>
      </label><br></br>
      <label>
        Start Time:
        <input type="datetime-local" value={start_time} onChange={(e) => {
            // console.log(e.target.value)
            changeHandler('start_time' ,e.target.value)
        }}/>
      </label><br></br>
      <label>
        End Time:
        <input type="datetime-local" value={end_time} onChange={(e) => changeHandler('end_time',e.target.value)}/>
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