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
      return <Portfolio key={index}  work={elem} />
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
  activateModal(){
    console.log("Hi");
  }
  render(){
    const { work } = this.props;

    return (
      <div 
        className={"item level-" + work.level} 
        onClick={() => this.activateModal()}
        >
        <img src={work.image} alt={work.alt} />
      </div>
    );
  }
}
