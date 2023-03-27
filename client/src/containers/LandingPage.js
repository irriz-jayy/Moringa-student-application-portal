import './LandingPage.css';

function LandingPage() {
    return(
        <div className="landing-page">
            <div className='landing-text container-flex'>
                <h1>Start your tech journey here</h1>
                <p>View courses and manage your applications with ease.</p>

                <button className='button btn btn-lg'>View Courses</button>
            </div>
        </div>
    )
}

export default LandingPage;