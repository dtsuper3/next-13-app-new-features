import Link from 'next/link';
import React from 'react'

interface Courses {
    courses: any;
}
function Courses({ courses }: Courses) {

    return (
        <div className='courses'>
            {
                courses.map((course: any) => (
                    <div key={course.id} className='card'>
                        <h2>{course.title}</h2>
                        <small>Level: {course.level}</small>
                        <p>{course.description}</p>
                        <Link href={course.link} target='_blank' className='btn'>Go to course</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Courses