import React, { Component } from "react";
import styles from "../css/index.css";
import phone from "../img/phone.png";
import landing from "../img/landing.jpg";
import tshirt from "../img/tshirt.jpg";
import house from "../img/house.jpg";

export default class Why extends Component {
  render() {
    return (
      <section id={styles.why}>
        <div class="item level-1">
          <img src={landing} alt="" />
        </div>
        <div class="item level-2">
          <img src={tshirt} alt="" />
        </div>
        <div class="item level-3">
          <img src={house} alt="" />
        </div>
        <div class="item level-1">
          <img src={landing} alt="" />
        </div>
        <div class="item level-2">
          <img src={tshirt} alt="" />
        </div>
        <div class="item level-3">
          <img src={house} alt="" />
        </div>
        <div class="item level-1">
          <img src={landing} alt="" />
        </div>
        <div class="item level-2">
          <img src={tshirt} alt="" />
        </div>
        <div class="item level-3">
          <img src={house} alt="" />
        </div>
        <div class="item level-1">
          <img src={landing} alt="" />
        </div>
        <div class="item level-2">
          <img src={tshirt} alt="" />
        </div>
        <div class="item level-3">
          <img src={house} alt="" />
        </div>
      </section>
    );
  }
}
