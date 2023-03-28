

function CourseCard({course, display, setDisplay, setSingleCourse}){
    const {title,banner,description,modules,fee,date} = course;



    function handleClick(){
        if(display ==='homescreen'){
            setDisplay('view');
            setSingleCourse(course)
        }
    }
    return(
        <div>
            <div>
                <div>
                <img src={banner} alt={title}/>
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>{date}</p>
                    <button onClick={handleClick}>view course</button>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;
