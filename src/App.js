import React, { useState } from 'react';
import Home from './components/home/Home';
import {
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Navigation from './components/nav/Navigation';
import Courses from './components/courses/Courses';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import SignIn from './components/auth/SignIn/SignIn';
import SignUp from './components/auth/SignIn/SignUp';
import Context from './components/Context/Context';
import UserDetails from './components/UserDetails/UserDetails';
import PrivateRoute from './components/auth/Firebase/PrivateRoute';
import Admin from './AdminBoss/Admin/Admin';
import Update from './AdminBoss/Pages/UpateData/Update';
import Nofound from './components/noMatch/Nofound';
import SingleCourses from './components/courses/SingleCourse/SingleCourse';
function App() {

  const [cartUpdate,setCartUpdate]= useState(0)
  return (
    <div>
      <Context>
      <Navigation cartUpdate={cartUpdate} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <PrivateRoute path="/user">
            <UserDetails  setCartUpdate={setCartUpdate}/>
          </PrivateRoute>
          <Route path="/sign-in">
          <SignIn/>
          </Route>
          <Route path="/sign-up">
          <SignUp/>
          </Route>
          <Route path="/blogs">
            <Blogs/>
          </Route>
          <Route path="/admin/update/:abc">
            <Update/>
          </Route>
          <PrivateRoute path="/courses/:single">
            <SingleCourses cartUpdate={cartUpdate} setCartUpdate={setCartUpdate}/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <Route path="*">
            <Nofound/>
          </Route>
        </Switch>
        </Context>
    </div>
  );
}

export default App;
