import React, { Component } from "react";
import styles from "../css/index.pcss";
import PropTypes from 'prop-types';

export default class How extends Component {
  renderIcons(){
    const { info } = this.props.data;
    return info.map((elem,i) => {
      return (
        <div key={i} className={styles.conticons}>
          <img src={elem.icon} />
          <h3>{elem.title}</h3>
          <p>{elem.subtitle}</p>
        </div>
      )
    })
  }
  render() {
    const { title } = this.props.data;
    return (
      <section id={styles.how}>
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

How.propTypes = {
  data : PropTypes.object,
  info: PropTypes.array,
  title: PropTypes.string
}