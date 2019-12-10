import React, { Component } from 'react';
import styles from "../css/index.pcss";

export default class Deezer extends Component{
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
                <div className={styles.containerImages}>
                    {this.renderList()}
                </div>
               
            </section>
        )
    }
}