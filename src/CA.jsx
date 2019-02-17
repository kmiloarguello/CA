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
      modalActive : false
    }
    this.detail = {};
  }
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  activateModal(e){

    this.setState({
      modalActive : true
    })

    let elem = e.target.closest(".item");
    let attr = parseInt(elem.getAttribute("data-index"));

    this.detail = data.How.work[attr].detail;

  }
  render() {
    return (
      <div>
        <Header data={data}/>
        <Why data={data}  />
        <How 
          data={data.How}
          onClick={e => this.activateModal(e)} />
        {/* 
     
        
        <What />
        <Footer /> */}
        <Overlay modalActive={this.state.modalActive} />
      </div>
    );
  }
}
