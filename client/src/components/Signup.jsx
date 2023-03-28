import "./Form.css"
//import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();

  // function to handle new registrations of applicants
  // function to post applicants to database

  function handleSignup(e) {
    e.preventDefault();

    const newApplicant = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      email: e.target.email.value,
      dob: e.target.dob.value,
    };

    //Post new users

    fetch("http://localhost:8001/applicants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newApplicant),
    })
      .then((res) => res.json())
      .then((data) => {
        //Display succesfull response
        toast.success("Succesfully Registered");
        //navigates to login page
        //will redirect to login page
        navigate("/login");
      });
  }

  return (
    <div className="page container-flex">
      <div className="form">
        
        <h1 className="form-title">Signup</h1>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input className="form-control" name="firstname" type="text" placeholder="First Name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input className="form-control" name="lastname" type="text" placeholder="Last Name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input className="form-control" name="username" type="text" placeholder="Username" />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" name="email" type="email" placeholder="Email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input className="form-control" name="dob" type="date" placeholder="Date of Birth" />
          </div>

          <div className="form-submit">
            <button type="submit" className="btn">Sign Up</button>
          </div>
        
          

        </form>
        
        {/* Switch to Logging In */}
        <p className="container">
            Already have an account?<a href="/login">Log in</a>
        </p>

      </div>
    </div>
  );
}

export default Signup;
