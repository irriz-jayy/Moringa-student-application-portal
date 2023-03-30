import "./Form.css"
import React, { useState } from "react";


function Login(){

    const[loginFormData, setLoginFormData] = useState({
        username: '',
        password: ''
    });

    // Function to handle changing form fields
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        setLoginFormData({
            ...loginFormData,
            [name]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginFormData)
        })
        .then(res=>res.json())
        .then(data=> setLoginFormData(data))
    }
    console.log(loginFormData)

    return (
        <div className="page container-flex">
            <div className="form">
                
                <h1 className="form-title">Login</h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input className="form-control" name="username" type='text' placeholder="Username"value={loginFormData.username}  onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control" name="password" type='password' placeholder="Password" value={loginFormData.password} onChange={handleChange}/>
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
