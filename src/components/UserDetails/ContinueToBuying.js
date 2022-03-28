import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import "./ContinueBuy.css"
import { userContext } from '../Context/Context';
const ContinueToBuying = ({cart}) => {
    const [loggedInUser] = useContext(userContext)
    const { displayName } = loggedInUser;

    return (
        <div>
            <div className="container ">
                <p className=" border-bottom border-3 border-primary py-3"> <Link className="text-links fs-5" to="/courses"><FaArrowLeft /> Continue Book shopping</Link> </p>
                <div>
                    <div>
                        <h6 className="fst-italic">Hi, <small className=" fst-italic text-danger rounded">{displayName}</small></h6>
                        <p className="pb-1">You have <span className="text-primary">{cart.length}</span> items in cart </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContinueToBuying;