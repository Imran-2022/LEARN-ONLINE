import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <section className="header">
                <div className="  text-box d-flex m-auto flex-column justify-content-center align-items-center">
                    <h1 className="text-primary hh mb-2">WELCOME TO <span className="text-danger">LEARN  | ONLINE</span></h1>
                    <p className="hh text-light fs-6 mt-5 text-center">This website can be most preferred by the students as it was founded by Harvard University and MIT in 2012. EdX is an online learning destination and MOOC provider, offering high-quality courses from the world's best universities and institutions to learners everywhere .</p>
                    <Link to="/about" className="btn-link btn btn-outline-warning text-light">LET US KNOW </Link>
                </div>
            </section>
        </div>
    );
};

export default Header;