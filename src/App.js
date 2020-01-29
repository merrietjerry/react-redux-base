import React from 'react';
import {Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/NavigationWrapper';
//import Carousel from './components/carousel/Carousel';


import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/courses/CoursesPage";

import PropTypes from 'prop-types';


function App() {

  // const obj = {
  //   name:'Jerry',
  //   age: 25,
  // }

  // obj.PropTypes = {
  //   name: PropTypes.string.isRequired,
  //   age: PropTypes.string.isRequired
  // }

  return (
    <>
    <header id="slider-area">
      <Navigation />
      <div id="content-area">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/news" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
      </div>
      {/* <Carousel /> */}
    </header>
     <script src="./template/js/jquery-min.js"></script>
    </>
  );
}

export default App;
