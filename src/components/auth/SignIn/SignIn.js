import React from 'react';
import { Link } from 'react-router-dom';
import "./Sign.css"
import Footer from "../../footer/Footer"
const SignIn = () => {
    return (
        <>
        <div className=" m-auto w-100">

            <form className="form-box m-auto d-flex flex-column justify-content-center w-25 ">
                <h5>
                    <p><Link to="/">Home</Link> /<Link to="/sign-in">signIn</Link> </p>
                </h5>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group mb-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign-In</button>
                <p className="forgot-password text-right ">
                    Forgot <a href="#!" onClick={() => alert("forget password not working for now.try later. ")}>password?</a>
                </p>
                <p>New there ? sign up first  <Link to="/sign-up">Sign Up</Link> </p>
            </form>
        <Footer/>

        </div>
        </>
    );
};

export default SignIn;