import styles from "../css/index.pcss";
import React from "react";
import PropTypes from 'prop-types';

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
                                    <div key={index} >
                                        <img 
                                            className={"image" + (index + 1)} 
                                            src={image.image} 
                                            alt={image.alt} />
                                        <p>{image.alt}</p>
                                    </div>
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
        document.body.style.overflow = "auto";
        return "";
    }    
};

Overlay.propTypes = {
    modalActive: PropTypes.string,
    detail: PropTypes.object,
    onClick: PropTypes.func
}

module.exports = {
    Overlay
}