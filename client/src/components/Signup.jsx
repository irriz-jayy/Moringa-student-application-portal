import "./Form.css"
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [signupFormData, setSignupFormData] = useState({
    first_name: '',
      last_name: '',
      username: '',
      email:'',
      date_of_birth: ''
  })

  // function to handle new registrations of applicants
  // function to post applicants to database
  function handleSignupChange(e){
      const name = e.target.name
      const value = e.target.value
      setSignupFormData({
        ...signupFormData,[name] :value
      })
  }

    console.log(signupFormData)

  function handleSignup(e) {
    e.preventDefault();

    //Post new users

    fetch("/applicants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(signupFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        //Display succesfull response
        toast.success("Succesfully Registered");
        //navigates to login page
        //will redirect to login page
        navigate("/login");
      });
      e.target.reset()
  }

  return (
    <div className="page container-flex">
      <div className="form">

        <h1 className="form-title">Signup</h1>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input className="form-control" value={signupFormData.first_name} onChange={handleSignupChange} name="first_name" type="text" placeholder="First Name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input className="form-control" value={signupFormData.last_name} onChange={handleSignupChange} name="last_name" type="text" placeholder="Last Name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input className="form-control" value={signupFormData.username} onChange={handleSignupChange} name="username" type="text" placeholder="Username" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" value={signupFormData.email} onChange={handleSignupChange} name="email" type="email" placeholder="Email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input className="form-control" value={signupFormData.date_of_birth} onChange={handleSignupChange} name="date_of_birth" type="date" placeholder="Date of Birth" />
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
