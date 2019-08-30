import React, { Component } from "react";
import styles from "../css/index.pcss";
import PropTypes from 'prop-types';

export default class What extends Component {
  constructor(props){
    super(props);
    this.state = {
      paddingBottom : 100,
      maxHeight: 1600
    }
  }

  getResolutionKey() {
      let resKey;
      let curResolution = window.innerWidth;

      let resolutionMap = {
          "xsmall": {
              "min": 0,
              // //

              "max": 760

          },
          // "small": {
          // 	"min": 481,
          // 	"max": 959
          // },
          "medium": {
              "min": 761,
              "max": 1024
          },
          "large": {
              "min": 1025,
              "max": 1280
          },
          "xlarge": {
              "min": 1281,
              "max": 9999
          }
      }

      if (curResolution < 500) {
          curResolution = 320;
      }

      for (let resolution in resolutionMap) {
          if (resolutionMap[resolution].min <= curResolution && resolutionMap[resolution].max >= curResolution) {
              resKey = resolution;
          }
      }

      return resKey;
  }

  isMobile() {
    return this.getResolutionKey() == "xsmall";

  }

  // Moves the button to load more work items
  loadMoreItems(){

    if(this.isMobile()){

      this.setState({
        maxHeight: this.state.maxHeight + 800
      });
    
      let cont = document.getElementsByClassName(styles.containerImages)[1];
      cont.style.maxHeight = this.state.maxHeight + "px";

      let buttonLoadMore = document.getElementsByClassName("load-more")[0];
      buttonLoadMore.style.bottom = 2 + "%";

    }else{

      this.setState({
        paddingBottom: this.state.paddingBottom + 100
      });
    
      let cont = document.getElementsByClassName(styles.containerImages)[1];
      cont.style.paddingBottom = this.state.paddingBottom + "px";

    }
    
  }
  randomWorks() {
    const { work } = this.props.data; 
    // TODO: Random without repeat
    return work.map((elem,index) => {
      return <Portfolio key={index} index={index} work={elem} onClick={this.props.onClick} />
    });
  }
  renderLoadMoreButton(){
    const { work } = this.props.data; 
    if(work.length >= 8){
      return <button onClick={() => this.loadMoreItems()} className="btn load-more"><span>Load More</span></button>
    }
  }
  render() {
    const { title } = this.props.data;
    return (
      <section id={styles.what}>
        <div className={styles.containerTitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.containerImages}>
          {this.randomWorks()}
        </div>
        {this.renderLoadMoreButton()}
      </section>
    );
  }
}

What.propTypes = {
  data: PropTypes.object
}

class Portfolio extends Component{
  renderDetailOnHover(event){
    let element = event.target;

  }
  render(){
    const { work,index } = this.props;
    return (
      <div 
        data-index={index}
        className={"item level-" + work.level + " wow fadeInUp"} 
        onClick={this.props.onClick}
        onMouseEnter={e => this.renderDetailOnHover(e)}
        >
        <div className={styles.itemLevelFocus}>
          <p>{work.alt}</p>
        </div>
        <img src={work.image} alt={work.alt} />
      </div>
    );
  }
}

Portfolio.propTypes = {
  index: PropTypes.number,
  work: PropTypes.object
}