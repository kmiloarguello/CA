import React, { Component } from "react";
import WOW from "wowjs";
import Loadable from "react-loadable";

import Header from "./Components/Header.jsx";
import styles from "./css/index.pcss";
import { data } from "./data/data.js";


Array.prototype.randomArray = function(){
  return this[Math.floor(Math.random()*this.length)];
}


function Loading(props) {
  if (props.error) {
    return (
      <div className={styles.container_loader}>
        <div className={styles.error}>
          Lo sentimos hubo un error!
          <br />
          <button onClick={props.retry}>Reintentar</button>
        </div>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div className={styles.container_loader}>
        <div className={styles.error}>
          Esta sección está tomando demasiado tiempo para cargar...
          <br />
          <button onClick={props.retry}>Reintentar</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container_loader}>
        <div className={styles.loader} />
      </div>
    );
  }
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
      isMobile: false,
      firstColor: data.ColorPalettes[0].firstColor,
      secondColor: data.ColorPalettes[0].secondColor,
      thirdColor: data.ColorPalettes[0].thirdColor,
      fourthColor: data.ColorPalettes[0].fourthColor,
    }
    this.detail = {};
    this.mediaScreen = null;
  }
  componentDidMount() {
    document.getElementById("first-loader").style.display = "none";

    this.radomGradients();

    const wow = new WOW.WOW();
    wow.init();

    this.mediaScreen = window.matchMedia("(max-width: 600px)");
    
    this.updateScreenWidth(this.mediaScreen);
    this.mediaScreen.addListener(e => this.updateScreenWidth(e));
    
    
    if ('serviceWorker' in navigator) {
      self.addEventListener('load', function() {
        navigator.serviceWorker.register('/files/service-worker.js',{scope: '/'} ).then(function(registration) {
  
        }, function(err) {
          console.log('ServiceWorker registration failed: ', err);
        });      
      });
    }

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
  radomGradients(){
    let currentPalette = data.ColorPalettes.randomArray(); 

    this.setState({
      firstColor: currentPalette.firstColor,
      secondColor: currentPalette.secondColor,
      thirdColor: currentPalette.thirdColor,
      fourthColor: currentPalette.fourthColor,
    })
  }
  renderGradients(){
    return (
      <style jsx="true">{`
        :root{
          --firstGradColor: ${this.state.firstColor};
          --secondGradColor: ${this.state.secondColor};
          --thirdGradColor: ${this.state.thirdColor};
          --fourthGradColor: ${this.state.fourthColor};
        }
      `}</style>
    )
  }
  renderHeader(){
    if(this.state.isMobile){
      return;
    }else{
      return <Header data={data}/>
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.renderGradients()} 
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
        <AsyncOverlay 
          modalActive={this.state.modalActive}
          detail={this.detail}
          onClick={() => this.closeModal()} />
      </React.Fragment>
    );
  }
}


