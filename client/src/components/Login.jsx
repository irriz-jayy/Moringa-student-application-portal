import "./Form.css"
import React, { useState } from "react";
import { toast } from "react-toastify";


function Login({ setCurrentUser, navigate }){

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

    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault();

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginFormData)
        })
        .then(res=>{
            if(res.status ===401){
                res.json()
                .then(data=>{
                    setErrors(data.errors)
                    console.log(errors);
                })
            }else{
                res.json()
                .then(data=> setCurrentUser(data))
                toast.success("Login Succesful");
                navigate("/")
            }
        })


        e.target.reset()

    }

    return (
        <div className="page container-flex">
            <div className="form">

                <h1 className="form-title">Login</h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input className="form-control" name="username" type='text' placeholder="Username" value={loginFormData.username}  onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input className="form-control" name="password" type='password' placeholder="Password" value={loginFormData.password} onChange={handleChange}/>
                    </div>

                    {errors ? errors.map((err,index)=> <p className="error" key={index}>*{err}!</p>):null}

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
