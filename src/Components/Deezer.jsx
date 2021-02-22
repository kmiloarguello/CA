import React, { Component } from 'react';
import styles from "../css/index.pcss";

export default class Deezer extends Component {
    renderIframeDeezer() {
      return (<iframe scrolling="yes" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=420&color=EF5466&layout=&size=medium&type=charts&id=user_2173462548&title=kmiloarguello&app_id=1" width="700" height="350"></iframe>)
    }
    renderList(){
        const { favorites } = this.props.data;
        return favorites.map((elem,i) => {
          return (
            <div key={i} className={styles.conticons}>
              <img src={elem.image} alt={elem.title} />
              <h3>{elem.title}</h3>
              <p>{elem.description}</p>
            </div>
          )
        })
      }
    render(){
        const { title } = this.props.data;
        return(
            <section id={styles.deezer}>
                <div className={styles.containerTitle}>
                    <h2>{title}</h2>
                </div>
                {/*<div className={styles.containerImagesDeezer}>
                    {this.renderList()}
                </div>*/}
                <div className={styles.containerIframeDeezer}>
                    {this.renderIframeDeezer()}
                </div>
            </section>
        )
    }
}