import "./AllCourses.css"
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import LoadingScreen from "../components/LoadingScreen";

function AllCourses(){
    // States
    const [courses, setCourses] = useState([])
    const [search, setSearch] = useState('')


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
    
                            
                        {filteredSearchCourses.map((course)=> <CourseCard course={course} key={course.id}/>)}
                    </div>
                </div>
    
            </div>
        )
    }
}
export default AllCourses;
