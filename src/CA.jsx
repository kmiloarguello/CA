import React, { Component } from "react";
import WOW from "wowjs";
import Loadable from "react-loadable";

import Header from "./Components/Header.jsx";
import styles from "./css/index.pcss";
import { data } from "./data/data.js";
import { data_fr } from "./data/data.js";
import { data_es } from "./data/data-es.js";
//import parti from "./data/particlesjs-config.json";


Array.prototype.randomArray = function(){
  return this[Math.floor(Math.random()*this.length)];
}

/**
 * Defines the language inside of the website
 * @param {String} language Type of language. i.e en-US or fr-FR 
 */
function defineLanguage(language = window.navigator.language){

  if (typeof(Storage) !== "undefined") {

    // If exists the localStorage AND also the lang storage variable exists
    if(localStorage.getItem("lang") != null){
      if( /fr/ig.test(localStorage.getItem("lang")) ){
        return data_fr;
      }else if( /es/ig.test(localStorage.getItem("lang")) ){
        return data_es;
      }else{
        return data;
      }

    // Use the window.navigator language
    }else{
      if( /fr/ig.test(language) ){
        return data_fr;
      }else if( /es/ig.test(language)){
        return data_es;
      }else{
        return data;
      }
    }
    // Otherwise return english lang
  }else{
    return data;
  }
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
////////////////////////////// FOR DEEZER //////////////////////////////
const AsyncDeezer = Loadable({
  loader: () => import("./Components/Deezer.jsx"),
  loading: Loading,
  timeout: 20000
});
////////////////////////////// END FOR DEEZER //////////////////////////////



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

    window.particlesJS.load('particles-js', "https://camiloarguello.xyz/js/particlesjs-config.json" , function() {});

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

    this.detail = defineLanguage().What.work[attr].detail;

  }
  closeModal(){
    this.setState({
      modalActive : ""
    });
  }
  radomGradients(){
    let currentPalette = defineLanguage().ColorPalettes.randomArray(); 

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
      return <Header data={ defineLanguage() }/>
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.renderGradients()} 
        <div id="why-cont" className={styles.containerhome}>
          {this.renderHeader()}
          <AsyncWhy data={ defineLanguage() } />
          <div id="particles-js"></div>
          <div className="bg-container"></div>
        </div>
        <AsyncHow 
        data={defineLanguage().How}
        />
        <AsyncDeezer data={defineLanguage().Deezer}/>
        <AsyncWhat data={defineLanguage().What}
          onClick={e => this.activateModal(e)} /> 
        <AsyncFooter data={defineLanguage()} colorBtn={this.state.fourthColor} />
        <AsyncOverlay 
          modalActive={this.state.modalActive}
          detail={this.detail}
          onClick={() => this.closeModal()} />
      </React.Fragment>
    );
  }
}


