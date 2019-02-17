import React, { Component } from "react";
import styles from "../css/index.css";
import juliana from "../img/juliana.jpg";

export default class What extends Component {
  render() {
    return (
      <section id={styles.what} className="section3">
        <img src={juliana} />
        <img src={juliana} />
        <img src={juliana} />
        <img src={juliana} />
        <img src={juliana} />
      </section>
    );
  }
}
