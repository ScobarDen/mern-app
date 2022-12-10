import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Navbar = () => {
    const history = useHistory();
    const {logout} = useContext(AuthContext);
    const logoutHandler = e => {
        e.preventDefault();
        logout();
        history.push("/");
    }

    return (
        <nav>
            <div className="nav-wrapper blue-grey darken-3" style={{padding: '0 1rem'}}>
                <span className="brand-logo">Сокращение ссылок</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><NavLink to="/links">Ссылки</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;