import React, { Component } from "react";


window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


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
