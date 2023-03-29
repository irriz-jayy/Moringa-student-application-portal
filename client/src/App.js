
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import {Routes,Route} from 'react-router-dom';
import LandingPage from './containers/LandingPage'
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import AllCourses from './containers/AllCourses';
import React,{useState, useEffect} from 'react';
import CourseDescriptionCard from './components/CourseDescriptionCard';

function App() {
const [courses, setCourses] = useState([])
const [display, setDisplay] = useState('homescreen')
const [singleCourse, setSingleCourse] = useState({})

    useEffect(()=>{
      //get request for all courses
      fetch('/courses')
      .then(res=> res.json())
      .then(data=> setCourses(data))
    },[])


  return (
    <div className="App">
    <Navbar />

    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path='/courses' element={display==='homescreen'?  <AllCourses setSingleCourse={setSingleCourse} courses={courses} display={display} setDisplay={setDisplay} /> : <CourseDescriptionCard singleCourse={singleCourse} setDisplay={setDisplay} />}></Route>
    </Routes>
    <ToastContainer />
  </div>
  );
}

export default App;
