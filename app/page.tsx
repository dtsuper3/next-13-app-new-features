"use client";
import React, { useEffect, useState } from 'react'
import Courses from './components/Courses'
import LoadingPage from './loading';
import CourseSearch from './components/CourseSearch';

function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  function getSearchResults(results:any){
    setCourses(results);    
  }

  if (loading) {
    return <LoadingPage />
  }

  return (
    <>
      <h1>Welcome to Next.js 13</h1>
      <CourseSearch getSearchResults={getSearchResults} />
      <Courses courses={courses} />
    </>
  )
}

export default HomePage