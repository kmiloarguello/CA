import React, { Component } from "react";
import styles from "../css/index.css";
import phone from "../img/phone.png";

export default class Why extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById(styles.phone).style.transform = "scale(1.7)";
    }, 1500);

    let why = this.props.why;
    let title = document.getElementById("title");
    let startTime = Date.now();

    var changeTitleNSubtitle = function() {
      let elapsedTime = Date.now() - startTime;
      let finalTime = parseInt((elapsedTime / 1000).toFixed());

      if (finalTime <= why.length) {
        console.log(finalTime-1)
        title.innerHTML = why[finalTime - 1].title;
      } else {
        console.log(finalTime, why.length, why[finalTime]);
        restartCounter();
      }
    };

    let interval = setInterval(changeTitleNSubtitle, 2000);

    function restartCounter() {
      clearInterval(interval);
      //interval = setInterval(changeTitleNSubtitle, 1000);
    }
  }

  render() {
    return (
      <section id={styles.why}>
        <div className="container">
          <div className="row">
            <div className="col s12 m7">
              <div className="valign-wrapper" style={{ height: "80vh" }}>
                <div>
                  <h1 id="title" className="wow infinite fadeInUp">
                   
                  </h1>
                  <h2 className="wow bounceInRight">
                    {this.props.why[0].subtitle}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col m5">
              <div className="valign-wrapper" style={{ height: "100vh" }}>
                <img
                  id={styles.phone}
                  className="wow fadeInUp"
                  src={phone}
                  alt="phone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
