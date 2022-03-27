import React from 'react';
import { Link } from 'react-router-dom';
import "./Sign.css"
import Footer from "../../footer/Footer"
const SignUp = () => {
    return (
        <>
        <div className=" m-auto w-100">
            <form className="form-box m-auto d-flex flex-column justify-content-center w-25 ">
                <h5>
                    <p><Link to="/">Home</Link> /<Link to="/sign-in">signIn</Link> </p>
                </h5>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control mb-2" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Comfirm Password</label>
                    <input type="password" className="form-control mb-2" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/sign-in">sign in?</Link>
                </p>
            </form>
        <Footer/>

        </div>
        </>
    );
};

export default SignUp;