/**
 * Personal Info
 */
import CALogo from "../img/logo-camilo-arguello.png";
import CALogoWhite from "../img/logo-camilo-arguello-white.png";
import CAprofile from '../img/camilo-arguello-pf.jpg';

/**
 * Projects
 */
import kapta01 from "../img/work/kapta01.jpg";
import kaptamexico001 from "../img/work/projects/kaptamexico/kaptamexico0001.jpg";
import kaptamexico002 from "../img/work/projects/kaptamexico/kaptamexico0002.jpg";
import kaptamexico003 from "../img/work/projects/kaptamexico/kaptamexico0003.jpg";

import daftpunk from "../img/work/daftpunk.png";
import daftpunk001 from "../img/work/projects/harderbetter/harderbetter0001.jpg";
import daftpunk002 from "../img/work/projects/harderbetter/harderbetter0002.jpg";
import daftpunk003 from "../img/work/projects/harderbetter/harderbetter0003.jpg";

import motoe4plus from "../img/work/moto-e4-plus.png";
import motoe4plus001 from "../img/work/projects/motoeplus/motoeplus0001.jpg";
import motoe4plus002 from "../img/work/projects/motoeplus/motoeplus0002.jpg";
import motoe4plus003 from "../img/work/projects/motoeplus/motoeplus0003.jpg";

import mostromedia from "../img/work/mostromedia2019.png";
import mostromedia001 from "../img/work/projects/mostromedia/mostromedia0001.jpg";
import mostromedia003 from "../img/work/projects/mostromedia/mostromedia0003.jpg";

import dashboard from "../img/work/kapta02.jpg";
import dashboard001 from "../img/work/projects/dashboard/kaptadashboard0001.jpg";

import escamiloarguello from "../img/work/projects/escamiloarguello/escamilo001.jpg";
import escamiloarguello002 from "../img/work/projects/escamiloarguello/escamilo002.gif";
import escamiloarguello003 from "../img/work/projects/escamiloarguello/escamilo003.gif";
import escamiloarguello004 from "../img/work/projects/escamiloarguello/escamilo004.jpg";
import escamiloarguello005 from "../img/work/projects/escamiloarguello/escamilo005.gif";

import tiendasjumbo from "../img/work/projects/tiendasjumbo/tiendasjumbo.jpg";
import tiendasjumbo001 from "../img/work/projects/tiendasjumbo/tiendasjumbo0001.jpg";
import tiendasjumbo002 from "../img/work/projects/tiendasjumbo/tiendasjumbo0002.jpg";
import tiendasjumbo003 from "../img/work/projects/tiendasjumbo/tiendasjumbo0003.jpg";
import tiendasjumbo004 from "../img/work/projects/tiendasjumbo/tiendasjumbo0004.jpg";

import kaptainteriortrims001 from "../img/work/projects/kaptainteriortrims/interiortrims001.jpg";
import kaptainteriortrims002 from "../img/work/projects/kaptainteriortrims/interiortrims002.jpg";

import propulsion from "../img/work/projects/propulsion/propulsion0001.jpg";
import propulsion002 from "../img/work/projects/propulsion/bmw-carmp4.mp4";

/**
 * Icons
 */
import iconScience from "../img/motivation/physics.png";
import iconComputer from "../img/motivation/computer.png";
import iconFilm from "../img/motivation/film.png";
import iconEducation from "../img/motivation/education.png";
import iconCosmos from "../img/motivation/cosmos.png";
import iconGithub from "../img/social/github.svg";
import iconLinkedin from "../img/social/linkedin.svg";

