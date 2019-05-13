import React from 'react';
class Error extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="error" >
                <footer className="App-error">
                    <h2>404 not found</h2>
                </footer>
            </div>
        );
    }
}

export default Error;
