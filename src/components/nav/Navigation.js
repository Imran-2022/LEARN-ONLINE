import React from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { HiMenuAlt3 } from "react-icons/hi";
import {
    Link
} from "react-router-dom";
import "./Navbar.css"

const Navigation = () => {

    const show_menu = () => {
        document.getElementById("nav-links").style.left = "0";
        console.log("object");
    }
    const hide_menu = () => {
        document.getElementById("nav-links").style.left = "-200px";
    }

    return (
        <div class="navigation_var">
            <nav class="nav-bg">
                <Link className="logo text-link icons" to="/"> <span class="nav-ic"><HiMenuAlt3/></span> LEARN | ONLINE</Link>
                <div class="nav-links" id="nav-links">
                    <h5 className="menuright" onClick={hide_menu}><FaTimes /></h5>
                    <ul onClick={hide_menu}>
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link to="/services">SERVICES</Link></li>
                        <li><Link to="/blogs">BLOGS</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/sign-in">SIGN IN</Link></li>
                        <li ><Link to="/user">USER</Link></li>
                        <li><Link to="/Admin">ADMIN</Link></li>
                    </ul>
                </div>
                <div className="navend">
                    <h5 onClick={show_menu}> <FaBars /></h5>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;