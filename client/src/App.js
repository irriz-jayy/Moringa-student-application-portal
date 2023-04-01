
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './containers/LandingPage'
import Navbar from './components/Navbar';
import AllCourses from './containers/AllCourses';
import React,{ useState, useEffect } from 'react';
import CourseDetails from './components/CourseDetails';
import Application from './components/Application';
import MyApplications from './components/MyApplications';
import UpdateApplication from './components/UpdateApplication';


function App() {


  // Navigation
  const mainNavigate = useNavigate();

  // States
  const [currentUser, setCurrentUser] = useState({})

  // Fetch Current User
  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok){
        res.json().then(data => setCurrentUser(data))
      }
    })
  }, [])

  // console.log("Current user: ", currentUser)




  return (
    <div className="App">
    <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} navigate={mainNavigate} />


    <Routes>
      <Route path="/" element={<LandingPage currentUserName={currentUser.first_name}/>}></Route>

      <Route path="/signup" element={<Signup navigate={mainNavigate}/>}></Route>

      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} navigate={mainNavigate} />}></Route>

      <Route path='/courses' element={<AllCourses/>}></Route>

      <Route path='/courses/:id'element={<CourseDetails />}></Route>

      <Route path='/applications/:id' element={<Application navigate={mainNavigate} currentUser={currentUser}/>}></Route>

      <Route path='/my-applications' element={<MyApplications currentUser={currentUser}/>}></Route>

     < Route path='update-application/:id' element ={<UpdateApplication navigate={mainNavigate} />}></Route>

    </Routes>
    <ToastContainer />
  </div>
  );
}

export default App;
