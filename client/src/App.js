import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
//import { ToastContainer, toast } from 'react-toastify';
//import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Signup/>
        <Login/>
    </div>
  );
}

export default App;
