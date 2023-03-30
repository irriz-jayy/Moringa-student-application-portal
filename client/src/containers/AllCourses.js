import "./AllCourses.css"
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

function AllCourses({  }){
    // States
    const [courses, setCourses] = useState([])

    // Fetch Courses
    useEffect(() => {
        //get request for all courses
        fetch('/courses')
        .then(res=> res.json())
        .then(coursesData=> setCourses(coursesData))
    }, [])

    return(
        <div className="page card-page">
            <div className="page-header">
                    <h1>All Courses</h1>
            </div>

            <div className="card-grid">
                <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-5">
                    {courses.map((course)=> <CourseCard course={course} key={course.id}/>)}
                </div>
            </div>
            
        </div>
    )
}
export default AllCourses;
