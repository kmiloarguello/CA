import React, { Component } from "react";
import styles from "../css/index.css";
import smoothScroll from "./Scroll.js"

export default class Why extends Component {
  scrollToWork(){
    window.location.href = "#work";
    smoothScroll(document.getElementById('what'));
  }
  render() {
    const { img,section1,section2,section3 } = this.props.data.Why;
    const { name,email } = this.props.data.PersonalInfo;
    return (
      <section id={styles.why}>

        <h1>{section1}</h1>
        <h2>{section2}</h2>

        <div className={styles.containerbtn}>
          <button className="btn" onClick={() => window.location.href='mailto:' + email +'?Subject=Hello'} target="_top"><span>Contact me</span></button>
          <button className="btn focus" onClick={() => this.scrollToWork()}><span>Find out more</span></button>
        </div>
        
        <img src={img} alt={name} className={styles.circle} />
      </section>
    );
  }
}
