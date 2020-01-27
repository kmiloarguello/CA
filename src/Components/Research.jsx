import React, { Component } from "react";
import styles from "../css/index.pcss";

export default class Research extends Component {
  renderList() {
    const { papers } = this.props.data;
    return papers.map((elem, i) => {
      return (
        <li key={i} className={styles.researches_list}>
          <a
            target="blank"
            href={elem.href}
          >
            <img src={elem.image} alt={elem.title} />
          </a>

          <div className={styles.descriptionResearch}>
            <a
              target="blank"
              href={elem.href}
              className={styles.conticons}
            >
              <h3>{elem.title}</h3>
            </a>
            <p>{elem.description}</p>
          </div>
        </li>
      );
    });
  }
  render() {
    const { title } = this.props.data;
    return (
      <section id={styles.research}>
        <div className={styles.containerTitle}>
          <h2>{title}</h2>
        </div>
        <ul className={styles.containerImagesResearch}>
          {this.renderList()}
        </ul>
      </section>
    );
  }
}
