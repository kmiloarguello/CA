import React, { Component } from "react";
import WOW from "wowjs";
import Loadable from "react-loadable";

import Header from "./Components/Header.jsx";
import styles from "./css/index.pcss";
import { data } from "./data/data.js";
import Overlay from "./Components/UI.jsx";

function Loading() {
  return <div>Loading...</div>;
}


const AsyncWhy = Loadable({
  loader: () => import("./Components/Why.jsx"),
  loading: Loading,
  timeout: 20000
});
const AsyncHow = Loadable({
  loader: () => import("./Components/How.jsx"),
  loading: Loading,
  timeout: 20000
});
const AsyncWhat = Loadable({
  loader: () => import("./Components/What.jsx"),
  loading: Loading,
  timeout: 20000
});
const AsyncFooter = Loadable({
  loader: () => import("./Components/Footer.jsx"),
  loading: Loading,
  timeout: 20000
});
const AsyncOverlay = Loadable({
  loader: () => import("./Components/UI.jsx"),
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


