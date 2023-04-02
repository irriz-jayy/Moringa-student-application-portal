import "./Form.css";
import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";


function UpdateApplication({ navigate }){
    // States
    const [application, setApplication] = useState({});
    const [updateFormData, setUpdateFormData] = useState({
        documents: application.documents
    });
    const {id} = useParams();

    // Fetch the data on the application the user is editing
    useEffect(() => {
        fetch(`/applications/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(application => {
                    setApplication(application);
                    setUpdateFormData({...updateFormData, documents: application.documents})
                })
            }
        })

        window.scrollTo(0, 0)
    }, [id]);

    // Event Handlers
    // Changing the fields
    function handleChange(e){
        const name = e.target.name
        const value = e.target.value

        setUpdateFormData({
            ...updateFormData,
            [name]: value
        })
    }

    // Submitting the Update form
    function handleUpdate(e){
        e.preventDefault()

        // Updated application object
        const updatedApplication={
            course_id: application.course.id,
            applicant_id: application.applicant.id,
            documents: e.target.documents.value,
            status: "Submitted"
        }
        
        // PATCH request to backend
        fetch(`/applications/${application.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedApplication)
        })
        .then(res => res.json())
        .then(data => {
            navigate('/my-applications');
        })
    }

    if(application.course === undefined){
        return(
            <LoadingScreen />
        )
    }else{
        return(
            <div className="page container-flex">
                <div className="form">
                    <h1 className="form-title">Update Application</h1>
    
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label className="form-label">Course Name</label>
                            <input className="form-control"  type="text" value={application.course.title} disabled/>
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label">Applicant's Name</label>
                            <input className="form-control"  type="text" value={`${application.applicant.first_name} ${application.applicant.last_name}`} disabled/>
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <input className="form-control" value={application.status} name="status" type="text" disabled/>
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label">DOB</label>
                            <input className="form-control" type="date" value={application.applicant.date_of_birth} disabled/>
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label">Document</label>
                            <input className="form-control" name="documents" type="text" value={updateFormData.documents} onChange={handleChange}/>
                        </div>
    
                        <div className="form-submit">
                            <button type="submit" className="btn">Submit</button>
                        </div>
    
                    </form>
                </div>
            </div>
            
        )
    }
}

export default UpdateApplication;
