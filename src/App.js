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
function App() {
  return (
    <div>
      <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Courses />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/sign-in">
          <SignIn/>
          </Route>
          <Route path="/sign-up">
          <SignUp/>
          </Route>
          <Route path="/blogs">
            <Blogs/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
