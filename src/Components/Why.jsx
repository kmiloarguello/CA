import React, { Component } from "react";
import styles from "../css/index.pcss";
import smoothScroll from "./Scroll.js";
import PropTypes from 'prop-types';

export default class Why extends Component {
  scrollToWork(){
    window.location.href = "#work";
    smoothScroll(document.getElementById('what'));
  }
  render() {
    const { img,section1,section2,btnMail, btnScrollToWork, txtMemories } = this.props.data.Why;
    const { name,email } = this.props.data.PersonalInfo;
    return (
      <section id={styles.why}>

        <h1>{section1}</h1>
        <h2>{section2}</h2>
  
        <div className={styles.containerbtn}>
          <button className="btn" onClick={() => window.location.href='mailto:' + email +'?Subject=Hello'} target="_top"><span>{btnMail}</span></button>
          <button className="btn focus" onClick={() => this.scrollToWork()}><span>{btnScrollToWork}</span></button>
        </div>
      
        <img src={img} alt={name} className={styles.circle} />
        <p>{txtMemories}</p>
      </section>
    );
  }
}

Why.propTypes = {
  data: PropTypes.object,
  Why: PropTypes.object
}