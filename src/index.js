import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './page/home'
import {BrowserRouter as Router, Route} from 'react-router-dom'

console.clear()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <Home />
      </Route>
      
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
