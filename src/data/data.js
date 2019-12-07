/**
 * Personal Info
 */
import CALogo from "../img/logo-camilo-arguello.png";
import CALogoWhite from "../img/logo-camilo-arguello-white.png";
//import CAprofile from '../img/camilo-arguello-pf.jpg';
import CAprofile from "../img/Juli-et-moi.jpg";

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

import descubriendobogicon from "../img/work/projects/descubriendobog/pieza2.png"
import descubriendobog1 from "../img/work/projects/descubriendobog/googleplay-1.jpg"
import descubriendobog2 from "../img/work/projects/descubriendobog/googleplay-2.jpg"
import descubriendobog3 from "../img/work/projects/descubriendobog/googleplay-3.jpg"
import descubriendobog4 from "../img/work/projects/descubriendobog/googleplay-4.jpg"

import tiendasjumbo from "../img/work/projects/tiendasjumbo/tiendasjumbo.jpg";
import tiendasjumbo001 from "../img/work/projects/tiendasjumbo/tiendasjumbo0001.jpg";
import tiendasjumbo002 from "../img/work/projects/tiendasjumbo/tiendasjumbo0002.jpg";
import tiendasjumbo003 from "../img/work/projects/tiendasjumbo/tiendasjumbo0003.jpg";
import tiendasjumbo004 from "../img/work/projects/tiendasjumbo/tiendasjumbo0004.jpg";
import tiendasjumbo007 from "../img/work/projects/tiendasjumbo/tiendasjumbo0007.jpg";
import tiendasjumbo008 from "../img/work/projects/tiendasjumbo/tiendasjumbo0008.jpg";

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


/**
 * Deezer Images
 */

