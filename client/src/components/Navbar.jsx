import React from "react";
import { Link } from "react-router-dom"

function Navbar(){
    return (
        <div>
            <div>
                {/* replace H1 with the official logo */}

            <h1>ARGONAUT</h1>

                <button><Link to="/courses">All Courses</Link></button>
                <button><Link to="/applications">My Applications</Link></button>
                <button><Link to="/login">Login</Link></button>
            </div>

            </div>

    )
}
export default Navbar;
