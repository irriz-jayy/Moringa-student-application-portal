import "./NavBar.css"
import React from "react";
import { Link } from "react-router-dom"

function Navbar({ currentUser, setCurrentUser, navigate }){

    const logo_url = "https://raw.githubusercontent.com/irriz-jayy/Moringa-student-application-portal/main/client/src/frontend_images/Argonaut%20web%20services.png"

    // Event Handlders
    function handleLogout(e) {
        fetch('/logout', {
            method: "DELETE"
        })
        navigate("/")

        setCurrentUser({ })
    }


   // console.log(currentUser.id)

    return (
        <div className="navbar border-bottom border-5">
            <div className="container-fluid">

                <a className="navbar-brand" href="/">
                    <img src={logo_url} height="60"/>
                </a>

                <div className="navlinks container-flex">
                    <Link to="/courses" className="btn">All Courses</Link>

                    <Link to="/my-applications" className="btn">My Applications</Link>

                    {!currentUser.username ? <Link to="/login" className="btn">Login</Link> : <button onClick={handleLogout} className="btn">Logout</button>}
                </div>

            </div>

        </div>

    )
}
export default Navbar;
