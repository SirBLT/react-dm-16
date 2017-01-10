import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import About from './About';
import Nav from './Nav';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Nav}>
      <Route path="/home" component={App} />
      <Route path="/about/:id" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
