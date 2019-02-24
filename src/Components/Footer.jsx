import React, { Component } from 'react';
import styles from "../css/index.css";
import iconGithub from "../img/social/github.svg";
import iconLinkedin from "../img/social/linkedin.svg";

export default class Footer extends Component{
    render(){
        const { logo, name, email, cv} = this.props.data.PersonalInfo;
        const { legal } = this.props.data.Legal;
        return(
            <footer id="footer" className="page-footer">

                <div className={styles.contFooter}>
                    <div className={styles.social}>
                        <img className={styles.logo} src={logo} alt={"Logo of " + name} />
                        <p>{legal}</p>
                        <ul>
                            <li>
                                <a target="_blank" className={styles.linkedinicon} href="https://www.linkedin.com/in/kmiloarguello">
                                    <img src={iconLinkedin} alt="Linkedin icon"/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" className={styles.githubicon} href="https://github.com/kmiloarguello">
                                <img src={iconGithub} alt="Github icon"/>
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className={styles.information}>
                        <h2>Contact</h2>
                        <a href={"mailto:" + email +  "?Subject=Hello"} target="_top">{email}</a>
                        <a href={cv} target="_blank">Curriculum Vitae</a>
                    </div>
                    <div className={styles.structure}>
                        <h2>Sitemap</h2>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#motivations">Motivations</a></li>
                            <li><a href="#work">Work</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={styles.copyright}>
                    <small>
                        © {new Date().getFullYear() + " " + name} 
                    </small>
                </div>

            </footer>


        )
    }
}