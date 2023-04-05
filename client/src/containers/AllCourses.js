import "./AllCourses.css"
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import LoadingScreen from "../components/LoadingScreen";
import Pagination from "../components/Pagination";

function AllCourses(){
    // States
    const [courses, setCourses] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const coursePerPage = 4

    const lastCourseIndex = currentPage * coursePerPage
    const firstCourseIndex = lastCourseIndex - coursePerPage





    // Fetch Courses
    useEffect(() => {
        //get request for all courses
        fetch('/courses')
        .then(res=> res.json())
        .then(coursesData=>{
            // console.log(coursesData);
            setCourses(coursesData)
        })

        window.scrollTo(0, 0)
    }, [])


    //filtered courses to enable search
    //the same filtered courses is the one used to display all courses

    const filteredSearchCourses = courses.filter(course=>{
        return course.title.toLowerCase().includes(search.toLowerCase())
    })

    const coursesPerPage = filteredSearchCourses.slice(firstCourseIndex, lastCourseIndex)

    if(courses.length === 0){
        return <LoadingScreen/>
    }else{
        return(
            <div className="page card-page">
                <div className="page-header">
                        <h1>All Courses</h1>


                    <div className="searchbar">
                        <label className="form-label">Search Courses:</label>
                        <input className="form-control" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search by Course Name" />
                    </div>
                </div>

                <div className="card-grid">
                    <div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-5">


                        {coursesPerPage.map((course)=> <CourseCard course={course} key={course.id}/>)}

                    </div>
                </div>
                <Pagination totalCourses ={courses.length} currentPage={currentPage} setCurrentPage={setCurrentPage} coursePerPage={coursePerPage}/>

            </div>
        )
    }
}
export default AllCourses;
