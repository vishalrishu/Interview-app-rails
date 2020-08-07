// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from '../components/App.js'; 
// import { BrowserRouter as Router, Route } from "react-router-dom";

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Router>
//       <Route path = "/" component = {App} />
//     </Router> ,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "../redux/reducers/rootReducer";
import App from "../components/App";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});