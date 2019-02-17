import React, { Component } from "react";
import styles from "../css/index.css";


Array.prototype.randomArray = function(){
  return this[Math.floor(Math.random()*this.length)];
}

export default class How extends Component {
  randomWorks() {
    const { work } = this.props.data; 
    // TODO: Random without repeat
    return work.map((elem,index) => {
      return <Portfolio key={index} index={index} work={elem} onClick={this.props.onClick} />
    });
  }
  render() {
    return (
      <section id={styles.how}>
        {this.randomWorks()}
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
        className={"item level-" + work.level} 
        onClick={this.props.onClick}
        >
        <img src={work.image} alt={work.alt} />
      </div>
    );
  }
}
