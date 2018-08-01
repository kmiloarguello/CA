import React, { Component } from "react";
import WOW from "wowjs";

import Header from "./Components/Header.jsx";
import Why from "./Components/Why.jsx";
import How from "./Components/How.jsx";
//import What from "./Components/What.jsx";
//import Footer from "./Components/Footer.jsx";
import styles from "./css/index.css";
import { data } from './data/data.js'

export default class CA extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div>
        <Header />
        <Why />
      </div>
    );
  }
}
