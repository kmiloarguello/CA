import React, { Component } from "react";
import styles from "../css/index.css";

export default class Why extends Component {
  render() {
    const { img,section1,section2,section3 } = this.props.data.Why;
    const { name,job } = this.props.data.PersonalInfo;
    return (
      <section id={styles.why}>

        <h1>{section1}</h1>
        <h2>{section2}</h2>

        <div className={styles.containerbtn}>
          <button className="btn"><span>Contact me</span></button>
          <button className="btn focus">Find out more</button>
        </div>
        
        <img src={img} alt={name} className={styles.circle} />

        {/* <ul className="collection">
          <li className={styles.avatar}>
            <img src={img} alt={name} className={styles.circle} />
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                <b>{name}</b>
              </h1>
              <h2>{job}</h2>
            </div>
          </li>
          <li className={styles.description}>
            <p>{section2}</p>
            <p>{section3}</p>
          </li>
        </ul> */}
      </section>
    );
  }
}
