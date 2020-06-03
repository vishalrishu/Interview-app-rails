import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { fetchInterview, editInterview } from "../redux/actions/interviewsAction";
import { useSelector, useDispatch } from "react-redux";

const EditInterview = (props)=> {

  const [start_time, setStarttime] = useState('');
  const [end_time, setEndtime] = useState('');
  const [description, setDescription] = useState('');
  const [participant_ids, setParticipants] = useState([]);
  

  const interview = useSelector(
    state => state.interview.interview
  );
  const dispatch = useDispatch()

  const { match: { params: { id } } } = props;

  useEffect(() => {
    dispatch(fetchInterview(id))
  }, [dispatch])
    console.log(interview)
    console.log("data")

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
    dispatch(editInterview(id , data))
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