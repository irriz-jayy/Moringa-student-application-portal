import { VscCalendar } from "react-icons/vsc";
import { Link } from "react-router-dom";


function MyApplicationsCard({application}){

        function handleDelete(){
            alert('Backend not yet configured')
        }

    return (
        <div className="card course-card h-100">
        <div>
            <img className="card-img-top" src={application.course.banner} alt="title"/>
        </div>
        <div className="card-body">
            <h1 className="card-title">{application.course.title}</h1>

            <p className="card-text">{application.course.status}</p>

            <div className="start-date">
                <VscCalendar className="calendar-icon"/><p>start_date</p>
            </div>
            <label>Documents:
            <p>{application.documents}</p>
            </label>
        </div>
        
        <button onClick={handleDelete}>DELETE</button>

        <div className="card-body button-row">
            <Link className="btn card-button" to={`/update-application`}>Edit</Link>
        </div>


    </div>
    )
}
export default MyApplicationsCard
