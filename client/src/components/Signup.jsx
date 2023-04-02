import "./Form.css"
import React, {useState} from "react";
import { toast } from "react-toastify";

function Signup({ navigate }) {
  const [signupFormData, setSignupFormData] = useState({
    first_name: '',
      last_name: '',
      username: '',
      date_of_birth: '',
      email:'',
      password: ''
  })
  const [errors, setErrors] =useState({})
  // function to handle new registrations of applicants
  // function to post applicants to database
  function handleSignupChange(e){
      const name = e.target.name
      const value = e.target.value
      setSignupFormData({
        ...signupFormData,[name] :value
      })
  }


  function handleSignup(e) {
    e.preventDefault();

    //Post new users

    fetch("/applicants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(signupFormData)
    })
      .then((res) => {
        if(res.status===422){
          res.json()
          .then(data =>{
            setErrors(data.errors)
          })
        }else{
          res.json()
          .then(data=>{
             console.log(signupFormData)
        //Display succesfull response
        toast.success("Succesfully Registered");
        //navigates to login page
        //will redirect to login page
        navigate("/login");
          })
        }
      })

      e.target.reset()
  }
console.log(errors);
  return (
    <div className="page container-flex">
      <div className="form">

        <h1 className="form-title">Signup</h1>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input className="form-control" value={signupFormData.first_name} onChange={handleSignupChange} name="first_name" type="text" placeholder="First Name" />
            {errors.first_name ? errors.first_name.map((err,index)=> <p style={{color: "red"}} key ={index}>first name {err}</p>):null}
          </div>


          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input className="form-control" value={signupFormData.last_name} onChange={handleSignupChange} name="last_name" type="text" placeholder="Last Name" />
            {errors.last_name ? errors.last_name.map((err,index)=> <p style={{color: "red"}} key ={index}>Last name {err}</p>):null}
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input className="form-control" value={signupFormData.username} onChange={handleSignupChange} name="username" type="text" placeholder="Username" />
            {errors.username ? errors.username.map((err,index)=> <p style={{color: "red"}} key ={index}>username {err}</p>):null}
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input className="form-control" value={signupFormData.date_of_birth} onChange={handleSignupChange} name="date_of_birth" type="date" placeholder="Date of Birth" />
            {errors.date_of_birth ? errors.date_of_birth.map((err,index)=> <p style={{color: "red"}} key ={index}>Age {err}</p>):null}
            {errors.age ? errors.age.map((err,index)=> <p style={{color: "red"}} key ={index}>{err}</p>):null}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" value={signupFormData.email} onChange={handleSignupChange} name="email" type="email" placeholder="Email" />
            {errors.email ? errors.email.map((err,index)=> <p style={{color: "red"}} key ={index}>Email {err}</p>):null}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" value={signupFormData.password} onChange={handleSignupChange} name="password" type="password" placeholder="Password" />
            {errors.password ? errors.password.map((err,index)=> <p style={{color: "red"}} key ={index}>Password {err}</p>):null}
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
