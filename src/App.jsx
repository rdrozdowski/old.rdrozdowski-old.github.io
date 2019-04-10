import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Footer from './Components/UI/Footer/index';
import Header from './Components/UI/Header/index';
import Home from './Components/UI/Home/index';
import About from './Components/UI/About/index';
import Portfolio from './Components/UI/Portfolio/index';
import Contact from './Components/UI/Contact/index';
import Policy from './Components/UI/Policy/index';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (                 
      <Router>
        <div>
          <Header />
          <Redirect from="/" to="/Home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/policy" component={Policy} />
          <Footer />
        </div>
      </Router>
    )
  }
}