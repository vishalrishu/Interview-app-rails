import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const NewParticipant = ()=> {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [role, setRole] = useState();


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("submitted form")
  };

  return (
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
  );
}

export default NewParticipant;