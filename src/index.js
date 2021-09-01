import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './page/home';
import Nav from './component/nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Nav />
            <Switch>
                <Route
                    path="/user/:userId"
                    render={(props) => <Home {...props} />}
                ></Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
