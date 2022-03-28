import React from 'react';
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
function App() {

  return (
    <div>
      <Context>
      <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/contact">
            <Contact />
          </PrivateRoute>
          <Route path="/services">
            <Courses />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <PrivateRoute path="/user">
            <UserDetails/>
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
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="*">
            <Nofound/>
          </Route>
        </Switch>
        </Context>
    </div>
  );
}

export default App;
