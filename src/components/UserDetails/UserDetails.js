import React, { useContext, useEffect } from 'react';
import { userContext } from '../Context/Context';
import Footer from '../footer/Footer';
import "./UserDetails.css"
const UserDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const [loggedInUser] = useContext(userContext)
      const { displayName, email} = loggedInUser;
      console.log(displayName, email)
    return (
        <div className="profile">
            <div className="profile-in">
                <div className="profile-details">
                    <div className="profile-details-in">
                        <p>🚀</p>
                        <p>NAME : {displayName || "name"}</p>
                        <p>EMAIL : {email || "email"}</p>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default UserDetails;