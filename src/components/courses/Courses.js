import React from 'react';
import Footer from '../footer/Footer';
import AllCourse from './AllCourse';
import "./Courses.css"
import Facilities from '../Facilities/Facilities';
const Courses = () => {
    return (
        <>
            <div class="course-header d-flex justify-content-center align-items-center">
                <h1>Our courses</h1>
            </div>
            
            <AllCourse />
            <Facilities />
            <Footer />
        </>
    );
};

export default Courses;