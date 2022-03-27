import React from 'react';
import "./Blogs.css"
import { FaAngellist } from "react-icons/fa";
import Footer from "../footer/Footer"
const Blogs = () => {

    const year = new Date().getFullYear();
    return (
        <div>
            <div className="blogs-header d-flex justify-content-center align-items-center">
                <h1>BLOGS' FOR TECH LEARNER <FaAngellist className="text-primary" /> {year}</h1>
            </div>

            <section className="m-auto py-5 w-75">
                <div className="mt-5 d-flex justify-content-between">
                    <div className="blog-left">
                        <img className="h-50 w-100" src="Images/contact-header-img.avif" alt="" />
                        <p className="p-0 text-primary">this is blog page !!!</p>
                        <h3 className="fs-4 fw-bold text-warning my-5">Leave a comment-</h3>

                        <div className="">
                            <form className="p-2" action="">
                                <textarea className="w-100 outline-none p-2" placeholder="your comment" rows="3"></textarea>
                                <button className="btn btn-outline-primary w-100 m-auto" type="submit">POST COMMENT</button>
                            </form>
                        </div>
                    </div>
                    <div className="blog-right">
                        <h3 className="p-2 bg-primary text-light fs-6 fw-bold">Post Catagories</h3>
                        <div className="d-flex justify-content-between align-items-center text-dark  p-3 ">
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-dark  p-3 ">
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-dark  p-3 ">
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-dark  p-3 ">
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-dark  p-3 ">
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-dark  p-3 ">
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default Blogs;