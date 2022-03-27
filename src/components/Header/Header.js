import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <section className="header">
                <div className="text-box d-flex m-auto flex-column justify-content-center align-items-center">
                    <h1 className="text-primary ">WELCOME TO <span className="text-danger">LEARN  | ONLINE</span></h1>
                    <p className="text-light fs-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis nemo.sit amet consectetur sed quia iu  <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis nemo, possimus sed quia iusto voluptate!quam quisquam perfe <br /> Nostrum accusantium ipsam unde, rendis corporis, commodi nulla molestiae accusantium ipsam unde accusantium ipsam unde optio minus aliquam? <br />Nostrum accusantium ipsam unde, rendis corporis, commodi nulla molestiae accusantium ipsam unde accusantium ipsam unde optio </p>
                    <Link to="/about" className="btn-link btn btn-outline-warning text-light">LET US KNOW </Link>
                </div>
            </section>
        </div>
    );
};

export default Header;