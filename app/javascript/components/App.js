import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import NewInterview from './NewInterview';
import NewParticipant from './NewParticipant';
import Participants from './Participants';

const App = ()=> {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new_interview" component={NewInterview} />
        <Route path="/new_participant" component={NewParticipant} />
        <Route path="/participants" component={Participants} />
      </Switch>
    </div>
  );
}

export default App; 