import React, { Component } from 'react';
import styles from "../css/index.pcss";

export default class Research extends Component{
    renderList(){
        const { papers } = this.props.data;
        return papers.map((elem,i) => {
          return (
            <a key={i} target="blank" href={elem.href} className={styles.conticons}>
              <img src={elem.image} alt={elem.title} />
              <div className={styles.descriptionResearch}>
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
              </div>
            </a>
          )
        });
      }
    render(){
        const { title } = this.props.data;
        return(
            <section id={styles.research}>
                <div className={styles.containerTitle}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.containerImagesResearch}>
                    {this.renderList()}
                </div>
               
            </section>
        )
    }
}