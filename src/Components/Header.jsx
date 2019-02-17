import React, { Component } from "react";

export default class Header extends Component {
  renderMenu(){
    const { menu } = this.props.data.Header;
    return menu.map((item,index) => {
      return(
        <li key={index}>
          <a href={item.href}>{item.title}</a>
        </li>)
    })
  }
  render() {
    const { name, logo } = this.props.data.PersonalInfo;
    return (
      <nav>
        <ul>
          <li>
            <img src={logo} alt={"Logo of " + name} />
            <h1>{name}</h1>
          </li>
          {this.renderMenu()}
        </ul>
      </nav>
    );
  }
}
