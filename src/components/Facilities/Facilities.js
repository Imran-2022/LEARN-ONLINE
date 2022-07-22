import React from 'react';
import "./Facilities.css"
const Facilities = () => {
    return (
        <div>

            <section className="facility w-75 m-auto text-center">

                <h1 className="fs-4 fw-bold">Our Facilites</h1>
                <p className="text-dark fs-6 line-height-lg p-4"> The spacious well-ventilated PLATFORM, provide a conducive environment for learning.</p>


                <div className="mt-5 d-flex justify-content-between facilities">
                    <div className="facility-details rounded mb-5 ">
                        <img width="100%" height="200px" src="https://www.cicnews.com/wp-content/uploads/2020/08/20200807tutor-1-1024x683.jpg" alt="" />
                        <h3 className="text-center fw-bold mt-3 mb-3 p-2">WORLD CLASS TUTOR</h3>
                        <p>Simply by providing a captivating, real-world context, one can creatively make learning infinitely more appealing to learners.</p>
                    </div>
                    <div className="facility-details rounded mb-5 ">
                        <img width="100%" height="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA9WX0p0Srhv0N_2QkGkRWJKlGrcDzpFZsrg&usqp=CAU" alt="" />
                        <h3 className="text-center fw-bold mt-3 mb-3 p-2">Awesome Guidelines</h3>
                        <p>Learning should be through exploration, investigation and discovery.</p>
                    </div>
                    <div className="facility-details rounded mb-5 ">
                        <img width="100%" height="200px" src="https://images.indianexpress.com/2019/07/kids-learning-gettyimages.jpg" alt="" />
                        <h3 className="text-center fw-bold mt-3 mb-3 p-2">Learn With Fun</h3>
                        <p> we Motivate children to learn through fun, creative ways , </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Facilities;