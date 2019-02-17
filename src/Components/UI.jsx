import styles from "../css/index.css";
import React from "react";

const Overlay = ({ modalActive }) => {
    let overlay = modalActive ? styles.modalOverlay + " active" : styles.modalOverlay 
    console.log();
    return (
        <div className={overlay}></div>
    )
}


module.exports = {
    Overlay
}