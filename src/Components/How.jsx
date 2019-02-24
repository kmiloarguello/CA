import React, { Component } from "react";
import styles from "../css/index.css";
import juliana from "../img/juliana.jpg";

export default class How extends Component {
  render() {
    const { title } = this.props.data;
    return (
      <section id={styles.how} className="section3">
        <div className={styles.containerTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.containerImages}>

          <img src={juliana} />
          <img src={juliana} />
          <img src={juliana} />
          <img src={juliana} />
          <img src={juliana} />

        </div>
      </section>
    );
  }
}
