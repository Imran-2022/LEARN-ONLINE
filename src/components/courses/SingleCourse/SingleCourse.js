import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../footer/Footer';
import "./SingleCourse.css"
import axios from 'axios'
import { userContext } from '../../Context/Context';

const SingleCourses = ({ setCartUpdate, cartUpdate }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const { single } = useParams()
    const [singleCourse, setSingleCourse] = useState({});

    useEffect(() => {

        async function fetchData() {
            const res = await fetch(`https://learn-onlinee.herokuapp.com/data/${single}`);
            const record = await res.json();
            setSingleCourse(record)
        }
        fetchData();
    }, [])

    // if(singleCourse){
    //     console.log(JSON.stringify(singleCourse))
    // }
    const { difficulty, cost, definitions, durations, img, title, _id } = singleCourse;
    // console.log(difficulty, cost, definitions, durations, img, title )
    const { email } = loggedInUser;
    // console.log(email)
    const newData = { difficulty, cost, definitions, durations, img, title, email }
    // console.log("newData",newData)

    const handleCart = (id) => {
        // console.log(id)
        if (singleCourse._id === id) {
            axios.post('https://learn-onlinee.herokuapp.com/userSelectedCourse', newData)
                .then(res => {
                    if (res.data) {
                        alert("added to cart !!!");
                    }
                    setCartUpdate(cartUpdate + 1)
                    document.getElementById("mutedBTN").disabled = true;
                    document.getElementById("mutedBTN").innerHTML = "ALREADY ADDED TO CART 🚀"
                })

        }
    }



    const [cart, setCart] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://learn-onlinee.herokuapp.com/userSelectedCourse");
            const record = await res.json();
            // console.log(record)
            const newUser = record.filter(ab => ab.email === loggedInUser.email);
            // console.log("newUser",newUser)
            setCart(newUser)
        }
        fetchData();


    }, [])

    //  const uniqueD= cart.filter(ab => ab._id ===_id)
    // console.log("uniqueD",uniqueD)

    const newU = cart.filter(ab => ab.title !== title);
    // console.log(title)
    const selectPermissions = cart.length === newU.length
    console.log(selectPermissions);
    return (
        <div>
            <div className="single-course-header d-flex justify-content-center align-items-center">
                <h1 className="text-uppercase">Details of : <span className="text-primary p-1 px-4 rounded bg-light">{title} </span> <small className="fs-6 ms-2"> course</small></h1>
            </div>

            <section className="  d-flex w-75 m-auto pt-5 mb-5">
                <div className="mt-5 d-flex flex-column justify-content-between">
                    <div className="shadow">
                        <img width="100%" height="600px" src={img} alt="" />
                        <p className="text-center p-3 bg-danger text-light fs-5">{title} 😜</p>

                        <div className="p-3">
                            <div className="m-5 my-2 bg-light p-3 rounded shadoww">
                                <h1 className="fs-4">TOTAL COST : $ {cost}</h1>
                                <h1 className="fs-4">DURATIONS : {durations}</h1>
                                <h2 className="fs-4">DIFFICULTY : {difficulty}</h2>
                            </div>
                            <p className="pt-3"> <span className="p-1 fs-6 bg-primary text-light fw-bold">DEFINITIONS :</span> {definitions}</p>

                            {
                                selectPermissions ? <button id="mutedBTN" onClick={() => handleCart(_id)} className="btn btn-primary w-100 p-3" > ADD TO CART 🚀</button> : <button disabled onClick={() => handleCart(_id)} className="btn btn-primary w-100 p-3" >  ALREADY ADDED TO CART 🚀</button>
                            }
                        </div>
                    </div>
                </div>

            </section>

            <Footer />

        </div>
    );
};

export default SingleCourses;