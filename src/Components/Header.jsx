import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const data = this.props.data;
    return (
      <nav>
        <ul>
          <li>
            <img src={data.PersonalInfo.logo} alt={"Logo of Camilo Arguello"} />
            <h1>Camilo Argüello</h1>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
