import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import LandingPage from './containers/LandingPage'

function App() {
  return (
    <div className="App">
        <LandingPage/>
        <Login/>
    </div>
  );
}

export default App;
