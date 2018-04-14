import React, { Component } from "react";

export default class Why extends Component {
  componentDidMount() {
    // $(".button-collapse").sideNav();
    // $(".carousel.carousel-slider").carousel({ full_width: true });

    // $(".carousel").carousel();
    // setInterval(function() {
    //   $(".carousel").carousel("next");
    // }, 5000);
  }
  render() {
    return (
      <div className="section1">
        <div className="carousel carousel-slider center" data-indicators="true">
          <div className="carousel-item white-text" href="#two!">
            <h1>Camilo Argüello</h1>
            <p>I make beautiful things</p>
          </div>
          <div className="carousel-item white-text" href="#three!">
            <h1>I make websites</h1>
            <p className="white-text">
              I design and develop websites with the lastest availables
              technologies for your needs.
            </p>
            <div id="laptop-svg" />
          </div>
          <div className="carousel-item white-text" href="#four!">
            <h1>I make apps</h1>
            <p className="white-text">
              I develop web apps, music apps, serious and fun apps. Any kind of
              app.
            </p>
            <div id="phone-svg" />
          </div>
          <div className="carousel-item white-text" href="#five!">
            <h1>I make motion design</h1>
            <p className="white-text">
              I can create innovative content for you, like a motion graphics,
              2D and 3D animations, illustrations, etc. It's like magic!
            </p>
            <div id="sombrero-svg" />
          </div>
          <div className="carousel-item white-text" href="#one!">
            <h1>I make experiences</h1>
            <p className="white-text">
              Multimedia is about of use technologies to give a experience of
              life. My goal is than everyone who interact with any of my
              projects can remember that moment for a long time.
            </p>
            <div id="experience-svg" />
          </div>
        </div>
      </div>
    );
  }
}
