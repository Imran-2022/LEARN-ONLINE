import React from 'react';
import ContactFormHome from '../Contact/ContactFormHome';
import AllCourse from '../courses/AllCourse';
import Facilities from '../Facilities/Facilities';
import Footer from '../footer/Footer';
import Header from '../Header/Header';
import Testimonials from '../testimonials/Testimonials';
import "./Home.css"
const Home = () => {
    return (
        <div>
            <Header />
            <AllCourse />
            <Facilities />
            <Testimonials />
            <ContactFormHome />
            <Footer />
        </div>
    );
};

export default Home;