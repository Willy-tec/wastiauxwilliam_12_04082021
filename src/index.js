import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './page/home';
import Nav from './component/nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

console.clear();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Nav />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/user/:id">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
