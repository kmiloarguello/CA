import React, { Component } from "react";
import smoothScroll from "./Scroll.js"

export default class Header extends Component {
  componentDidMount(){
    this.scrollOnLoad()
  }
  scrollOnClick(index){
    switch (index) {
      case 0:
        smoothScroll(document.getElementById('why-cont'))
        break;
      case 1:
        smoothScroll(document.getElementById('how'))
        break;
      case 2:
        smoothScroll(document.getElementById('what'))
        break;
      case 3:
        smoothScroll(document.getElementById('footer'))
        break;
      default:
        smoothScroll(document.getElementById('why-cont'))
        break;
    }
  }
  scrollOnLoad(){
    
    setTimeout(() => {
      switch (window.location.hash) {
        case "#home":
          smoothScroll(document.getElementById('why-cont'))
          break;
        case "#motivation":
          smoothScroll(document.getElementById('how'))
          break;
        case "#work":
          smoothScroll(document.getElementById('what'))
          break;
        case "#contact":
          smoothScroll(document.getElementById('footer'))
          break;
        default:
          smoothScroll(document.getElementById('why-cont'))
          break;
      }
    }, 100);
  }
  renderMenu(){
    const { menu } = this.props.data.Header;
    return menu.map((item,index) => {
      return(
        <li key={index}>
          <a onClick={() => this.scrollOnClick(index)} href={item.href}>{item.title}</a>
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
