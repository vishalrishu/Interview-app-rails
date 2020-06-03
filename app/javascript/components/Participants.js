import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchParticipants } from "../redux/actions/participantsAction";
import ListParticipants from "./ListParticipants";


const Participants = (props)=> {
  console.log("Home", props)
  const {dispatch, participants} = props;
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

const mapStateToProps = (state) => ({
  participants: state.participants,
});

export default connect(mapStateToProps)(Participants);