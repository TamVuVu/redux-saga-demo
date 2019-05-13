import React from 'react';
import './style.scss'
class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="footer" >
                <footer className="App-footer">
                    <h4>This is footer</h4>
                </footer>
            </div>
        );
    }
}

export default Footer;
