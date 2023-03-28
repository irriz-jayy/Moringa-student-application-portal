import "./NavBar.css"
import React from "react";
import { Link } from "react-router-dom"

function Navbar(){
    return (
        <div className="navbar border-bottom border-5">
            <div className="container-fluid">
                
                <a className="navbar-brand" href="/">
                    <img src="../frontend_images/Argonaut web services.png" alt="logo" height="60"/>
                </a>

                <div className="navlinks container-flex">
                    <Link to="/courses" className="btn">All Courses</Link>

                    <Link to="/applications" className="btn">My Applications</Link>
                    
                    <Link to="/login" className="btn">Login</Link>
                </div>
                
            </div>

        </div>

    )
}
export default Navbar;
