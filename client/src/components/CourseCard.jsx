

function CourseCard({course}){
    const {title,banner,description,modules,fee,date} = course;
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
                    <button>view course</button>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;
