import React from 'react';
import "./Testimonials.css"
const Testimonials = () => {
    return (
        <div>
            <section className="testimonial  w-75 m-auto text-center">
                <h1 className="fs-4 fw-bold">what our student says</h1>
                <p className="text-dark fs-6 line-height-lg p-4">We help our  students to gain the knowledge, practical experience and skills they need to succeed in their careers,<br/> wherever in the world they choose to work and live.</p>
                <div className="mt-5 d-flex justify-content-between testimonials flex-wrap ">
                    <div className="testimonial-details rounded mb-5 p-3 d-flex">
                        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
                        <div>
                            <p>This is one of the best online learning platform i ever see. undoubetedly this will be more helpful for you. just try it. thanks me later.</p>
                            <h3>Consequuntur Doloribus</h3>
                        </div>
                    </div>
                    <div className="testimonial-details rounded mb-5 p-3 d-flex ">
                        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
                        <div>
                            <p>One of the best things of this platform is learn with fun. i recommanded this learning platform for you as well as for children. just wow. </p>
                            <h3>Tenetur Officia</h3>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Testimonials;