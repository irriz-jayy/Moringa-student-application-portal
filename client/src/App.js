import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import Navbar from "./components/Navbar";
import CourseCard from "./components/CourseCard";
import AllCourses from "./containers/AllCourses";
import React, { useState, useEffect } from "react";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    //get request for all courses
    fetch("http://localhost:8001/courses")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCourses(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
