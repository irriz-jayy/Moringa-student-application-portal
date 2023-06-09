import "./Card.css"
import { VscCalendar } from "react-icons/vsc";
import { Link } from "react-router-dom";

function CourseCard({ course }){
    const {title, banner, description, short_description, modules,fee, start_date} = course;
    const date = new Date(start_date);

    return(
        <div className="col">
            <div className="card course-card h-100">
                <div>
                    <img className="card-img-top" src={banner} alt={title}/>
                </div>
                <div className="card-body">
                    <h1 className="card-title">{title}</h1>

                    <p className="card-text">{short_description}</p>

                    <div className="start-date">
                        <VscCalendar className="calendar-icon"/><p>{date.toDateString()}</p>
                    </div>
                </div>

                <div className="card-body button-row">
                    <Link className="btn card-button" to={`/courses/${course.id}`}>View Course</Link>
                </div>

            </div>
        </div>

    )
}
export default CourseCard;
