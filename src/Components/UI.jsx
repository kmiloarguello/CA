import styles from "../css/index.css";
import React from "react";

const Overlay = ({ modalActive, detail, onClick }) => {

    if(modalActive){
        const { title, description, images } = detail;

        document.body.style.overflow = "hidden";
        return (
            <div className={styles.modal + " " + modalActive}>
                <span className={styles.closeModal} onClick={onClick}></span>
                <div className={styles.overlayContent}>
                    <h2>{title}</h2>
                    <div className={styles.containerImages}>
                        {
                            images.map((image,index) => {
                                return (
                                    <img 
                                        key={index} 
                                        className={"image" + (index + 1)} 
                                        src={image.image} 
                                        alt={image.alt} />
                                    )
                            })
                        }
                    </div>
                    <p>{description}</p>
                </div>
                <div className={styles.modalOverlay} />
            </div>
        )
    }else{
        return "";
    }

    

    
    
};


module.exports = {
    Overlay
}