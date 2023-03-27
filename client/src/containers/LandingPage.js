import './LandingPage.css';

function LandingPage() {
    return(
        <div className="landing-page container-flex">
            <div className='landing-text container'>
                <h1>Start your tech journey here</h1>
                <p>View courses and manage your applications with ease.</p>

                <button className='button btn btn-lg'>View Courses</button>
            </div>
        </div>
    )
}

export default LandingPage;