import { VscCalendar } from "react-icons/vsc";
import { Link } from "react-router-dom";


function MyApplicationsCard({application}){
    const date = new Date(application.course.start_date);
        
        function handleDelete(){
            alert('Backend not yet configured')
        }

    return (
        <div className="col">
            <div className="card application-card h-100">

                {application.status === "Accepted" ? <div className="confetti"> <a href="https://www.vecteezy.com/free-png/party">Party PNGs by Vecteezy</a></div> : <div></div>}

                <div className="card-body">
                    <h1 className="card-title">{application.course.title} Application</h1>

                    <em>Course:</em><p className="">{application.course.title}</p>

                    <em>Application Status:</em><p className="">{application.status}</p>

                    <em>Uploaded Documents: </em><p>{application.documents}</p>

                    <div className="start-date">
                        <VscCalendar className="calendar-icon"/><p>{date.toDateString()}</p>
                    </div>
                </div>

                <div className="card-body button-row">
                    <Link className={`btn card-button ${application.status === "Submitted" ? "" : "disabled"}`} to={`/update-application/${application.id}`}>Edit</Link>

                    <button className="btn card-button card-button-outline" onClick={handleDelete} >Delete</button>
                </div>

            </div>
        </div>
    )
}
export default MyApplicationsCard
