import "./CourseDetails.css";
import { VscCalendar } from "react-icons/vsc";
import { AiOutlineFieldTime } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

function CourseDetails(){
    const [course, setCourse] = useState({});
    const {id} = useParams()
    const {title, banner, description, course_modules, fee, start_date, duration, requirements} = course;
    const date = new Date(start_date);

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

    if(course.title === undefined){
        return <LoadingScreen />
    }else{
        return(
            <div className="page course-details-page">
                
    
                <div className="header row">
                    <div className="col">
                        <Link className="btn btn-light-outline border" to={"/courses"}>Back</Link>
    
                        <h1 className="title">{title}</h1>
                        <p>Gain hands-on experience in {title}.</p>
    
                        <Link className={`btn button ${course.status === "Intake on going" ? "" : "disabled"}`} to={`/applications/${course.id}`}>Apply Now</Link>
                        
                        <div className="icon-text">
                            <VscCalendar className="icon"/><p>{date.toDateString()}</p>
                        </div>
    
                        <div className="icon-text">
                            <AiOutlineFieldTime className="icon"/><p>{duration} months</p>
                        </div>
    
                        
                    </div>
    
                    <div className="col">
                        <img src={banner} alt={title}/>
                    </div>
                </div>
    
                <div className={`call-to-action ${course.status === "Intake on going" ? "" : "intake-closed"}`}>
                    {course.status === "Intake on going" ? <p>Intake Ongoing. <Link className="apply-link" to={`/applications/${course.id}`}>Apply Now!</Link></p> : <p>Intake currently closed</p>}
                </div>
    
                <div className="row course-details">
                    <div className="col course-description">
                        <h2>Course Description</h2>
                        <p>{description}</p>
    
                        <br/>
                        <p>This course starts on <strong>{date.toDateString()}</strong> and will take a period of <strong>{duration} month(s)</strong>.</p>
                    </div>
    
                    <div className="col course-specifications">
                        <h2>Modules/Positions</h2>
                        <p>{course_modules}</p>
    
                        <h2>Requirements</h2>
                        <p>{requirements === undefined ? <em></em> : requirements.split(",").map(requirement => <li key={requirement}>{requirement}</li>)}</p>
    
                        <h2>Course Fees</h2>
                        <p>Ksh {fee}</p>
                    </div>
                </div>
    
            </div>
        )
    }

}
export default CourseDetails;
