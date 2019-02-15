import React, { Component } from "react";
import styles from "../css/index.css";
import phone from "../img/phone.png";

export default class How extends Component {
  constructor(props) {
    super(props);
    this.randomWorks = this.randomWorks.bind(this);
    this.portfolios = [];
    this.random = 1;
  }
  randomWorks() {
    this.props.data.work.forEach((work,index) => {
      this.portfolios.push(<Portfolio key={index} level={Math.floor((Math.random() * 3) + 1)}  work={work} />)
    });
  }
  render() {
    return (
      <section id={styles.how}>
        {this.randomWorks()}
        {this.portfolios}
      </section>
    );
  }
}

const Portfolio = ({ work, level }) => {
  console.log(level)
  return (
    <div className={"item level-" + level}>
      <img src={work.image} alt={work.alt} />
    </div>
  );
};
