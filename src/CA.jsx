import React, { Component } from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import styles from './css/index.css'

export default class CA extends Component {
    render() {
        return (
            <div>
                <Header />
                <ul className={styles.container}>
                    <li className={styles.item}>1</li>
                    <li className={styles.item}>2</li>
                    <li className={styles.item}>3</li>
                    <li className={styles.item}>4</li>
                    <li className={styles.item}>5</li>
                    <li className={styles.item}>6</li>
                    <li className={styles.item}>7</li>
                    <li className={styles.item}>8</li>
                    <li className={styles.item}>9</li>
                    <li className={styles.item}>10</li>
                    <li className={styles.item}>11</li>
                    <li className={styles.item}>12</li>
                </ul>
                <Footer />
            </div>

        )
    }
}