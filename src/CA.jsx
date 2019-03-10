import React, { Component } from "react";
import WOW from "wowjs";
import Loadable from "react-loadable";

import Header from "./Components/Header.jsx";
import ABTest from "./Components/ABTest.jsx";
import Why from "./Components/Why.jsx";
import How from "./Components/How.jsx";
import What from "./Components/What.jsx";
import Footer from "./Components/Footer.jsx";
import styles from "./css/index.pcss";
import { data } from "./data/data.js";
import Overlay from "./Components/UI.jsx";

function Loading() {
  return <div>Loading...</div>;
}

const AsyncAB = Loadable({
  loader: () => ABTest,
  loading: Loading
});

const AsyncWhy = Loadable({
  loader: () => Why,
  loading: Loading,
  timeout: 20000
});
const AsyncHow = Loadable({
  loader: () => How,
  loading: Loading,
  timeout: 20000
});
const AsyncWhat = Loadable({
  loader: () => What,
  loading: Loading,
  timeout: 20000
});
const AsyncFooter = Loadable({
  loader: () => Footer,
  loading: Loading,
  timeout: 20000
});
const AsyncOverlay = Loadable({
  loader: () => Overlay,
  loading: "Loading",
  timeout: 20000
});




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
        <AsyncAB />
        <div id="why-cont" className={styles.containerhome}>
          {this.renderHeader()}
          <AsyncWhy data={data} />
          <div className="bg-container"></div>
        </div>
        <AsyncHow 
        data={data.How}
        />  
        <AsyncWhat data={data.What}
          onClick={e => this.activateModal(e)} /> 
        <AsyncFooter data={data} />
        <Overlay 
          modalActive={this.state.modalActive}
          detail={this.detail}
          onClick={() => this.closeModal()} />
      </React.Fragment>
    );
  }
}


