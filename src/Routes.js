import React from 'react';
import Home from './containers/Home/Home';
import App from './containers/App/App';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/App" component={App}/>
                </div>
            </Router>
        );
    }
}

export default Routes;