import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const data = this.props.data
    return (
      <nav>
        <img src={data.PersonalInfo.logo} alt={"Logo of Camilo Arguello"} />
        <h1>Camilo Argüello</h1>
      </nav>
    );
  }
}
