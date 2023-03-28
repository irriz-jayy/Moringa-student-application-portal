

function CourseDescriptionCard({setDisplay, singleCourse}){

    const {title,banner,description,modules,fee,date} = singleCourse;

    function handleBack(){
        setDisplay('homescreen')
    }

    return(
        <div>
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button>Apply Now</button>
                    <p>{date}</p>
                    <p>duration</p>
                </div>

                <div>
                    <img src={banner} alt={title}/>
                </div>
            </div>
                <div>
                    <p>Intake Ongoing. <a href="!#">Apply Now</a></p>
                </div>
                <div>
                    <div>
                        <h2>Course Description</h2>
                        <p>{description}</p>
                    </div>
                    <div>
                        <h2>Modules</h2>
                        <p>{modules}</p>
                        <h2>Requirements</h2>
                        <p>requirements</p>
                        <h2>Course Fees</h2>
                        <p>{fee}</p>
                    </div>
                </div>
                <button onClick={handleBack}>BACK</button>

        </div>
    )
}
export default CourseDescriptionCard;
