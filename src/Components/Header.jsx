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
    const { name, logoWhite } = this.props.data.PersonalInfo;
    return (
      <nav>
        <ul>
          <li>
            <h1>{name}</h1>
          </li>
          {this.renderMenu()}
        </ul>
      </nav>
    );
  }
}
