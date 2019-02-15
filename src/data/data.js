import CALogo from "../img/logo-camilo-arguello.png";
import CAprofile from '../img/camilo-arguello-pf.jpg';
import landing from "../img/landing.jpg";
import tshirt from "../img/tshirt.jpg";
import house from "../img/house.jpg";
import kapta01 from "../img/work/kapta01.jpg";
import motoe4plus from "../img/work/moto-e4-plus.png";
import daftpunk from "../img/work/daftpunk.png";
import mostromedia from "../img/work/mostromedia2019.png"

const data = {
  Why: {
    img: CAprofile,
    alt: "Camilo Arguello"
  },
  How: {
    work: [
      {
        image: kapta01,
        alt:"Landing"
      },
      {
        image: motoe4plus,
        alt: "Tshirt"
      },
      {
        image: daftpunk,
        alt: "house"
      },
      {
        image: mostromedia,
        alt:"Landing"
      },
      {
        image: tshirt,
        alt: "Tshirt"
      },
      {
        image: house,
        alt: "house"
      },
      {
        image: landing,
        alt:"Landing"
      },
      {
        image: tshirt,
        alt: "Tshirt"
      },
      {
        image: house,
        alt: "house"
      }
    ]
  },
  What: {
    info: [
      {
        title: "01",
        subtitle: "I make beautiful things."
      },
      {
        title: "02",
        subtitle: "I develop websites, mobile apps."
      },
      {
        title: "03",
        subtitle: "Passionate with new ways of knowledge."
      },
      {
        title: "04",
        subtitle: "#untilTheEnd"
      }
    ]
  },
  PersonalInfo: {
    name: "Camilo Argüello",
    age: 24,
    email: "contact@camiloarguello.xyz",
    tel: 573208563431,
    logo: CALogo
  }
};

module.exports = {
  data
};
