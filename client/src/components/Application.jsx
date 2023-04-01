import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";


function Application({currentUser, navigate}){

    // States
    const [course, setCourse] = useState({})
    const {id} = useParams()


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
            course_id: course.id,
            applicant_id: currentUser.id,
            documents: e.target.documents.value,
            status: "Submitted"
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
        <div className="page container-flex">
            <div className="form">
                <h1 className="form-title">New Application</h1>

                <form onSubmit={handleApplicationSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Course Name</label>
                        <input className="form-control" value={course.title} type="text" disabled/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Applicant's Name</label>
                        <input className="form-control" value={`${currentUser.first_name} ${currentUser.last_name}`} type="text" disabled/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <input className="form-control" value={'Applying'} name="status" type="text" disabled/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">DOB</label>
                        <input className="form-control" value={currentUser.date_of_birth} type="date" disabled/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Documents</label>
                        <br/>
                        <p className="form-notes">Please list your documents separated by a comma</p>
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
