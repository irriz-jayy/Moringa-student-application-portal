import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import MyApplications from "./MyApplications";



function Application({currentUser, navigate}){

    const [course, setCourse] = useState({})
    const {id} = useParams()
    const {title,banner,description,modules,fee, duration} = course;



      // Fetch single course
      useEffect(() => {
        fetch(`/courses/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(course => setCourse(course))
            }
        })

        window.scrollTo(0, 0)
    }, [])

    //   console.log(currentUser);

   // const courseID = course.id

   // console.log(courseID));

    function handleApplicationSubmit(e){
        e.preventDefault()


            //new application object
        const newApplication={
            course_id: e.target.course_id.value,
            applicant_id: e.target.applicant_id.value,
            documents: e.target.documents.value,
            status: e.target.status.value
        }
        console.log(newApplication);


        //post request for new applications

        fetch('/applications',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(newApplication),
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            navigate('/my-applications')
        })
    }

    return (
        <div>APPLICATION PORTAL
            <div>
                <form onSubmit={handleApplicationSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Course Name</label>
                        <input className="form-control" value={title} type="text"/>
                    </div>



                    {/* These two input elements have been placed as hidden
                    they wont display to the DOM But their data will be sent to the server */}


                     <div className="mb-3">
                        <label className="form-label" hidden>Course ID</label>
                        <input className="form-control" hidden value={course.id} name="course_id" type="text"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" hidden>Applicant ID</label>
                        <input className="form-control" hidden value={currentUser.id} name="applicant_id" type="text"/>
                    </div>




                    <div className="mb-3">
                        <label className="form-label">Applicant's Name</label>
                        <input className="form-control" value={currentUser.username} type="text"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <input className="form-control" value={'OPEN'} name="status" type="text"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">DOB</label>
                        <input className="form-control" value={currentUser.date_of_birth} type="date"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Document</label>
                        <input className="form-control" name="documents" type="text"/>
                    </div>

                    <div className="form-submit">
                         <button type="submit" className="btn">Submit</button>
                    </div>

                </form>
            </div>
        </div>




    )
}
export default Application;
