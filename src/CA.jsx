import React, { Component } from "react";
import WOW from "wowjs";

import Header from "./Components/Header.jsx";
import Why from "./Components/Why.jsx";
import How from "./Components/How.jsx";
import What from "./Components/What.jsx";
import Footer from "./Components/Footer.jsx";
import styles from "./css/index.css";
import { data } from "./data/data.js";
import { Overlay } from "./Components/UI.jsx";


export default class CA extends Component {
  constructor(){
    super();
    this.state = {
      modalActive : ""
    }
    this.detail = {};
  }
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  activateModal(e){

    this.setState({
      modalActive : "active"
    })

    let elem = e.target.closest(".item");
    let attr = parseInt(elem.getAttribute("data-index"));

    this.detail = data.What.work[attr].detail;

  }
  closeModal(){
    this.setState({
      modalActive : ""
    })
  }
  render() {
    return (
      <div>
        <div className={styles.containerhome}>
          <Header data={data}/>
          <Why data={data}  />
          <div className="bg-container"></div>
        </div>
        <How 
          data={data.How}
           />
        <What data={data.What}
          onClick={e => this.activateModal(e)} /> 
        <Footer data={data} />
        <Overlay 
          modalActive={this.state.modalActive}
          detail={this.detail}
          onClick={() => this.closeModal()} />
      </div>
    );
  }
}
