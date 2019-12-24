import React, { Component } from "react";
import styles from "../css/index.pcss";
import defineLanguage from '../lang/lang.js';

const Loading = (props) => {
    if (props.error) {
      return (
        <div className={styles.container_loader}>
          <div className={styles.error}>
            {defineLanguage().Loading.error}
            <br />
            <button onClick={props.retry}>{defineLanguage().Loading.retry}</button>
          </div>
        </div>
      );
    } else if (props.timedOut) {
      return (
        <div className={styles.container_loader}>
          <div className={styles.error}>
            {defineLanguage().Loading.timeout}
            <br />
            <button onClick={props.retry}>{defineLanguage().Loading.retry}</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.container_loader}>
          <div className={styles.loader} />
        </div>
      );
    }
  }

module.exports = Loading;