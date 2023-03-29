import "./AllCourses.css"

import CourseCard from "../components/CourseCard";

function AllCourses({courses, display,setDisplay, setSingleCourse}){


    return(
        <div className="page card-page">
            <div className="page-header">
                    <h1>All Courses</h1>
            </div>

            <div className="card-grid">
                <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-5">
                    {courses.map((course)=> <CourseCard setSingleCourse={setSingleCourse} display={display} setDisplay={setDisplay} course={course} key={course.id}/>)}
                </div>
            </div>
            
        </div>
    )
}
export default AllCourses;