const data = {
  Header: {
    menu: [
      {title: "Home", href:"#home"}, 
      {title: "Motivation", href:"#motivation"},
      {title: "Work", href:"#work"},
      {title: "Contact", href:"#contact"}
    ]
  },
  Why: {
    title: "Home",
    img: CAprofile,
    section1: `Science and technology`,
    section2: `I'm a creative and ingenious person, who uses the technology to bring life beaty and powerfull ideas.`,
    section3: `I'm currently available for full-time job, so I you want to work
    with me or contract me, just put in contact with me and I can
    start anytime.`
  },
  // TODO: Crear la info de todos los proyectos
  What: {
    title: "Work",
    work: [
      
      {
        image: daftpunk,
        alt: "Musical web application of Daft punk's song",
        level: 2,
        detail: {
          title: "Harder Better",
          description: "Musical web application of Daft punk's song using Web Audio API and Vanilla Js.",
          chips: ["VanilaJS", "Web Audio Api", "Daft Punk"],
          linkProject: "/harder-better",
          linkRepository: "https://github.com/kmiloarguello/myBirthday24",
          images: [
            {
              image: daftpunk001,
              alt: "<b>All the development</b> was inspired on Daft Punk's music."
            },
            {
              image: daftpunk002,
              alt: "The UI allows to the user to <b>play using the keyboard</b>."
            },
            {
              image: daftpunk003,
              alt: "Each key trigger one song of the harder better stronger song."
            },
            {
              image: daftpunk,
              alt: "Contains a section when the sounds are preloading."
            },
          ],
        }
      },
      {
        image: motoe4plus002,
        alt: "Layout of new Moto e4 plus website.",
        level: 1,
        detail: {
          title: "Moto e4 Plus",
          description: "Layout of new website of Moto e4 Plus, which cover the main characteristics in estetics, design and ergonomy. Also its functionalities with the camera, battery and touch ID.",
          chips: ["ReactJs", "Jest", "Webpack", "PostCSS"],
          linkProject: "/moto-e4-plus",
          linkRepository: "https://github.com/kmiloarguello/moto-e4-plus",
          images: [
            {
              image: motoe4plus001,
              alt: "The development was mobile first using Css grid."
            },
            {
              image: motoe4plus002,
              alt: "UI adaptable to each device."
            },
            {
              image: motoe4plus003,
              alt: "No-library slider with transitions and click events."
            },
            {
              image: motoe4plus,
              alt: ""
            }
          ],
        }
      },


      {
        image: mostromedia001,
        alt:"Website of Mostro Media",
        level: 1,
        detail: {
          title: "Mostro Media",
          description: "Website for Mostro Media Company",
          chips: ["Wordpress"],
          linkProject: "https://mostromedia.com",
          images: [
            {
              image: mostromedia001,
              alt: "Mostro represents <b>innovation and creativity</b>."
            },
            {
              image: mostromedia,
              alt: "The whole site was a proof of a <b>high experience design</b>."
            },
            {
              image: mostromedia003,
              alt: "Mostro <b>boots</b> many companies in the digital world."
            }
          ],
        }
      },

      {
        image: tiendasjumbo002,
        alt: "Tiendas Jumbo Colombia",
        level: 1,
        detail: {
          title: "Tiendas Jumbo Colombia",
          description: "Working on the maintain and development of new features of a 10000 daily marketplace visitors.",
          chips: ["Sass", "Javascript", "Vtex"],
          linkProject: "https://www.tiendasjumbo.co",
          images: [
            {
              image: tiendasjumbo001,
              alt: ""
            },
            {
              image: tiendasjumbo002,
              alt: ""
            },
            {
              image: tiendasjumbo003,
              alt: ""
            },
            {
              image: tiendasjumbo004,
              alt: ""
            },
            {
              image: tiendasjumbo,
              alt: ""
            }
          ],
        }
      },


      {
        image: escamiloarguello005,
        alt: "My last portfolio",
        level: 1,
        detail: {
          title: "My last portfolio",
          description: "It was my first stable version of my portfolio. I was involved in a musical world, so it was inspired in different artists.",
          chips: ["Jquery", "Css", "Javascript"],
          linkProject: "/harder-better",
          linkRepository: "https://github.com/kmiloarguello/myBirthday24",
          images: [
            {
              image: escamiloarguello005,
              alt: "I was inspired on <a href='https://jackuofficial.com' target='_blank'>Jack Ü</a> animations."
            },
            {
              image: escamiloarguello,
              alt: "The colors were inspired on <a href='https://coldplay.com' target='_blank'>Coldplay</a> albums."
            },
            {
              image: escamiloarguello004,
              alt: "My skills were only focused on 3D modeling and animation, nevertheless today I focused on coding."
            },
            {
              image: escamiloarguello003,
              alt: "Gifs for title section animation."
            },
            {
              image: escamiloarguello002,
              alt: "Gifs for title section animation."
            },
          ],
        }
      },

      
      {
        image: kapta01,
        alt:"Website for K@PTA Mexico",
        level: 1,
        detail: {
          title: "K@PTA Mexico",
          description: "Website for K@PTA Company In Mexico. The goal is to create a beauty but informative site for the new marketplace in Mexico.",
          chips: ["Reactjs", "node", "Html"],
          linkProject: "https://kaptamexico.biz",
          images: [
            {
              image: kaptamexico001,
              alt: "K@PTA reflects in desktop site as a <b>modern business</b>."
            },
            {
              image: kaptamexico002,
              alt: "Information about the company in mobile"
            },
            {
              image: kaptamexico003,
              alt: "Use the corporate identity manual to reflects the company in a website"
            }
          ],
        }
      },

      {
        image: kaptainteriortrims001,
        alt: "Application for BMW Training course",
        level: 2,
        detail: {
          title: "Interior Trims - BMW",
          description: "It was my first stable version of my portfolio. I was involved in a musical world, so it was inspired in different artists.",
          chips: ["Jquery", "Css", "Javascript"],
          linkProject: "/harder-better",
          linkRepository: "https://github.com/kmiloarguello/myBirthday24",
          images: [
            {
              image: kaptainteriortrims001,
              alt: "I was inspired on <a href='https://jackuofficial.com' target='_blank'>Jack Ü</a> animations."
            },
            {
              image: kaptainteriortrims002,
              alt: "The colors were inspired on <a href='https://coldplay.com' target='_blank'>Coldplay</a> albums."
            }
          ]
        }
      },

      {
        image: dashboard,
        alt: "Web Application for K@PTA",
        level: 1,
        detail: {
          title: "Dashboard of Results K@PTA",
          description: "Web Application for K@PTA",
          chips: ["NodeJS", "Express", "MongoDB"],
          images: [
            {
              image: dashboard001,
              alt: "A modern platform to manage the <b>internal evaluation results</b>."
            },
            {
              image: dashboard,
              alt: "Use the <b>ClassMarker API</b> to handle the results and to create graphs and tables."
            }
          ],
        }
      },
      
      
      {
        image: propulsion,
        alt: "My last portfolio",
        level: 1,
        detail: {
          title: "Propulsion",
          description: "It was my first stable version of my portfolio. I was involved in a musical world, so it was inspired in different artists.",
          chips: ["Jquery", "Css", "Javascript"],
          linkProject: "/harder-better",
          linkRepository: "https://github.com/kmiloarguello/myBirthday24",
          images: [
            {
              image: propulsion,
              alt: "I was inspired on <a href='https://jackuofficial.com' target='_blank'>Jack Ü</a> animations."
            }
          ],
          video: propulsion002
        }
      }
    ]
  },
  How: {
    title: "Motivations",
    info: [
      {
        icon: iconScience,
        title: "Science",
        subtitle: "Learning everyday about the knowledge of humanity."
      },
      {
        icon: iconComputer,
        title: "Coding",
        subtitle: "I write code which create solutions for real life problems."
      },
      {
        icon: iconFilm,
        title: "VFX",
        subtitle: "One of my dreams is to become into a visual-artist."
      },
      {
        icon: iconEducation,
        title: "Teaching",
        subtitle: "Professor by passion."
      },
      {
        icon: iconCosmos,
        title: "Cosmos",
        subtitle: "The curiosity about new ways to understand our universe."
      }
    ]
  },
  PersonalInfo: {
    name: "Camilo Argüello",
    job: "Developer and future scientist",
    age: 24,
    email: "camilo.arguello.rincon@gmail.xyz",
    tel: 573208563431,
    logo: CALogo,
    logoWhite: CALogoWhite,
    cv: "https://camiloarguello.xyz/cv/cv_camiloarguello.pdf",
    linkedin : "https://www.linkedin.com/in/kmiloarguello",
    github: "https://github.com/kmiloarguello"
  },
  Legal: {
    legal: `I'm currently available for full-time job, so I you want to work
    with me or contract me, just put in contact with me and I can
    start anytime.`
  },
  AdditionalIcons: {
    iconGithub,
    iconLinkedin
  }
};

module.exports = { data };
