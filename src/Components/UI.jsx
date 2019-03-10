import styles from "../css/index.pcss";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Overlay extends Component{
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.modalActive){
            setTimeout(() => {
                document.getElementsByClassName(styles.containerModalOverview)[0]
                    .style.backgroundImage = 'url("' + nextProps.detail.images[0].image + '")';
            }, 50);
        }
        return true;
    }
    renderDetailsAction(){
        let renderSeeProjectButton, renderRepositoryButton;
        const { linkProject, chips, linkRepository } = this.props.detail;
        if(linkProject){
            renderSeeProjectButton = <a href={linkProject} target="_blank" className={styles.btn}>See Project</a>
        }
        if(linkRepository){
            renderRepositoryButton = <a href={linkRepository} target="_blank" className={styles.btn}>See Repository</a>
        }
        return (
            <div className={styles.detailsProjectAction}>
                <div className={styles.chips}>
                    { chips.map((chip,i) => <span key={i} className={styles.chip}>{chip}</span>) }
                </div>
                <div className={styles.seeProject}>
                    { renderSeeProjectButton }
                    { renderRepositoryButton }
                </div>
            </div>
        )
    }
    render(){

        const modalActive = this.props.modalActive;
        if(modalActive){
            const { title, description, images } = this.props.detail;
            const onClick = this.props.onClick;
            document.body.style.overflow = "hidden";
            document.getElementById("root").classList.add("active-modal");
 
            return (
                <RenderOverlay>
                    <div className={styles.modal + " " + modalActive}>
                        <span className={styles.closeModal} onClick={onClick}></span>
                        <div className={styles.overlayContent}>
                            <div className={styles.containerModalOverview}>
                                <div className={styles.containerTitleModal}>
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    {this.renderDetailsAction()}
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
                        </div>
                        <div className={styles.modalOverlay} onClick={onClick} />
                    </div>
                </RenderOverlay>
            )
        }else{
            document.body.style.overflow = "auto";
            document.getElementById("root").classList.remove("active-modal");
            return "";
        }
    }
}

class RenderOverlay extends Component{
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
      }
    
      componentDidMount() {
        modalRoot.appendChild(this.el);
      }
    
      componentWillUnmount() {
        modalRoot.removeChild(this.el);
      }
      
      render() {
        return ReactDOM.createPortal(
          this.props.children,
          this.el,
        );
      }    
}

Overlay.propTypes = {
    modalActive: PropTypes.string,
    detail: PropTypes.object,
    onClick: PropTypes.func
}

module.exports = { Overlay };