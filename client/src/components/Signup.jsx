//import React from "react";
<<<<<<< HEAD
//import { useNavigate } from 'react-router-dom';
//import { toast } from "react-toastify";
=======
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
>>>>>>> main


function Signup(){

<<<<<<< HEAD
   // const navigate = useNavigate();
=======
    const navigate = useNavigate();
>>>>>>> main


    // function to handle new registrations of applicants
    // function to post applicants to database

    function handleSignup(e){
<<<<<<< HEAD
        
=======

>>>>>>> main
        e.preventDefault()

        const newApplicant={
            firstname : e.target.firstname.value,
            lastname : e.target.lastname.value,
            username : e.target.username.value,
            email : e.target.email.value,
            dob : e.target.dob.value,
        }

        //Post new users

        fetch('http://localhost:8001/applicants', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(newApplicant),
          })
        .then(res=>res.json())
        .then(data=>{
<<<<<<< HEAD
            console.log(data);

           // toast.success('Succesfully Registered')
            //navigate('/login')
=======
           
            //Display succesfull response
            toast.success('Succesfully Registered')
            //navigates to login page
            navigate('/login')
>>>>>>> main
        })

    }

    return(
        <div>
            <div>
                <form onSubmit={handleSignup}>
                    <h1>SignUp</h1>
                        <input name="firstname" type='text' placeholder="first name"/>
                        <input name="lastname" type='text' placeholder="last name"/>
                        <input name="username" type='text' placeholder="username"/>
                        <input name="email" type='email' placeholder="email"/>
                        <input name="dob" type='date' placeholder="DOB"/>
                        <input type='submit'/>

                </form>
                    {/* button for switching accounts */}
                    <p>Already have an account? <a href="!#">Login</a></p>
            </div>
        </div>
    )
}

export default Signup;
