import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home";
import NewInterview from './NewInterview';
import NewParticipant from './NewParticipant';
import Participants from './Participants';
import EditInterview from './EditInterview';
import ShowInterview from './ShowInterview';

const App = ()=> {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new_interview" component={NewInterview} />
        <Route path="/new_participant" component={NewParticipant} />
        <Route path="/participants" component={Participants} />
        <Route exact path="/interview/show/:id" component={ShowInterview}/>
        <Route path="/interview/edit/:id" component={EditInterview} />
      </Switch>
    </Router>
  );
}

export default App; 