import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { createParticipant } from "../redux/actions/participantsAction";
import { useSelector, useDispatch } from "react-redux";
const NewParticipant = ()=> {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [role, setRole] = useState();
  
  const participant = useSelector(
    state => state.participant
  );
  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault();
    let data= {
      participant: {
        name: name,
        email: email,
        address: address,
        role: role
      }
    }
    dispatch(createParticipant(data))
  };

  return (
      <div>
        <h1>Create Participant</h1>
    <form onSubmit = {handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </label><br></br>
      <label>
        Email Id:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label><br></br>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
      </label><br></br>
      <label>
        Role:
        
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

export default NewParticipant;