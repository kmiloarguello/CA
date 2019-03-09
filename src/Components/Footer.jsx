import React, { Component } from 'react';
import styles from "../css/index.pcss";

export default class Footer extends Component{
    renderSiteMap(){
        const { menu } = this.props.data.Header;
        return menu.map((elem, index) => {
            return (
                <li key={index}>
                    <a href={elem.href}>{elem.title}</a>
                </li>
            )
        })
    }
    render(){
        const { logo, name, email, cv, linkedin, github} = this.props.data.PersonalInfo;
        const { legal } = this.props.data.Legal;
        const { iconGithub, iconLinkedin } = this.props.data.AdditionalIcons;

        return(
            <footer id="footer" className="page-footer">

                <div className={styles.contFooter}>
                    <div className={styles.social}>
                        <img className={styles.logo} src={logo} alt={"Logo of " + name} />
                        <p>{legal}</p>
                        <ul>
                            <li>
                                <a href={linkedin} target="_blank" className={styles.linkedinicon}>
                                    <img src={iconLinkedin} alt="Linkedin icon"/>
                                </a>
                            </li>
                            <li>
                                <a href={github} target="_blank" className={styles.githubicon}>
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
                            {this.renderSiteMap()}
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