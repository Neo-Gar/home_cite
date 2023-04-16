import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <nav className="header-container">
                    <Link className="header-logo" to="/">
                        <img src={this.props.logo} alt="Error"/>
                    </Link>
                    <Link to="/">На главную</Link>
                    <Link to="/food">Еда</Link>
                    <Link to="/notes">Записки</Link>
                </nav>
            </header>
        );
    }
}

export default Header;