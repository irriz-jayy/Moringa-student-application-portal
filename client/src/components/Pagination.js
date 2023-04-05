function Pagination({currentPage ,setCurrentPage, totalCourses, coursePerPage}){

    let pages = []

    for(let i = 1; i <= Math.ceil(totalCourses/coursePerPage); i++){

        pages.push(i)
    }

    return(
        
        <div>
            {pages.map((page, index)=>{
                return <button onClick={()=>setCurrentPage(page)} className={
                    page === currentPage ? 'btn btn-primary' : 'btn btn'
                } key ={index}>{page}</button>
            })}
        </div>
    )
}
export default Pagination;
