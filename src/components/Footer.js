import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <div className="footer-container">
                    <Link className="footer-logo" to="/">
                        <img src={this.props.logo} alt="Error"/></Link>
                </div>
            </footer>
        );
    }
}

export default Footer;