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
        });
    }
    updateLanguage(event){
        let target = event.target;
        let lang = target.getAttribute("data-lang");
        localStorage.setItem("lang", lang);
        location.reload(false);
    }
    render(){
        const { logo, name, email, cv, linkedin, github} = this.props.data.PersonalInfo;
        const { legal, contact, siteMap, curriculum } = this.props.data.Legal;
        const { language, spanish, english, french } = this.props.data.Language;
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
                        <h2>{contact}</h2>
                        <a href={"mailto:" + email +  "?Subject=Hello"} target="_top">{email}</a>
                        <a href={cv} target="_blank">{curriculum}</a>
                    </div>
                    <div className={styles.structure}>
                        <h2>{siteMap}</h2>
                        <ul>
                            {this.renderSiteMap()}
                        </ul>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn} style={{backgroundColor: this.props.colorBtn}}>{language}</button>
                            <div className={styles.dropdown_content}>
                                <button className={styles.btnlang} data-lang="en" onClick={(e) => this.updateLanguage(e)}>{english}</button>
                                <button className={styles.btnlang} data-lang="fr" onClick={(e) => this.updateLanguage(e)}>{french}</button>
                                <button className={styles.btnlang} data-lang="es" onClick={(e) => this.updateLanguage(e)}>{spanish}</button>
                            </div>
                        </div>
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