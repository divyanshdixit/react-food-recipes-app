import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.jpeg';

const Navbar = () => {
    return (
        <div style={{padding:'0 15px'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* for an image  */}
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} width="200" height="25" alt=""/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarnav1" aria-controls="navbarnav1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarnav1">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact activeClassName="active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName="active" to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName="active" to="/recipes">Recipes</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
