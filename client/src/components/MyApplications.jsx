
import { VscCalendar } from "react-icons/vsc";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import MyApplicationsCard from "./MyApplicationsCard";


function MyApplications({currentUser}){

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

    //console.log(filteredApplications);


    //function to MAP applications by logged in user

    const mapped = filteredApplications.map((application, id)=>{
      return  <MyApplicationsCard application={application} key={id}/>
    })




    return(

        <div className="col">
            My Applications
            <div>
                {mapped}
            </div>

    </div>

    )
}
    export default MyApplications
