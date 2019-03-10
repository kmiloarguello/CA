import styles from "../css/index.pcss";
import React from "react";
import PropTypes from 'prop-types';

const Overlay = ({ modalActive, detail, onClick }) => {

    if(modalActive){
        const { title, description, images } = detail;

        console.log(description);
        document.body.style.overflow = "hidden";

        return (
            <div className={styles.modal + " " + modalActive}>
                <span className={styles.closeModal} onClick={onClick}></span>
                <div className={styles.overlayContent}>
                    <div className={styles.containerModalOverview}>
                        <div className={styles.containerTitleModal}>
                            <h2>{title}</h2>
                            <p>Quia facere eos officia inventore. Aut voluptates distinctio reprehenderit aut explicabo. Nemo occaecati commodi numquam voluptate occaecati nostrum. Sed consequatur dolor veritatis quos doloribus. Doloremque ut voluptatibus optio nemo est nostrum similique ratione. Consectetur doloribus rerum debitis velit.</p>
                        </div>
                    </div>
                    <div className={styles.containerImages}>
                        {
                            images.map((image,index) => {
                                return (
                                    <div className={"itemImage" + (index + 1)}  key={index} >
                                        <img 
                                            className={"image" + (index + 1)} 
                                            src={image.image} 
                                            alt={image.alt} />
                                        
                                        {/* Render string with HTML */}
                                        <p dangerouslySetInnerHTML={{ __html: image.alt }}></p> 
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

module.exports = { Overlay };