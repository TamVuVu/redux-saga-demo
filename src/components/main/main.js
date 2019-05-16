import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import About from '../about';
import Contact from '../contact';
import Home from '../home';
import Error from '../404';
import { BB } from '../../actions';
class Main extends React.Component {
    render() {
        return (
            <div className="main" >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Error} />
                </Switch>
            </div>
        );
    }
}

export default(Main);
