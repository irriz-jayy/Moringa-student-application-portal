import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CourseDetails(){
    const [course, setCourse] = useState({});
    const {id} = useParams()
    const {title,banner,description,modules,fee,date} = course;

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

    return(
        <div className="page">
            <Link className="btn btn-danger" to={"/courses"}>Back</Link>

            <div>
                <div>
                    <h1>{title}</h1>
                    <p>Gain hands-on experience in {title}.</p>

                    <div className="card-body button-row">
                    <Link className="btn card-button" to={`/applications/${course.id}`}>Apply Now</Link>
                    </div>

                    <p>{date}</p>
                    <p>duration</p>

                    </div>

                    <div>
                    <img src={banner} alt={title}/>
                </div>
            </div>

                    <div>
                        <p>Intake Ongoing.  <Link className="btn card-button" to={`/applications/${course.id}`}>Apply Now</Link></p>
                    </div>

            <div>
                <div>
                    <h2>Course Description</h2>
                    <p>{description}</p>
                </div>

                <div>
                    <h2>Modules</h2>
                    <p>{modules}</p>

                    <h2>Requirements</h2>
                    <p>requirements</p>

                    <h2>Course Fees</h2>
                    <p>{fee}</p>
                </div>
            </div>

        </div>
    )
}
export default CourseDetails;
