import React, { Component } from "react";
import styles from "../css/index.css";

export default class Why extends Component {
  render() {
    const { img,section1,section2,section3 } = this.props.data.Why;
    const { name,email } = this.props.data.PersonalInfo;
    return (
      <section id={styles.why}>

        <h1>{section1}</h1>
        <h2>{section2}</h2>

        <div className={styles.containerbtn}>
          <button className="btn" onClick={() => window.location.href='mailto:' + email +'?Subject=Hello'} target="_top"><span>Contact me</span></button>
          <button className="btn focus"><span>Find out more</span></button>
        </div>
        
        <img src={img} alt={name} className={styles.circle} />
      </section>
    );
  }
}
