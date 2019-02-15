import React, { Component } from "react";
import styles from "../css/index.css";

export default class Why extends Component {
  render() {
    return (
      <div id={styles.why}>
        <ul className="collection">
          <li className={styles.avatar}>
            <img src={this.props.data.img} alt={this.props.data.alt} className={styles.circle} />
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                <b>Camilo Arguello</b>
              </h1>
              <h2>Developer and future scientist</h2>
            </div>
          </li>
          <li className={styles.description}>
            <p>
              Hey! Thank you for checking out my portfolio. I hope you like what
              you see in this site. Be sure to look around and check out my
              projects while you're here!
            </p>
            <p>
              My name is Camilo Arguello and I'm from Colombia and I am
              Multimedia Engineer. I love the programming, special effects and
              2D/3D animation. I´ve always loved solving problems, especially to
              design innovate and interactive contents, whether of computer
              graphics, animation, programming to deliver a memorable
              experience. Also with a great ability to learn new technologies,
              with a extensive leadership. I've always been fascinated with the
              idea of generating interactive content that provide a lifetime
              experience. I am currently working on web development, making
              applications and websites.
            </p>
            <p>
              I'm currently available for full-time job, so I you want to work
              with me or contract me, just put in contact with me and I can
              start anytime.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
