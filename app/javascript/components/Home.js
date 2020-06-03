import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {connect, useSelector, useDispatch} from 'react-redux'
import { fetchInterviews } from '../redux/actions/interviewsAction'
import ListInterviews from './ListInterviews'

const Home = (props)=> {
  
  const interviews = useSelector(
    state => state.interviews
  );
  const dispatch = useDispatch()


  // console.log("Home", props)
  // const {dispatch, interviews} = props;
  // console.log("interviews", interviews)
  useEffect(()=>{
    dispatch(fetchInterviews())
  }, [])

  return (
    <div>
      <ListInterviews interviews={interviews} />
    </div>
  );
}

export default Home;