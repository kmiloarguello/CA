import React, { Component } from "react";
import "./js/materialize.min.js";
import WOW from "wowjs";
import Header from "./Components/Header.jsx";
import Why from "./Components/Why.jsx";
import How from "./Components/How.jsx";
import What from "./Components/What.jsx";
import Footer from "./Components/Footer.jsx";
import styles from "./css/index.css";

export default class CA extends Component {
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
      }
    render() {
    return (
      <div>
        <Header />
        <section className="container">
          <div className="row">
            <Why />
            <How />
            <What />
          </div>
        </section>
      </div>
    );
  }
}
