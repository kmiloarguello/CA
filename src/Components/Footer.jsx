import React, { Component } from 'react'

export default class Footer extends Component{
    render(){
        return(
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5 className="white-text">Contact</h5>
                            <div className="col s12">
                                <ul>
                                    <li><a target="_blank" className="grey-text text-lighten-3" href="https://www.facebook.com/kmilo.arguello"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a target="_blank" className="grey-text text-lighten-3" href="https://www.linkedin.com/in/kmiloarguello"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a target="_blank" className="grey-text text-lighten-3" href="https://github.com/kmiloarguello"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                    <li><a target="_blank" className="grey-text text-lighten-3" href="https://www.instagram.com/kmilo_arguello/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <h5>Write me</h5>
                            <a className="white-text" href="mailto:contact@camiloarguello.xyz?Subject=Hello" target="_top">contact@camiloarguello.xyz</a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center">
                        © 2017 Camilo Arguello
    </div>
                </div>
            </footer>


        )
    }
}