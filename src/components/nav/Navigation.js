import React, { useContext, useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { HiMenuAlt3 } from "react-icons/hi";

import {
    Link, NavLink
} from "react-router-dom";
import "./Navbar.css"
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
import { userContext } from '../Context/Context';
const Navigation = ({ cartUpdate }) => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [admin, setAdmin] = useState();
    const show_menu = () => {
        document.getElementById("nav-links").style.left = "0";
    }
    const hide_menu = () => {
        document.getElementById("nav-links").style.left = "-200px";
    }
    useEffect(() => {
        const url = "https://learn-onlinee.herokuapp.com/adminData"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAdmin(data)
            })
    }, [])

    // console.log(loggedInUser.email)

    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        if (admin) {
            for (const A of admin) {
                // console.log(A.email)
                if (A.email === loggedInUser.email) {
                    setIsAdmin(true)
                }
            }
        }
    }, [loggedInUser.email])
    // console.log(isAdmin)

    return (
        <>
            <div className="d-flex bg-warning justify-content-evenly nav-all-icons">
                <p className="p-1 m-0 text-dark fw-bold">it helps the individual to acquire the necessary skills through learning and knowledge so that he can achieve his set goals.!!</p>
                <div className="nav-3 ">
                    <a href="https://www.facebook.com/profile.php?id=100071106706650" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                    <a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/Imran-2022" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                    <a href="https://www.youtube.com/channel/UCF7WyIjmmYdD1l3fp4egycQ/featured" target="_blank" rel="noreferrer"><FaYoutubeSquare /></a>
                </div>
            </div>
            <div className="navigation_var">
                <nav className="nav-bg">
                    <Link className="logo text-link icons" to="/"> <span className="nav-ic"><HiMenuAlt3 /></span> LEARN | ONLINE</Link>
                    <div className="nav-links" id="nav-links">
                        <h5 className="menuright" onClick={hide_menu}><FaTimes /></h5>
                        <ul onClick={hide_menu}>
                            <li><NavLink to="/home">HOME</NavLink></li>
                            <li><NavLink to="/courses">COURSES</NavLink></li>
                            <li><NavLink to="/blogs">BLOGS</NavLink></li>
                            <li><NavLink to="/about">ABOUT</NavLink></li>
                            <li><NavLink to="/contact">CONTACT</NavLink></li>
                            {
                                (JSON.parse(localStorage.getItem('authUser'))?.email || loggedInUser.email) && <li ><Link className="bg-danger p-2 rounded" to="/user">
                                    {loggedInUser.displayName||JSON.parse(localStorage.getItem('authUser'))?.displayName || "USER-PROFILE"}
                                </Link>
                                {/* <span className="cartNumber p-0 rounded bg-dark d-flex justify-content-center align-items-center">{cartUpdate}</span> */}
                                </li>
                            }
                            {
                                JSON.parse(localStorage.getItem('authUser'))?.email || loggedInUser.email  ? <li><Link to="/sign-in" onClick={() =>{
                                    setLoggedInUser({})
                                    localStorage.removeItem('authUser')
                                } }>SIGN-OUT</Link></li> : <li><Link to="/sign-in">SIGN IN</Link></li>
                            }
                            {
                                isAdmin && <li><Link to="/admin">ADMIN</Link></li>
                            }
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