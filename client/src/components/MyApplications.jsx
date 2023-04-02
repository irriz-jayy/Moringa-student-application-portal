
import { VscCalendar } from "react-icons/vsc";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import MyApplicationsCard from "./MyApplicationsCard";
import LoadingScreen from "./LoadingScreen";
import { toast } from "react-toastify";



function MyApplications({currentUser, navigate}){

    const [applications, setApplications] = useState([]);

    //pulling all applications from database
    useEffect(()=>{

    fetch('/applications')
    .then(res=>res.json())
    .then(data=>{
       // console.log(data)
        setApplications(data)
    })

    },[])

    //filtering applications to specific user

    const filteredApplications = applications.filter((app)=>{
      return app.applicant.id === currentUser.id
    })


    //function to MAP applications by logged in user

    const mapped = filteredApplications.map((application, id)=>{
      return  <MyApplicationsCard application={application} key={id}/>
    })

    if(currentUser.id === undefined){
     
        navigate('/login')

    }else{
      return(
        <div className="page card-page">
          <div className="page-header">
            <h1>My Applications</h1>
          </div>

          <div className="card-grid">
            <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-5">
              {mapped}
            </div>
          </div>

        </div>
      )
    }

}
    export default MyApplications
