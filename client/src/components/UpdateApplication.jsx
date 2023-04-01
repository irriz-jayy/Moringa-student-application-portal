import "./Form.css";
import React,{useState, useEffect} from "react"
import { useParams } from "react-router-dom"


function UpdateApplication(){


    function handleUpdate(e){
            e.preventDefault()
            alert('backend not configured')
    }


    return(
        <div className="page container-flex">
            <div className="form">
                <h1 className="form-title">Update Application</h1>

                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label className="form-label">Course Name</label>
                        <input className="form-control"  type="text" value={`course-name`} disabled/>
                    </div>



                    {/* These two input elements have been placed as hidden
                    they wont display to the DOM But their data will be sent to the server */}


                    <div className="mb-3">
                        <label className="form-label" hidden>Course ID</label>
                        <input className="form-control" hidden  name="course_id" type="text"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" hidden>Applicant ID</label>
                        <input className="form-control" hidden  name="applicant_id" type="text"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Applicant's Name</label>
                        <input className="form-control"  type="text" value={`applicant.first_name applicant.last_name`} disabled/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <input className="form-control" value={`application.status`} name="status" type="text" disabled/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">DOB</label>
                        <input className="form-control" type="date" value={`2000-01-01`} disabled/>
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

export default UpdateApplication;
