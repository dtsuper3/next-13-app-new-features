"use client";

import React, { useState } from "react";

interface CourseSearch {
    getSearchResults: any
}
function CourseSearch({ getSearchResults }: CourseSearch) {
    const [query, setQuery] = useState('');
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const res = await fetch(`/api/courses/search?query=${query}`);
        const courses = await res.json();
        getSearchResults(courses);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="search-form">
            <input
                type="text"
                className='search-input'
                placeholder='Search Courses...'
                value={query}
                onChange={e => setQuery(e.target.value)} />
            <button
                className="search-button"
                type="submit">Search</button>
        </form>
    )
}

export default CourseSearch;