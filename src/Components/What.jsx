import React, { Component } from "react";
import styles from "../css/index.css";

Array.prototype.randomArray = function(){
  return this[Math.floor(Math.random()*this.length)];
}

export default class What extends Component {
  randomWorks() {
    const { work } = this.props.data; 
    // TODO: Random without repeat
    return work.map((elem,index) => {
      return <Portfolio key={index} index={index} work={elem} onClick={this.props.onClick} />
    });
  }
  render() {
    const { title } = this.props.data;
    return (
      <section id={styles.what}>
        <div className={styles.containerTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.containerImages}>
          {this.randomWorks()}
        </div>
      </section>
    );
  }
}


class Portfolio extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { work,index } = this.props;
    return (
      <div 
        data-index={index}
        className={"item level-" + work.level + " wow fadeInUp"} 
        onClick={this.props.onClick}
        >
        <img src={work.image} alt={work.alt} />
      </div>
    );
  }
}
