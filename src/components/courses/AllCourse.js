import React from 'react';

const AllCourse = () => {
    return (
        <div>
            <section className="course w-75 m-auto text-center">
                <h1 className="fs-4 fw-bold">Courses we offer</h1>
                <p className="text-dark fs-6 line-height-lg p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis in provident, accusamus blanditiis magni inventore!</p>
                <div className="mt-5 d-flex flex-wrap justify-content-between courses">
                    <div className="course-details rounded">
                        <img width="100%" height="40%" src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg" alt="" />
                        <div className="p-3 details-in">
                            <h3 className="text-center fw-bold mt-3 mb-3 ">Lorem ipsum dolor</h3>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam eaque laboriosam a illum, soluta sequi aperiam delectus quo molestiae assumenda incidunt eveniet! Incidunt repellat dolorem earum, amet at dolorum.</p>
                            <button className="btn btn-primary w-100 ">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="course-details rounded">
                        <img width="100%" height="40%" src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg" alt="" />
                        <div className="p-3 details-in">
                            <h3 className="text-center fw-bold mt-3 mb-3 ">Lorem ipsum dolor</h3>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam eaque laboriosam a illum, soluta sequi aperiam delectus quo molestiae assumenda incidunt eveniet! Incidunt repellat dolorem earum, amet at dolorum.</p>
                            <button className="btn btn-primary w-100 ">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="course-details rounded">
                        <img width="100%" height="40%" src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg" alt="" />
                        <div className="p-3 details-in">
                            <h3 className="text-center fw-bold mt-3 mb-3 ">Lorem ipsum dolor</h3>
                            <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam eaque laboriosam a illum, soluta sequi aperiam delectus quo molestiae assumenda incidunt eveniet! Incidunt repellat dolorem earum, amet at dolorum.</p>
                            <button className="btn btn-primary w-100 ">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllCourse;