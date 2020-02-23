
import {
    CALogo,
    CALogoWhite,
    CAprofile,
    kapta01,
    kaptamexico001,
    kaptamexico002,
    kaptamexico003,
    daftpunk,
    daftpunk001,
    daftpunk002,
    daftpunk003,
    motoe4plus,
    motoe4plus001,
    motoe4plus002,
    motoe4plus003,
    mostromedia,
    mostromedia001,
    mostromedia003,
    dashboard,
    dashboard001,
    escamiloarguello,
    escamiloarguello002,
    escamiloarguello003,
    escamiloarguello004,
    escamiloarguello005,
    descubriendobogicon,
    descubriendobog1,
    descubriendobog2,
    descubriendobog3,
    descubriendobog4,
    tiendasjumbo001,
    tiendasjumbo002,
    tiendasjumbo003,
    tiendasjumbo004,
    tiendasjumbo007,
    tiendasjumbo008,
    kaptainteriortrims001,
    kaptainteriortrims002,
    propulsion,
    propulsion002,
    iconScience,
    iconComputer,
    iconFilm,
    iconEducation,
    iconCosmos,
    iconGithub,
    iconLinkedin,
    iconBestSong,
    iconBestGroup,
    hci2016,
    boulangerie001,
    boulangerie002,
    boulangerie003
  } from "./images.js";
  import {
    interiorTrims
  } from "./videos.js";
  
  import colorPalettesFile from "../colors/colors-palettes.js";

  
  const data_fr = {
    Header: {
      menu: [
        {title: "Accueil", href:"#home"}, 
        {title: "Motivation", href:"#motivation"},
        {title: "Travail", href:"#work"},
        {title: "Contactez moi", href:"#contact"}
      ]
    },
    Why: {
      title: "Accueil",
      img: CAprofile,
      section1: `Le science et la technologie`,
      section2: `Je suis une personne creative et ingeniouse. J'utilize le technologie pour donner ou create beau et incroyable idées. Pour ca J'utilize l'algorithmic, la conception informatique, le programmation et le recherche.`,
      section3: `Je suis entrain de obtenir ma diploma d'ingenieur au ESIEE Paris, mais si vous voulez sil'vous plaît contactez moi.`,
      btnMail: "Contactez moi",
      btnScrollToWork: "Regarder un peu plus",
      txtMemories: "Souvenirs d'un moment plus beau."
    },
    What: {
      title: "Travail",
      work: [

        {
          image: boulangerie001,
          alt: "Bakery store in Paris",
          level: 3,
          detail: {
            title: "La boulangerie",
            description: "Bakery store in Paris",
            chips: ["Angular", "SpringBoot", "MongoDB","Personal Project"],
            linkProject: "https://boulangerie-front.herokuapp.com",
            linkRepository: "https://github.com/kmiloarguello/boulangerie-back.git",
            images: [
              {
                image: boulangerie001,
                alt: "Clean development using MVC architecture."
              },
              {
                image: boulangerie002,
                alt: "Database using MongoDB."
              },
              {
                image: boulangerie003,
                alt: "UI inspired on the style Pâtisserie Parissien."
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
                alt: "Each key triggers one song of the harder better stronger song."
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
            description: "The layout of the new website of Moto e4 Plus, which cover the main characteristics in aesthetics, design and ergonomic. Also its functionalities with the camera, battery, and touch ID.",
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
            description: "Development of new features concerning to 10000 daily marketplace visitors in Colombia and over the world..",
            chips: ["Javascript", "Sass", "Vtex" , "ES6"],
            linkProject: "https://www.tiendasjumbo.co",
            images: [
              {
                image: tiendasjumbo001,
                alt: "This is how the new home of the store looks like."
              },
              {
                image: tiendasjumbo007,
                alt: "We developed the structure for services such as \"Jumbo al auto\" and \"Recogida en Tienda\" with the whole user experience including in Checkout v5. This has been my favorite development ever, due to the complexity and multiple UX flows. I'm proud of this work."
              },
              {
                image: tiendasjumbo008,
                alt: "The user now has the option to choose between pickup it's products or waiting for them at home."
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
          image: kaptainteriortrims001,
          alt: "Application for BMW Training course",
          level: 2,
          isAVideoThumb: true,
        videoSource: interiorTrims,
          detail: {
            title: "Interior Trims - BMW",
            description: "It was an application to one company that I've worked for. The objective was to simulate an interior environment and select a set of key points with specific information for technician people.",
            chips: ["React", "A-frame"],
            images: [
              {
                image: kaptainteriortrims001,
                alt: "Interior Trims - BMW."
              },
              {
                image: kaptainteriortrims002,
                alt: "All the content is property of K@PTA."
              }
            ]
          }
        },
  
  
        {
          image: mostromedia001,
          alt:"Website of Mostro Media",
          level: 1,
          detail: {
            title: "Mostro Media",
            description: "Website for Mostro Media company. The goal was to show the company as modern for new customers.",
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
            description: "It was the first stable version of my portfolio. I was involved in a musical world, so it was inspired by different artists.",
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
                alt: "I was the head developer on the project. My role was to establish the game structure, design the logic and code in C#."
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
                alt: "For the interaction and Augmented Reality. We used the power of Vuforia engine for tracking and 3D Handle."
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
            description: "Website for K@PTA company in Mexico. The goal is to create a beauty but informative site for the new marketplace in Mexico.",
            chips: ["Reactjs", "node", "Html"],
            linkProject: "https://kaptamexico.biz",
            images: [
              {
                image: kaptamexico001,
                alt: "K@PTA reflects in desktop site as a <b>modern business</b>."
              },
              {
                image: kaptamexico002,
                alt: "Information about the company on mobile devices."
              },
              {
                image: kaptamexico003,
                alt: "Use the corporate identity manual to reflects the company in a website."
              }
            ],
          }
        },
  
       
        {
          image: dashboard,
          alt: "Web Application for K@PTA",
          level: 1,
          detail: {
            title: "Web Application for K@PTA",
            description: "Dashboard of Results K@PTA. The goal was to create a platform to manage the test results and learning progress curve for BMW and KAPTA teams.",
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
      ],
      btnLoadMoreProjects: "En savoir plus"
    },
    How: {
      title: "Motivations",
      info: [
        {
          icon: iconScience,
          title: "Science",
          subtitle: "Je voudrai aprendre chache jour à propos de les connaissances de l'humanité."
        },
        {
          icon: iconComputer,
          title: "Coding",
          subtitle: "Je fait le code pour créer des solutions à problèmes réels."
        },
        {
          icon: iconFilm,
          title: "VFX",
          subtitle: "An jour, je serai un artiste visuel."
        },
        {
          icon: iconEducation,
          title: "Teaching",
          subtitle: "Je suis prof par passion."
        },
        {
          icon: iconCosmos,
          title: "Cosmos",
          subtitle: "J'adore l'universe et notre vie dans lui."
        }
      ]
    },
    PersonalInfo: {
      name: "Camilo Argüello",
      job: "Engineer informatique",
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
      legal: `Je suis entrain de obtenir ma diploma d'ingenieur au ESIEE Paris, mais si vous voulez sil-vous plaît contactez moi.`,
      contact: "Contactez moi",
      siteMap: "Le cart du site",
      curriculum: "Mon CV"
    },
    Research: {
      title: "Research",
      papers:[
        {
          title:"Exploring rhytmic patterns by video analysis",
          image: hci2016,
          href: 'https://link.springer.com/chapter/10.1007%2F978-3-319-40247-5_13',
          description: `Les traitements des troubles de la coordination peuvent avoir de nombreux avantages en utilisant des technologies modernes qui facilitent les protocoles de réadaptation. Dans cet article, nous présentons une méthode efficace pour extraire des modèles de mouvement à partir de séquences vidéo, puis fournir des stimuli acoustiques générés à partir de l'analyse de mouvement. Cette méthode explore différents modèles de mouvement guidés par des concepts tels que: détection et analyse de mouvement, analyse en composantes principales (ACP) et analyse de fréquence.`
        }
      ]  
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
    Language: {
      language: "Language",
      english: "Anglais",
      french: "Francais",
      spanish: "Espagnol"
    },
    Loading: {
      error: "Je suis désolé. Il'y a quelques problèmes.",
      timeout: "Le chargement de ce contenu prend beaucoup de temps...",
      "retry": "Réessayer"
    },
    AdditionalIcons: {
      iconGithub,
      iconLinkedin
    },
    ColorPalettes: colorPalettesFile
  };
  
  module.exports = { data_fr };
  