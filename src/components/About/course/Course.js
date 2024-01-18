import React from 'react'
import './Course.css'
function Course({course,year,course_title,branch,gpa}) {
  return (
    <div className={`course ${course}`}>
        <h3 className='year'>{year}</h3>
        <div className='course_details'>
            <p>{course_title}</p>
            {branch && <p>{branch}</p>}
            <p>{`CGPA : ${gpa}`}</p>
        </div>
    </div>
  )
}

export default Course