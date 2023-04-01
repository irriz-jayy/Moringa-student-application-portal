import './LandingPage.css';
import { Link } from "react-router-dom";

function LandingPage({ currentUserName }) {
    return(
        <div className="landing-page container-flex">
            <div className='landing-text container'>
                {currentUserName ? <h1 className='user-greeting'>Hello, {currentUserName}!</h1> : <div></div>}
                <h1>Start your tech journey here</h1>
                <p>View courses and manage your applications with ease.</p>

                <Link className='button btn btn-lg' to="/courses">View Courses</Link>
            </div>
        </div>
    )
}

export default LandingPage;