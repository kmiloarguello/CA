import React, { Component } from "react";
import styles from "../css/index.css";
import juliana from "../img/juliana.jpg";
import reactIcon from "../img/motivation/react.svg";

export default class How extends Component {
  renderIcons(){
    const { info } = this.props.data;
    return info.map((elem,i) => {
      return (
        <div key={i} className={styles.conticons}>
          <img src={reactIcon} />
          <h3>{elem.title}</h3>
          <p>{elem.subtitle}</p>
        </div>
      )
    })
  }
  render() {
    const { title } = this.props.data;
    return (
      <section id={styles.how} className="section3">
        <div className={styles.containerTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.containerImages}>
          {this.renderIcons()}
        </div>
      </section>
    );
  }
}
