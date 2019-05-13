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
        console.log(this.props.todos)
        return (
            <div className="main" >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Error} />
                </Switch>
                {this.props.todos && this.props.todos.map((i, key) =>
                    <p key={key}>{i}</p>)
                }
                <button onClick={this.props.bb} >Bb</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    todos: [...state.todos]
})
const mapDispatchToProps = dispatch => ({
    bb: () => { dispatch(BB()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
