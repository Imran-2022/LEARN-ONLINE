import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCourse = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const url = "https://learn-onlinee.herokuapp.com/data"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCourses(data)
            })
    }, [])
    return (
        <div>
            <section className="course w-75 m-auto text-center">
                <h1 className="fs-4 fw-bold">Courses we offer</h1>
                <p className="text-dark fs-6 line-height-lg p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in provident, accusamus blanditiis magni inventore!</p>
                <div className="mt-5 d-flex flex-wrap justify-content-center courses">
                    {
                        courses && courses.map((dt, inx) => {
                            const { img, title, cost, durations, definitions, difficulty, _id } = dt;
                            return (
                                <div key={inx} className="course-details rounded m-2">
                                    <img width="100%" height="200px" src={img || "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"} alt="" />
                                    <div className="p-3 details-in">
                                        <h3 className="text-start d-flex align-items-center fw-bold" style={{ height: "70px" }}>{title}</h3>
                                        <p className='text-start'>{definitions.slice(0, 200)}. . . . . . .</p>
                                        <Link to={`/courses/${_id}`}><button className="btn btn-primary w-100 ">LEARN MORE</button></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default AllCourse;