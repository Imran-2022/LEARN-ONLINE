import React from 'react';
import "./Testimonials.css"
const Testimonials = () => {
    return (
        <div>
            <section className="testimonial  w-75 m-auto text-center">
                <h1 className="fs-4 fw-bold">what our student says</h1>
                <p className="text-dark fs-6 line-height-lg p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, neque. Molestias, odio eveniet!</p>
                <div className="mt-5 d-flex justify-content-between testimonials ">
                    <div className="testimonial-details rounded mb-5 p-3 d-flex">
                        <img src="Images/contact-header-img.avif" alt="" />
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia quam vitae sunt omnis consequuntur doloribus voluptatibus neque iure quos non eos dicta, porro ipsum. Quia ipsum nesciunt delectus veritatis.</p>
                            <h3>Consequuntur Doloribus</h3>
                        </div>
                    </div>
                    <div className="testimonial-details rounded mb-5 p-3 d-flex ">
                        <img src="Images/contact-header-img.avif" alt="" />
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia quam vitae sunt omnis consequuntur doloribus voluptatibus neque iure quos non eos dicta, porro ipsum. Quia ipsum nesciunt delectus veritatis.</p>
                            <h3>Tenetur Officia</h3>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Testimonials;