import styles from "../css/index.pcss";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export default class Overlay extends Component{
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
            renderSeeProjectButton = <a href={linkProject} target="_blank" className={styles.btn}>Visit Site</a>
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
    renderVideoDetails(index){
        const { video } = this.props.detail;
        if(video){
            return (
                <video controls={true} key={"video-" + index}>
                    <source src={video} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>
            )
        }
    }
    renderMultipleVideos(){
        const { videos } = this.props.detail;
        if(videos){
            return videos.map((video,index) => {
                return (
                    <video controls={true} key={index} className={"itemImage" + (index + 1)}>
                        <source src={video} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                )
            });
        }
    }
    renderImagesDetails(){
        const { images } = this.props.detail;
        return (
            images.map((image,index) => {
                return (
                    <React.Fragment key={index}>

                            <div className={"itemImage" + (index + 1)} >
                                <img 
                                    className={"image" + (index + 1)} 
                                    src={image.image} 
                                    alt={image.alt} />
                                    
                                {/* Render string with HTML */}
                                <p dangerouslySetInnerHTML={{ __html: image.alt }}></p> 
                            </div>
                            {this.renderVideoDetails(index)}

                    </React.Fragment>
                )
            })
        )
    }
    render(){

        const modalActive = this.props.modalActive;
        if(modalActive){
            const { title, description } = this.props.detail;
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
                                { this.renderImagesDetails() }
                                { this.props.detail.videos ? this.renderMultipleVideos() : "" }
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

