
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
//import { ToastContainer, toast } from 'react-toastify';
//import {Routes,Route} from 'react-router-dom';

function App() {
const [courses, setCourses] = useState([])

      useEffect(()=>{
        //get request for all courses
        fetch('http://localhost:8001/courses')
        .then(res=>res.json())
        .then(data=>{
         // console.log(data);
          setCourses(data)
        })
      },[])


  return (
    <div className="App">
        <Signup/>
        <Login/>

      <Navbar/>
        {/* <Signup/>
        <LandingPage/> */}

        <AllCourses courses={courses}/>
        <Routes>
                <Route path='/login' element={<Login/>}>
        </Route>
        </Routes>
        <ToastContainer/>

    </div>
  );
}

export default App;
