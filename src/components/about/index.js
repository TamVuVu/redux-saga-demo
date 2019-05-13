import React from 'react';
import { callApi } from '../../api'
class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        callApi("GET", "randoma", undefined,
            (res) => console.log(res),
            (err) => console.log(err.response.status)
        );
    }
    render() {
        return (
            <div className="about" >
                <footer className="App-about">
                    <h4>This is About</h4>
                </footer>
            </div>
        );
    }
}

export default About;
