import React from 'react';
import { Link } from 'react-router-dom'
class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="contact" >
                <footer className="App-contact">
                    <h4>This is Contact</h4>
                    <Link
                        to={{
                            pathname: "/courses",
                            search: "?sort=name",
                            hash: "#the-hash",
                            state: { fromDashboard: true }
                        }}
                        replace
                    >aaaa</Link>
                </footer>
            </div>
        );
    }
}

export default Contact;
