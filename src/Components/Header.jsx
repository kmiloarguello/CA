import React, { Component } from "react";
import CALogo from "../img/logo-camilo-arguello.png";

export default class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed white">
        <nav>
          <div className="nav-wrapper white">
            <div className="wow bounceIn">
              <a href="" className="brand-logo center">
                <img
                  id="logo-ca"
                  src={CALogo}
                  height="50"
                  alt="logo Camilo Arguello"
                  style={{ marginTop: '10px'}}
                />
              </a>
            </div>
            <a
              href="#"
              data-activates="mobile-demo"
              className="button-collapse"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul className="side-nav" id="mobile-demo">
              <li>
                <a className="link1">Home</a>
              </li>
              <li>
                <a className="link2">About me</a>
              </li>
              <li>
                <a className="link3">Work</a>
              </li>
              <li>
                <a className="link4">Contact</a>
              </li>
            </ul>
            <ul className="left hide-on-med-and-down">
              <li>
                <a className="link1">Home</a>
              </li>
              <li>
                <a className="link2">About me</a>
              </li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <a className="link3">Work</a>
              </li>
              <li>
                <a className="link4">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
