import React, { Component } from 'react';
import styles from "../css/index.pcss";

export default class Deezer extends Component {
    renderIframeDeezer() {
      return (<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/10913442742" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write" width="700" height="350"></iframe>)
    }
    render(){
        const { title } = this.props.data;
        return(
            <section id={styles.deezer}>
                <div className={styles.containerTitle}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.containerIframeDeezer}>
                    {this.renderIframeDeezer()}
                </div>
            </section>
        )
    }
}