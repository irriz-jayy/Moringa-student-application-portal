import "./Form.css"
import React, { useState } from "react";


function Login(){

    const[username, setUsername] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username })
        })
        .then(res=>res.json())
        .then(data=> setUsername(data))
    }
    console.log(username)

    return (
        <div className="page container-flex">
            <div className="form">
                
                <h1 className="form-title">Login</h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input className="form-control" name="username" type='text' placeholder="Username"value={username}  onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control" name="email" type='email' placeholder="Email"/>
                    </div>

                    <div className="form-submit">
                        <button type="submit" className="btn">Log In</button>
                    </div>

                </form>

                {/* Switch to Signing Up */}
                <p className="container">
                    Don't have an account?<a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login;
