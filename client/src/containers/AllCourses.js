import CourseCard from "../components/CourseCard";

function AllCourses({courses}){


    return(
        <div>Allcourses

            <div>
                {courses.map((course)=> <CourseCard course={course} key={course.id}/>)}
            </div>
        </div>
    )
}
export default AllCourses;
