import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchParticipants } from "../redux/actions/participantsAction";
import ListParticipants from "./ListParticipants";


const Participants = (props)=> {
  // console.log("Home", props)
  // debugger
  // const {dispatch, participants} = props;
  const participants = useSelector(
    state => {
      console.log(state)
      return state.participants
    }
  );
  const dispatch = useDispatch()
  console.log("particioants", participants)
  useEffect(()=>{
    dispatch(fetchParticipants())
  }, [])

  return (
    <div>
      <ListParticipants participants={participants} />
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   participants: state.participants,
// });

// export default connect(mapStateToProps)(Participants);
export default Participants