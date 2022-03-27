import React from 'react';
import "./Facilities.css"
const Facilities = () => {
    return (
        <div>

            <section class="facility w-75 m-auto text-center">

                <h1 className="fs-4 fw-bold">Our Facilites</h1>
                <p className="text-dark fs-6 line-height-lg p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, neque. Molestias, odio eveniet!</p>

                
                <div class="mt-5 d-flex justify-content-between facilities">
                    <div class="facility-details rounded mb-5 ">
                        <img width="100%" src="Images/contact-header-img.avif" alt="" />
                        <h3 className="text-center fw-bold mt-3 mb-3 p-2">Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque facilis dolorem voluptas, enim eum neque voluptatum quam  </p>
                    </div>
                    <div class="facility-details rounded mb-5 ">
                        <img width="100%" src="Images/contact-header-img.avif" alt="" />
                        <h3 className="text-center fw-bold mt-3 mb-3 p-2">Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque facilis dolorem voluptas, enim eum neque voluptatum quam  </p>
                    </div>
                    <div class="facility-details rounded mb-5 ">
                        <img width="100%" src="Images/contact-header-img.avif" alt="" />
                        <h3 className="text-center fw-bold mt-3 mb-3 p-2">Lorem ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam atque facilis dolorem voluptas, enim eum neque voluptatum quam  </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facilities;