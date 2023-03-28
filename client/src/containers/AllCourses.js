import CourseCard from "../components/CourseCard";

function AllCourses({courses, display,setDisplay, setSingleCourse}){


    return(
        <div>Allcourses

            <div>
                {courses.map((course)=> <CourseCard setSingleCourse={setSingleCourse} display={display} setDisplay={setDisplay} course={course} key={course.id}/>)}
            </div>
            </div>
    )
}
export default AllCourses;
