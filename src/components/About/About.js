import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css"
import Footer from '../footer/Footer.js'
const About = () => {
    return (
        <div>
            <div class="about-header d-flex justify-content-center align-items-center">
                <h1>About Us</h1>
            </div>

            <section class="d-flex w-75 m-auto pt-5 mt-5">
                <div class="mt-5 d-flex justify-content-between">
                    <div class="about-col">
                        <h1>we are the world largest University</h1>
                        <p className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos natus temporibus, quia vero voluptatem necessitatibus ex quis eius voluptas veritatis reiciendis eligendi quidem culpa ipsa nisi facere fugit porro perspiciatis praesentium non error magni nihil molestias pariatur. Maxime placeat quas cum sunt consequatur eveniet nesciunt dolorem deserunt amet perspiciatis eligendi consequuntur explicabo rem culpa et temporibus quis similique excepturi dolorum, sint, numquam at, odio delectus? Fuga assumenda magnam quae nulla dolores cumque in, digninisi facere fugit porro perspiciatis praesentium non error magni nihil molestias pariatur. Maxime placeat quas cum sunt consequatur eveniet nesciunt dolorem deserunt amet perspiciatis eligendi consequuntur explicabo rem culpa et temporibus quis similique excepturi dolorum, sint, numquam at, odio delectus? Fuga assumenda magnam quae nulla dolores cumque in, dignissimos esse officiis labo</p>
                        <Link class="btn btn-outline-primary w-100" to="/">Explore now</Link>
                    </div>
                    <div class="about-col pt-4 pb-5">
                        <img width="100%" src="Images/contact-header-img.avif" alt="" />
                        <p className="text-center">our Developers </p>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    );
};

export default About;