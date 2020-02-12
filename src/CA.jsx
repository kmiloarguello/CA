import React, { Component } from "react";
import WOW from "wowjs";
import Loadable from "react-loadable";

import defineLanguage from './lang/lang.js';
import Header from "./Components/Header.jsx";
import styles from "./css/index.pcss";
import { data } from "./data/data.js";

//import parti from "./data/particlesjs-config.json";
import Loading from "./Components/Loading.jsx";
//import colorTransition from "./colors/colors-transition.js";

Array.prototype.randomArray = function(){
  let rand = Math.floor(Math.random() * this.length);
  return this[ rand ];
}

////////////////////////////// ASYNC COMPONENTS //////////////////////////////
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
const AsyncResearch = Loadable({
  loader: () => import("./Components/Research.jsx"),
  loading: Loading,
  timeout: 20000
})
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
const AsyncDeezer = Loadable({
  loader: () => import("./Components/Deezer.jsx"),
  loading: Loading,
  timeout: 20000
});
////////////////////////////// END ASYNC COMPONENTS //////////////////////////////

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
    
    //this.updateGradients();
    this.createServiceWorker();
    
  }

  /**
   * **********************************************************************************
   * HELPERS
   * **********************************************************************************
   */

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

  /**
   * **********************************************************************************
   * MODAL
   * **********************************************************************************
   */
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

  /**
   * **********************************************************************************
   * SERVICE WORKER
   * **********************************************************************************
   */

  createServiceWorker(){
    if ('serviceWorker' in navigator) {
      self.addEventListener('load', function() {
        navigator.serviceWorker.register('/files/service-worker.js',{scope: '/'} ).then(function(registration) {
  
        }, function(err) {
          console.log('ServiceWorker registration failed: ', err);
        });      
      });
    }

    if(!this.state.isMobile){
      window.particlesJS.load('particles-js', "https://camiloarguello.xyz/js/particlesjs-config.json" , function() {});
    }

  }

  /**
   * **********************************************************************************
   * GRADIENTS
   * **********************************************************************************
   * 
   * Initializes the colors on the website
   * then, Assign each color to the pattern as state
   */

  radomGradients(){
    let currentPalette = defineLanguage().ColorPalettes.randomArray(); 

    this.setState({
      firstColor: currentPalette.firstColor,
      secondColor: currentPalette.secondColor,
      thirdColor: currentPalette.thirdColor,
      fourthColor: currentPalette.fourthColor,
    });

  }

  // Not used
  // Changes the color gradient each 20s
  updateGradients(){
    let counter = 0;

    setInterval(() => { 
      if(counter < defineLanguage().ColorPalettes.length){
        counter++;
        this.radomGradients();
      }
    },2000);
  }

  /**
   * **********************************************************************************
   * RENDER
   * **********************************************************************************
   */

   //Assign each state color to the CSS using <style jsx></style> notation
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

  // Render only the header on Desktop
  renderHeader(){
    if(this.state.isMobile){
      return;
    }else{
      return <Header data={ defineLanguage() } />
    }
  }

  // Render all components
  render() {
    return (
      <React.Fragment>

        {this.renderGradients()} 
        <div id="why-cont" className={styles.containerhome}>
          {this.renderHeader()}
          <AsyncWhy data={ defineLanguage() } />
          {/*!this.state.isMobile ? <div id="particles-js"></div> : ""*/}
          <div className="bg-container"></div>
        </div>

        <React.Fragment>
          <AsyncHow data={defineLanguage().How} />
          <AsyncResearch data={defineLanguage().Research} /> 
          {/* <AsyncDeezer data={defineLanguage().Deezer} /> */}
        </React.Fragment>

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