import iconBestSong from "../img/deezer/myDeezerInstaCard-track.png"
import iconBestGroup from "../img/deezer/myDeezerInstaCard-artist.png"


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
    section2: `I'm a creative and ingenious person, who uses the technology to bring life to beauty and powerful ideas using algorithms, computational design, software development and multimedia research.`,
    section3: `I'm currently available for a full-time job, so If you want to work
    with me, just put in contact with me and I can
    start anytime.`
  },
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
          description: "Layout of new website of Moto e4 Plus, which cover the main characteristics in aesthetics, design and ergonomic. Also its functionalities with the camera, battery and touch ID.",
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
              alt: "All the content and images used were only for non-commercial purposes and they are property of Motorola."
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
          description: "Working on the maintain and development of new features of a 10000 daily marketplace visitors in Colombia and over the world.",
          chips: ["Javascript", "Sass", "Vtex" , "ES6"],
          linkProject: "https://www.tiendasjumbo.co",
          images: [
            {
              image: tiendasjumbo001,
              alt: "This is the new home of the store."
            },
            {
              image: tiendasjumbo007,
              alt: "We developed the structure for services such as \"Jumbo al auto\" and \"Recogida en Tienda\" with the whole user experience including in Checkout v5. This has been my favorite development ever, due to the complexity and multiple UX flows. I'm proud of this work."
            },
            {
              image: tiendasjumbo008,
              alt: "The user now has the option to choose between pickup it's products or waiting for them in its house."
            },
            {
              image: tiendasjumbo002,
              alt: "Developed in association with Blacksip, Fizzmod and Vtex developers."
            },
            {
              image: tiendasjumbo003,
              alt: "I've worked on different landings such the special for Samsung S10."
            },
            {
              image: tiendasjumbo004,
              alt: "Each development is mobile first."
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
          description: "Website for Mostro Media company. The goal was to show the company as modern for the new customers.",
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
        image: escamiloarguello005,
        alt: "My last portfolio",
        level: 1,
        detail: {
          title: "My last portfolio",
          description: "It was my first stable version of my portfolio. I was involved in a musical world, so it was inspired in different artists.",
          chips: ["Jquery", "Css", "Javascript"],
          linkProject: "https://es.camiloarguello.xyz",
          linkRepository: "https://github.com/kmiloarguello/kmiloarguello.github.io/tree/master/spanish",
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
        image: descubriendobogicon,
        alt: "Descubriendo Bogotá videogame",
        level: 2,
        detail: {
          title: "Descubriendo Bogotá",
          description: "Videogame developed for the IDPC Bogotá - Colombia.",
          chips: ["Videogame", "Unity", "C#","Firebase","AR"],
          linkProject: "https://play.google.com/store/apps/details?id=com.mostromedia.descubriendobogota",
          linkRepository: "https://github.com/MostroMedia/DescubriendoBogota",
          images: [
            {
              image: descubriendobog1,
              alt: "I was a head developer on the project. My role was to stablish the game structure, design the logic and code in C#."
            },
            {
              image: descubriendobog2,
              alt: "We created a complete stack of animations for each character using Unity and Photoshop."
            },
            {
              image: descubriendobog3,
              alt: "The design and game rules were defined to create a good user experience."
            },
            {
              image: descubriendobog4,
              alt: "For the interaction and Augmented Reality. We used the powerful of Vuforia engine for tracking and 3D Handle."
            }
          ],
        }
      },

      
      {
        image: kapta01,
        alt:"Website for K@PTA Mexico",
        level: 1,
        detail: {
          title: "K@PTA Mexico",
          description: "Website for K@PTA company In Mexico. The goal is to create a beauty but informative site for the new marketplace in Mexico.",
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
          description: "It was an application to one company that I've worked for. The objective was to simulate an interior environment and select key points with specific information for technician people.",
          chips: ["React", "A-frame"],
          images: [
            {
              image: kaptainteriortrims001,
              alt: "Interior Trims - BMW"
            },
            {
              image: kaptainteriortrims002,
              alt: "All the content is property of K@PTA."
            }
          ]
        }
      },

      {
        image: dashboard,
        alt: "Web Application for K@PTA",
        level: 1,
        detail: {
          title: "Dashboard of Results K@PTA. The goal was to create a platform to manage the test results and learning progress curve in BMW and KAPTA Technologies.",
          description: "Web Application for K@PTA",
          chips: ["NodeJS", "Express", "MongoDB", "Server-side-rendering"],
          images: [
            {
              image: dashboard001,
              alt: "A modern platform to manage the <b>internal evaluation results</b>."
            },
            {
              image: dashboard,
              alt: "It uses the <b>ClassMarker API</b> to handle the results and to create graphs and tables."
            }
          ],
        }
      },
      
      
      {
        image: propulsion,
        alt: "BMW Technician application",
        level: 1,
        detail: {
          title: "Powertrain",
          description: "Mobile/desktop/Web application for BMW. The development was at my previous company K@PTA. The goal was to simulate how different scenarios and engine configurations affects the acceleration in vehicles.",
          chips: ["Cordova", "React", "Electron"],
          images: [
            {
              image: propulsion,
              alt: "All the content is property of K@PTA."
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
        subtitle: "One of my dreams is to become a visual-artist."
      },
      {
        icon: iconEducation,
        title: "Teaching",
        subtitle: "I am professor by passion."
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
    age: 26,
    email: "camilo.arguello.rincon@gmail.xyz",
    tel: 10010101,
    logo: CALogo,
    logoWhite: CALogoWhite,
    cv: "https://camiloarguello.xyz/cv/cv_camiloarguello.pdf",
    linkedin : "https://www.linkedin.com/in/kmiloarguello",
    github: "https://github.com/kmiloarguello"
  },
  Legal: {
    legal: `I'm currently available for a full-time job, so If you want to work
    with me, just put in contact with me and I can
    start anytime.`
  },
  Deezer: {
    title: "Here is my favorite music of 2019",
    favorites:[
      
      {
        title:"The XX",
        image: iconBestGroup,
        description: "The mixing and the songs that they have created are amazing. Each song is a piece of art. Their songs represent the glamour of living in Paris. this is the main reason why my favorite artist for 2019 is The XX."
      },
      {
        title:"On Hold - The XX",
        image: iconBestSong,
        description:"Imagine living in Paris with the fashion, the culture, the beauty, passion, and love. It's the perfection combined into a song. This is my favorite song for 2019."
      }
    ] 
  },
  AdditionalIcons: {
    iconGithub,
    iconLinkedin
  },
  ColorPalettes: [
    {
      firstColor: "#B724FF",
      secondColor: "#2AF598",
      thirdColor: "#38e1a2",
      fourthColor: "#000"
    },
    {
      firstColor: "#08f7fe",
      secondColor: "#09fbd3",
      thirdColor: "#f353bb",
      fourthColor: "#f5d300"
    },
    {
      firstColor: "#ffacfc",
      secondColor: "#f148fb",
      thirdColor: "#7122fa",
      fourthColor: "#560a86"
    },
    {
      firstColor: "#75d5fd",
      secondColor: "#b76cfd",
      thirdColor: "#ff2281",
      fourthColor: "#011ffd"
    },
    {
      firstColor: "#00feca",
      secondColor: "#fdf200",
      thirdColor: "#ff85ea",
      fourthColor: "#fb61f8"
    },
    {
      firstColor: "#ffd300",
      secondColor: "#de38c8",
      thirdColor: "#652ec7",
      fourthColor: "#33135c"
    },
    {
      firstColor: "#3b27ba",
      secondColor: "#e847ae",
      thirdColor: "#13ca91",
      fourthColor: "#ff9472"
    },
    {
      firstColor: "#ffdef3",
      secondColor: "#ff61be",
      thirdColor: "#3b55ce",
      fourthColor: "#35212a"
    },
    {
      firstColor: "#fdd400",
      secondColor: "#fdb232",
      thirdColor: "#02b8a2",
      fourthColor: "#01535f"
    },
    {
      firstColor: "#fec763",
      secondColor: "#ea55b1",
      thirdColor: "#a992fa",
      fourthColor: "#00207f"
    },
    {
      firstColor: "#79fffe",
      secondColor: "#fea0fe",
      thirdColor: "#ff8b8b",
      fourthColor: "#f85125"
    },
    {
      firstColor: "#ce96fb",
      secondColor: "#ff8fcf",
      thirdColor: "#00c2ba",
      fourthColor: "#037a90"
    },

  ]
};

module.exports = { data };
