import React, { Component } from "react";
import juliana from "../img/juliana.jpg";

export default class What extends Component {
  render() {
    return (
      <div className="section3">
        <h5 className="white-text">Portfolios</h5>
        <p className="white-text">
          Here are some of the things I've been making
        </p>
        <div className="card col s12 m6 l4 wow fadeInUp">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={juliana} />
          </div>
          <div className="card-content white-text">
            <span className="card-title activator">
              K@PTA Website
              <i className="material-icons right">more_vert</i>
            </span>
            <p>Website for a company</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              K@PTA Website
              <i className="material-icons right">close</i>
            </span>
            <p>
              This website was developed with technologies like SASS, Javascript
              and JQuery.
            </p>
            <div className="chip">Website</div>
            <div className="chip">HTML5</div>
            <div className="chip">SASS</div>
            <div className="chip">JQuery</div>
            <div className="see_project">
              <a
                target="_blank"
                className="btn black white-text"
                href="http://kapta.biz"
              >
                See Project
              </a>
              <a
                target="_blank"
                className="btn black white-text"
                href="https://github.com/KAPTA-BIZ/kapta-web"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="card col s12 m6 l4">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={juliana} />
          </div>
          <div className="card-content white-text">
            <span className="card-title activator">
              Adventure Machine
              <i className="material-icons right">more_vert</i>
            </span>
            <p>Music app inspired on Madeon</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Adventure Machine
              <i className="material-icons right">close</i>
            </span>
            <p>
              (Work in progress) The idea is to create a minimal version of
              Adventure Machine. For this project I've used NodeJs and ReactJs.
            </p>
            <div className="chip">Music app</div>
            <div className="chip">Node.js</div>
            <div className="chip">Adventure Machine</div>
            <div className="chip">React.js</div>
            <div className="chip">Web Audio Api</div>
            <div className="see_project">
              <a
                target="_blank"
                className="btn black white-text"
                href="http://adventuremachine.herokuapp.com/"
              >
                See Project
              </a>
              <a
                target="_blank"
                className="btn black white-text"
                href="https://github.com/kmiloarguello/adventuremachine"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="card col s12 m6 l4">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={juliana} />
          </div>
          <div className="card-content white-text">
            <span className="card-title activator">
              SVG
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a className="white-text" href="#">
                SVG Animation for Kapta
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              SVG Animations
              <i className="material-icons right">close</i>
            </span>
            <p>
              This project was build using TweenMax to generate SVG Animations.
            </p>
            <div className="chip">2D Animation</div>
            <div className="chip">Javascript</div>
            <div className="chip">Svg Animation</div>
            <div className="chip">TweenMax</div>
            <div className="see_project">
              <a
                target="_blank"
                className="btn black white-text"
                href="http://kapta.biz/porsche"
              >
                See Project
              </a>
              <a
                target="_blank"
                className="btn black white-text"
                href="https://github.com/KAPTA-BIZ/propuesta-porsche"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="card col s12 m6 l4 wow slideInDown">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={juliana} />
          </div>
          <div className="card-content white-text">
            <span className="card-title activator">
              Game Motorrad
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a className="white-text" href="#">
                Game for BMW Motorrad Colombia
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Game Motorrad
              <i className="material-icons right">close</i>
            </span>
            <p>
              This project is a game of questions to train dealer employees in
              BMW.
            </p>
            <div className="chip">Game</div>
            <div className="chip">Ask</div>
            <div className="chip">Compass</div>
            <div className="chip">Sass</div>
            <div className="chip">Javascript</div>
            <div className="see_project">
              <a
                target="_blank"
                className="btn black white-text"
                href="http://kapta.biz/game-motorrad"
              >
                See Project
              </a>
              <a
                target="_blank"
                className="btn black white-text"
                href="https://github.com/KAPTA-BIZ/game-motorrad"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="card col s12 m6 l4 wow bounceInUp">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={juliana} />
          </div>
          <div className="card-content white-text">
            <span className="card-title activator">
              Mi compañero de Juego
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a className="white-text" href="#">
                3D Animation
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Mi compañero de Juego
              <i className="material-icons right">close</i>
            </span>
            <p>This is my first 3D Animation. Available soon.</p>
            <div className="chip">3D Animation</div>
            <div className="chip">Autodesk Maya</div>
            <div className="chip">Texturing</div>
            <div className="chip">3D Modeling</div>
          </div>
        </div>

        <div className="card col s12 m6 l4 wow jackInTheBox">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={juliana} />
          </div>
          <div className="card-content">
            <span className="card-title activator white-text">
              Car Visualization
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a className="white-text" href="#">
                360 view of Kia Niro 2017
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Car Visualization
              <i className="material-icons right">close</i>
            </span>
            <p>
              This project uses Javascript and Three.js to create 360 view
              exterior of a new KIA Niro and others cars.
            </p>
            <div className="chip">Javascript</div>
            <div className="chip">Three.js</div>
            <div className="chip">360 View</div>
            <div className="chip">JQuery</div>
            <div className="see_project">
              <a
                target="_blank"
                className="btn black white-text"
                href="http://kapta.biz/app-car-kia"
              >
                See Project
              </a>
              <a
                target="_blank"
                className="btn black white-text"
                href="https://github.com/KAPTA-BIZ/app-car-kia"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
