import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../Context/Context';
const PrivateRoute = ({children,...rest}) => {
    const [loggedInUser]=useContext(userContext)
    console.log( JSON.parse(localStorage.getItem('authUser'))?.email)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        JSON.parse(localStorage.getItem('authUser'))?.email || loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;