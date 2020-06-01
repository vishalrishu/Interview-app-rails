import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import Edit from "./Edit";
import NewInterview from './NewInterview';
import NewParticipant from './NewParticipant';

const App = ()=> {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/interview/new" component={NewInterview} />
        <Route path="/participant/new" component={NewParticipant} />

        <Route path="/interview/:id/edit" component={Edit} />
      </Switch>
    </div>
  );
}

export default App; 