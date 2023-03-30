
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './containers/LandingPage'
import Navbar from './components/Navbar';
import AllCourses from './containers/AllCourses';
import React,{ useState, useEffect } from 'react';
import CourseDescriptionCard from './components/CourseDescriptionCard';

function App() {
  // Navigation
  const mainNavigate = useNavigate();

  // States
  const [currentUser, setCurrentUser] = useState({})
  const [courses, setCourses] = useState([])
  const [display, setDisplay] = useState('homescreen')
  const [singleCourse, setSingleCourse] = useState({})

  // Fetch Current User
  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => setCurrentUser(data))
  }, [])

  // Initial Fetch Courses
  useEffect(()=>{
    //get request for all courses
    fetch('/courses')
    .then(res=> res.json())
    .then(data=> setCourses(data))
  },[])

  console.log("Current user: ", currentUser)

  return (
    <div className="App">
    <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} navigate={mainNavigate} />

    <Routes>
      <Route path="/" element={<LandingPage currentUserName={currentUser.first_name}/>}></Route>

      <Route path="/signup" element={<Signup navigate={mainNavigate}/>}></Route>

      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} navigate={mainNavigate} />}></Route>

      <Route path='/courses' element={display==='homescreen'?  <AllCourses setSingleCourse={setSingleCourse} courses={courses} display={display} setDisplay={setDisplay} /> : <CourseDescriptionCard singleCourse={singleCourse} setDisplay={setDisplay} />}></Route>

    </Routes>
    <ToastContainer />
  </div>
  );
}

export default App;
