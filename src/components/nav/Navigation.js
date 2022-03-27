import React, { useContext } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { HiMenuAlt3 } from "react-icons/hi";

import {
    Link
} from "react-router-dom";
import "./Navbar.css"
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
import { userContext } from '../Context/Context';
const Navigation = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const show_menu = () => {
        document.getElementById("nav-links").style.left = "0";
        console.log("object");
    }
    const hide_menu = () => {
        document.getElementById("nav-links").style.left = "-200px";
    }

    return (
        <>
            <div className="d-flex bg-warning justify-content-evenly">
                <p className="p-1 m-0 text-dark fw-bold">it helps the individual to acquire the necessary skills through learning and knowledge so that he can achieve his set goals.!!</p>
                <div className="nav-3 ">
                <a href="https://www.facebook.com/profile.php?id=100071106706650" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                <a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/Imran-2022" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                <a href="https://www.youtube.com/channel/UCF7WyIjmmYdD1l3fp4egycQ/featured" target="_blank" rel="noreferrer"><FaYoutubeSquare /></a>
                </div>
            </div>
            <div class="navigation_var">
                <nav class="nav-bg">
                    <Link className="logo text-link icons" to="/"> <span class="nav-ic"><HiMenuAlt3 /></span> LEARN | ONLINE</Link>
                    <div class="nav-links" id="nav-links">
                        <h5 className="menuright" onClick={hide_menu}><FaTimes /></h5>
                        <ul onClick={hide_menu}>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/services">COURSES</Link></li>
                            <li><Link to="/blogs">BLOGS</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                            <li><Link to="/sign-in">SIGN IN</Link></li>
                            <li ><Link to="/user">{loggedInUser.name.toUpperCase()}</Link></li>
                            <li><Link to="/Admin">ADMIN</Link></li>
                        </ul>
                    </div>
                    <div className="navend">
                        <h5 onClick={show_menu}> <FaBars /></h5>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navigation;