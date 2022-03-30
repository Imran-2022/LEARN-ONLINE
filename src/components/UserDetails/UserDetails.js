import React, { useContext, useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import "./UserDetails.css"
import { ImCross } from "react-icons/im";
import ContinueToBuying from "./ContinueToBuying"
import { userContext } from '../Context/Context';
const UserDetails = ({ setCartUpdate }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [loggedInUser, setLoggedInUser] = useContext(userContext)


    const [cart, setCart] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/userSelectedCourse");
            const record = await res.json();
            console.log(record)
            const newUser = record.filter(ab => ab.email ===loggedInUser.email);
            // console.log("newUser",newUser)
            setCart(newUser)
        }
        fetchData();


    }, [])




    const handleDelete = (id) => {
        // const proced= window.confirm("are you sure, you want to delete ?");
        console.log(id);

        if (true) {
            fetch(`http://localhost:8080/userSelectedCourse/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())// or res.text()) 
                .then(res => {
                    if (res.deletedCount === 1) {
                        alert(`course of ' ${id} ' deleted successfully`)
                        const newUser = cart.filter(ab => ab._id !== id);
                        setCart(newUser)
                    }
                })   
        }
    }


    setCartUpdate(cart.length)




    const handleCheckOut = () => {


        fetch(`http://localhost:8080/userSelectedCourse/user/${loggedInUser.email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())// or res.text()) 
            .then(res => {
                if (res) {
                    // console.log(res)
                    alert(`Checked done !!`)
                    setCart([])
                }
            })
    }


    // total - 

    //  important link for array reduce - [https://www.javascripttutorial.net/javascript-array-reduce/]

    let total = cart.reduce(function (previousValue, currentValue) {
        return previousValue + Number(currentValue.cost);
    }, 0);


    return (
        <>
            <ContinueToBuying cart={cart} />
            <div className="profile">
                <div className="profile-in">
                    <div className="container">
                        <div>
                            <div>

                                <table>
                                    <thead>
                                        <tr >
                                            <th className="text-center p-2">#no</th>
                                            <th className="text-center p-2">Image</th>
                                            <th className="text-center p-2">name</th>
                                            <th className="text-center p-2">update</th>
                                            <th className="text-center p-2">delete</th>
                                        </tr>
                                    </thead>

                                    {
                                        cart.map((data, i) => {
                                            const { _id, title, img } = data
                                            // console.log(img)
                                            return (
                                                <tbody key={_id}>
                                                    <tr>
                                                        <td className="text-center">{i + 1}</td>
                                                        <td className="text-center">
                                                            <img width="60px" height="40px" src={img} alt="no images" />
                                                        </td>
                                                        <td className="text-start ps-5">{title}</td>
                                                        <td className="text-center"> $ {data.cost}</td>

                                                        <td className="btnmanage text-center" onClick={() => handleDelete(_id)}><ImCross /></td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        </div>
                        <div className="text-end py-5 mb-5">
                            <h5 className="me-1">Cart Total : - $<span> {total}</span></h5>
                            <button onClick={() => handleCheckOut(cart)} className="btn btn-primary w-25 ">CheckOut</button>
                        </div>

                    </div>

                    <Footer />
                </div>
            </div>
        </>

    );
};

export default UserDetails;