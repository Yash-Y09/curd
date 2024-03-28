import React from "react";
import{Link, NavLink} from "react-router-dom"

const Navbarapp = () => {
    return (
      
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <a className="navbar-brand" href="#">CURD</a>
                
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
        
            </nav>
        
    );
}

export default Navbarapp;