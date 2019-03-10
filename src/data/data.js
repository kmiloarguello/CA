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
// Subprojects
import kaptamexico001 from "../img/work/projects/kaptamexico/kaptamexico0001.jpg";
import kaptamexico002 from "../img/work/projects/kaptamexico/kaptamexico0002.jpg";
import kaptamexico003 from "../img/work/projects/kaptamexico/kaptamexico0003.jpg";

import motoe4plus from "../img/work/moto-e4-plus.png";
import daftpunk from "../img/work/daftpunk.png";
import mostromedia from "../img/work/mostromedia2019.png";

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
        image: daftpunk,
        alt: "Musical web application of Daft punk's song",
        level: 2,
        detail: {
          title: "Harder Better",
          description: "Musical web application of Daft punk's song using Web Audio API and Vanilla Js",
          chips: ["VanilaJS", "Web Audio Api", "Daft Punk"],
          linkProject: "/harder-better",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: daftpunk,
              alt: "Descripcion de imagen"
            },
            {
              image: motoe4plus,
              alt: "Descripcion de imagen"
            },
            {
              image: mostromedia,
              alt: "Descripcion de imagen"
            },
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
          ],
        }
      },
      {
        image: motoe4plus,
        alt: "Tshirt",
        level: 3,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: mostromedia,
        alt:"Landing",
        level: 4,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: kapta01,
        alt:"Landing",
        level: 1,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: daftpunk,
        alt: "house",
        level: 2,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: daftpunk,
              alt: "Descripcion de imagen"
            },
            {
              image: motoe4plus,
              alt: "Descripcion de imagen"
            },
            {
              image: mostromedia,
              alt: "Descripcion de imagen"
            },
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
          ],
        }
      },
      {
        image: motoe4plus,
        alt: "Tshirt",
        level: 3,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: mostromedia,
        alt:"Landing",
        level: 4,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: kapta01,
        alt:"Landing",
        level: 1,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: daftpunk,
        alt: "house",
        level: 2,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: daftpunk,
              alt: "Descripcion de imagen"
            },
            {
              image: motoe4plus,
              alt: "Descripcion de imagen"
            },
            {
              image: mostromedia,
              alt: "Descripcion de imagen"
            },
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
          ],
        }
      },
      {
        image: motoe4plus,
        alt: "Tshirt",
        level: 3,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: kapta01,
        alt:"Landing",
        level: 1,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: kapta01,
        alt:"Landing",
        level: 1,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: kapta01,
        alt:"Landing",
        level: 1,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
        }
      },
      {
        image: kapta01,
        alt:"Landing",
        level: 1,
        detail: {
          title: "K@PTA México",
          description: "Website for K@PTA Company",
          images: [
            {
              image: kapta01,
              alt: "Descripcion de imagen"
            },
            {
              image: "",
              alt: ""
            },
            {
              image: "",
              alt: ""
            }
          ],
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
