import "./Card.css"
import { VscCalendar } from "react-icons/vsc";

function CourseCard({course, display, setDisplay, setSingleCourse}){
    const {title, banner, description, short_description, modules,fee, start_date} = course;

    function handleClick(){
        if(display ==='homescreen'){
            setDisplay('view');
            setSingleCourse(course)
        }
    }

    return(
        <div className="col">
            <div className="card course-card h-100">
                <div>
                    <img className="card-img-top" src={banner} alt={title}/>
                </div>
                <div className="card-body">
                    <h1 className="card-title">{title}</h1>

                    <p className="card-text">{description}</p>

                    <div className="start-date">
                        <VscCalendar className="calendar-icon"/><p>{start_date}</p>
                    </div>
                </div>

                <div className="card-body button-row">
                    <button className="btn" onClick={handleClick}>View Course</button>
                </div>
                
            </div>
        </div>
        
    )
}
export default CourseCard;
