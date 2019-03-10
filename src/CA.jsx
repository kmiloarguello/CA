import React, { Component } from "react";
import WOW from "wowjs";

import Header from "./Components/Header.jsx";
import Why from "./Components/Why.jsx";
import How from "./Components/How.jsx";
import What from "./Components/What.jsx";
import Footer from "./Components/Footer.jsx";
import styles from "./css/index.pcss";
import { data } from "./data/data.js";
import { Overlay } from "./Components/UI.jsx";


export default class CA extends Component {
  constructor(){
    super();
    this.state = {
      modalActive : "",
      isMobile: false
    }
    this.detail = {};
    this.mediaScreen = null;
  }
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();

    this.mediaScreen = window.matchMedia("(max-width: 600px)");
    
    this.updateScreenWidth(this.mediaScreen);
    this.mediaScreen.addListener(e => this.updateScreenWidth(e));    
  }
  updateScreenWidth(e){

    if (e.matches) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }

  }
  activateModal(e){

    this.setState({
      modalActive : "active"
    });

    let elem = e.target.closest(".item");
    let attr = parseInt(elem.getAttribute("data-index"));

    this.detail = data.What.work[attr].detail;

  }
  closeModal(){
    this.setState({
      modalActive : ""
    });
  }
  renderHeader(){
    if(this.state.isMobile){
      return 
    }else{
      return <Header data={data}/>
    }
  }
  render() {
    return (
      <React.Fragment>
        <div id="why-cont" className={styles.containerhome}>
          {this.renderHeader()}
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
      </React.Fragment>
    );
  }
}