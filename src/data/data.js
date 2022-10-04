import {
  CALogo,
  CALogoWhite,
  CAprofile,
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
  confflux_001,
  confflux_002,
  confflux_003,
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
  meandmagdalena,
  miraclemadeon,
  hci2016,
  boulangerie001,
  boulangerie002,
  boulangerie003,
  esiee_s1_ca,
  esiee_s3_ml,
  ac_vincent,
  graphs_regions,
  analyse_faciale,
  iasi_satellite_stage,
  ozone_processus
} from "./images.js";

import {
  interiorTrims,
  confflux_api_001,
  confflux_api_002
} from "./videos.js";

import colorPalettesFile from "../colors/colors-palettes.js";

const data = {
  Header: {
    menu: [
      { title: "Home", href: "#home" },
      { title: "Motivation", href: "#motivation" },
      { title: "Research", href:"#research"},
      { title: "Work", href: "#work" },
      { title: "Contact", href: "#contact" },
    ],
  },
  Why: {
    title: "Home",
    img: CAprofile,
    section1: `Science Technology Engineering and Maths`,
    section2: `I'm a creative and inquisitive person, who uses the technology to create beauty and powerful ideas using algorithms, computational design, software development and multimedia research.
              I have finished the master Image processing and Computer Vision at Sorbonne Univeristé. \n Now, I am studying physics!`,
    section3: `I'm currently available for an job in the domain of image processing/computer vision/Web development, so If you want to work
    with me, just put in contact with me and I can
    start anytime.`,
    btnMail: "Contact me",
    btnScrollToWork: "Find out more",
    txtMemories: "Memories from a happier time.",
  },
  What: {
    title: "Work",
    work: [
      {
        image: confflux_003,
        alt: "Confflux API",
        level: 2,
        detail: {
          title: "Confflux API",
          description: "Own API for Confflux.",
          chips: ["NodeJS", "ExpressJS", "MongoDB"],
          linkRepository: "https://gitlab.com/conflux-solutions/web-backend",
          images: [
            {
              image: confflux_003,
              alt: "Find a free crowded place."
            },
            {
              image: confflux_002,
              alt: "Development made with Mongo and NodeJS"
            },
           {
              image: confflux_001,
              alt: "We are commitment with help people and establishment on this challenging period."
            }
          ],
          videos: [
            confflux_api_001
          ]
        }
      },
      {
        image: boulangerie001,
        alt: "Bakery store in Paris",
        level: 3,
        detail: {
          title: "La boulangerie",
          description: "Bakery store in Paris",
          chips: ["Angular", "SpringBoot", "MongoDB", "Personal Project"],
          linkProject: "https://boulangerie-front.herokuapp.com",
          linkRepository:
            "https://github.com/kmiloarguello/boulangerie-back.git",
          images: [
            {
              image: boulangerie001,
              alt: "Clean development using MVC architecture.",
            },
            {
              image: boulangerie002,
              alt: "MongoDB database.",
            },
            {
              image: boulangerie003,
              alt: 'UI inspired on the style "Pâtisserie Parissien".',
            },
          ],
        },
      },

      {
        image: daftpunk,
        alt: "Musical web application of Daft punk's song",
        level: 2,
        detail: {
          title: "Harder Better",
          description:
            "Musical web application of Daft punk's song using Web Audio API and Vanilla Js.",
          chips: ["VanilaJS", "Web Audio Api", "Daft Punk"],
          linkProject: "/harder-better",
          linkRepository: "https://github.com/kmiloarguello/myBirthday24",
          images: [
            {
              image: daftpunk001,
              alt:
                "<b>All the development</b> was inspired on Daft Punk's music.",
            },
            {
              image: daftpunk002,
              alt:
                "The UI allows to the user to <b>play using the keyboard</b>.",
            },
            {
              image: daftpunk003,
              alt:
                "Each key triggers one song of the harder better stronger song.",
            },
            {
              image: daftpunk,
              alt: "Contains a section when the sounds are preloading.",
            },
          ],
        },
      },
      {
        image: motoe4plus002,
        alt: "Layout of new Moto e4 plus website.",
        level: 1,
        detail: {
          title: "Moto e4 Plus",
          description:
            "The layout of the new website of Moto e4 Plus, which cover the main characteristics in aesthetics, design and ergonomic. Also its functionalities with the camera, battery, and touch ID.",
          chips: ["ReactJs", "Jest", "Webpack", "PostCSS"],
          linkProject: "/moto-e4-plus",
          linkRepository: "https://github.com/kmiloarguello/moto-e4-plus",
          images: [
            {
              image: motoe4plus001,
              alt: "The development was mobile first using Css grid.",
            },
            {
              image: motoe4plus002,
              alt: "UI adaptable to each device.",
            },
            {
              image: motoe4plus003,
              alt: "No-library slider with transitions and click events.",
            },
            {
              image: motoe4plus,
              alt:
                "All the content and images used were only for non-commercial purposes and they are property of Motorola.",
            },
          ],
        },
      },

      {
        image: tiendasjumbo002,
        alt: "Tiendas Jumbo Colombia",
        level: 1,
        detail: {
          title: "Tiendas Jumbo Colombia",
          description:
            "Development of new features concerning to 10000 daily marketplace visitors in Colombia and over the world..",
          chips: ["Javascript", "Sass", "Vtex", "ES6"],
          linkProject: "https://www.tiendasjumbo.co",
          images: [
            {
              image: tiendasjumbo001,
              alt: "This is how the new home of the store looks like.",
            },
            {
              image: tiendasjumbo007,
              alt:
                'We developed the structure for services such as "Jumbo al auto" and "Recogida en Tienda" with the whole user experience including in Checkout v5. This has been my favorite development ever, due to the complexity and multiple UX flows. I\'m proud of this work.',
            },
            {
              image: tiendasjumbo008,
              alt:
                "The user now has the option to choose between pickup it's products or waiting for them at home.",
            },
            {
              image: tiendasjumbo002,
              alt:
                "Developed in association with Blacksip, Fizzmod and Vtex developers.",
            },
            {
              image: tiendasjumbo003,
              alt:
                "I've worked on different landings such the special for Samsung S10.",
            },
            {
              image: tiendasjumbo004,
              alt: "Each development is mobile first.",
            },
          ],
        },
      },

      {
        image: kaptainteriortrims001,
        alt: "Application for BMW Training course",
        level: 2,
        isAVideoThumb: true,
        videoSource: interiorTrims,
        detail: {
          title: "Interior Trims - BMW",
          description:
            "It was an application to one company that I've worked for. The objective was to simulate an interior environment and select a set of key points with specific information for technician people.",
          chips: ["React", "A-frame"],
          images: [
            {
              image: kaptainteriortrims001,
              alt: "Interior Trims - BMW.",
            },
            {
              image: kaptainteriortrims002,
              alt: "All the content is property of K@PTA.",
            },
          ],
        },
      },

      {
        image: mostromedia001,
        alt: "Website of Mostro Media",
        level: 1,
        detail: {
          title: "Mostro Media",
          description:
            "Website for Mostro Media company. The goal was to show the company as modern for new customers.",
          chips: ["Wordpress"],
          linkProject: "https://mostromedia.com",
          images: [
            {
              image: mostromedia001,
              alt: "Mostro represents <b>innovation and creativity</b>.",
            },
            {
              image: mostromedia,
              alt:
                "The whole site was a proof of a <b>high experience design</b>.",
            },
            {
              image: mostromedia003,
              alt: "Mostro <b>boots</b> many companies in the digital world.",
            },
          ],
        },
      },

      {
        image: escamiloarguello005,
        alt: "My last portfolio",
        level: 1,
        detail: {
          title: "My last portfolio",
          description:
            "It was the first stable version of my portfolio. I was involved in a musical world, so it was inspired by different artists.",
          chips: ["Jquery", "Css", "Javascript"],
          linkProject: "https://es.camiloarguello.xyz",
          linkRepository:
            "https://github.com/kmiloarguello/kmiloarguello.github.io/tree/master/spanish",
          images: [
            {
              image: escamiloarguello005,
              alt:
                "I was inspired on <a href='https://jackuofficial.com' target='_blank'>Jack Ü</a> animations.",
            },
            {
              image: escamiloarguello,
              alt:
                "The colors were inspired on <a href='https://coldplay.com' target='_blank'>Coldplay</a> albums.",
            },
            {
              image: escamiloarguello004,
              alt:
                "My skills were only focused on 3D modeling and animation, nevertheless today I focused on coding.",
            },
            {
              image: escamiloarguello003,
              alt: "Gifs for title section animation.",
            },
            {
              image: escamiloarguello002,
              alt: "Gifs for title section animation.",
            },
          ],
        },
      },

      {
        image: descubriendobogicon,
        alt: "Descubriendo Bogotá videogame",
        level: 2,
        detail: {
          title: "Descubriendo Bogotá",
          description: "Videogame developed for the IDPC Bogotá - Colombia.",
          chips: ["Videogame", "Unity", "C#", "Firebase", "AR"],
          linkProject:
            "https://play.google.com/store/apps/details?id=com.mostromedia.descubriendobogota",
          linkRepository: "https://github.com/MostroMedia/DescubriendoBogota",
          images: [
            {
              image: descubriendobog1,
              alt:
                "I was the head developer on the project. My role was to establish the game structure, design the logic and code in C#.",
            },
            {
              image: descubriendobog2,
              alt:
                "We created a complete stack of animations for each character using Unity and Photoshop.",
            },
            {
              image: descubriendobog3,
              alt:
                "The design and game rules were defined to create a good user experience.",
            },
            {
              image: descubriendobog4,
              alt:
                "For the interaction and Augmented Reality. We used the power of Vuforia engine for tracking and 3D Handle.",
            },
          ],
        },
      },

      {
        image: propulsion,
        alt: "BMW Technician application",
        level: 1,
        detail: {
          title: "Powertrain",
          description:
            "Mobile/desktop/Web application for BMW. The development was at my previous company K@PTA. The goal was to simulate how different scenarios and engine configurations affects the acceleration in vehicles.",
          chips: ["Cordova", "React", "Electron"],
          images: [
            {
              image: propulsion,
              alt: "All the content is property of K@PTA.",
            },
          ],
          video: propulsion002,
        },
      },
    ],
    btnLoadMoreProjects: "Load more",
  },
  Research: {
    title: "Research",
    papers: [
      {
        title: "Ozone: Composition and variability in the atmosphere",
        image: ozone_processus,
        description: `
        The objective of this project is to model the possible origins of the increase in the concentration of tropospheric ozone, as well as to validate possible reactions increase the ozone destruction in the stratosphere.
        Our model considers concentrations linked to the oxidations of VOC gases (CO, SOx, CFCs) with NOx gases and peroxy radicals (OH, HOx, ROx). Comparing two states: high in NOx, and low in NOx, for both atmospheric layers.
        The results show a considerable importance of NOx gases in the alterations of ozone reactions in the atmosphere. More info soon.
        `
      },
      {
        title: "Smoothing of incomplete air pollution regions of interest from satellite observations",
        image: iasi_satellite_stage,
        href: "https://camiloarguello.xyz/pdf/smoothing-of-incomplete-air-pollution-regions-of-interest-from-satellite-observations.pdf",
        description: `The objective is to analyze a set of satellite observations in an objective way to identify pollution events, track pollution plumes and their evolution over time, and identify the anthropogenic or natural origin of these plumes.
        This work is made for my internship at Université Paris - LIPADE (Laboratoire d'Informatique Paris DEscartes). Supervision by: Laurent Wendling, Camille Kurtz, Nicole Vincent and Gaëlle Dufour.`
      },
      {
        title: "Exploration in techniques of mathematical morphology applied on graphs",
        image: graphs_regions,
        href: "https://camiloarguello.xyz/pdf/morphologygraphs.pdf",
        description: `This research systematically seeks to address the principles of graphs applied to image processing. By 
        modeling neighborhood relationships between image’s pixels or voxels and constructing morphological 
        operators. This theory provides a great amount of applicability on different fields such as image filtering, 
        image reconstruction, skeletons, geodesic operators, labelling, etc. The research delves in some basic 
        morphological operators acting on the lattice of a graph, by considering notions of dilation and erosion, 
        but also applying opening and closing filters. Supervised by: Isabelle Bloch.`,
      },
      {
        title: "Training a linear regressor to align a set of characteristic points in a face dataset",
        image: analyse_faciale,
        href: "https://camiloarguello.xyz/pdf/analysefaciale.pdf",
        description: `The goal of this research is to analyze several images associated with a set of characteristic points. 
        These points are linked to the face's shape. The algorithm learns to move these points to position them correctly on the face.
        When we want to extract information from an image, we can use the characteristic points, which will tell us information about the distance between them, but also the features of the facial expression. 
        The objective is to be able to refine them according to the position and the size of the bounding box. Finally, we test whether the model has learned to locate the characteristic points, using a random point data set.       
        `,
      },
      {
        title: "Finding contours by using \"Active contours\" (snakes)",
        image: ac_vincent,
        href: "https://camiloarguello.xyz/pdf/modelesdeformables.pdf",
        description: `On this research I use the active contours to detect segment contours/regions on gray-scale images, it allows a semi-interactive way of segmenting the image by an operator which is initialized in the same region, 
        This approach use inner and outer energy to estimate the borders. 
        In this experiment, I show some examples about what we can do using this segmentation principle to find contours and borders. 
        One of its applicabilities is reflected in Photoshop, when an object is selected with the "magic wand tool", the software calculates the region and borders by using active contours. 
        This work was as part of my master degree at Sorbonne Université.`,
      },
      {
        title: "Does a mushroom is edible or poisonous?",
        image: esiee_s3_ml,
        href:
          "https://github.com/crownedone/mushrooms",
        description: `Eating wild mushrooms can be a treat; they are one of the few plant foods which contain vitamin D and some other benefits for the human beings.
                      However, adverse reactions can occur after eating a wild mushroom. Some of those negative reactions include serious respiratory symptoms, with nauseas and vomiting. 
                      As consecuence vital organs could be damaged, which can result in death. Thus, the objective for this research is to analyze and predict whether a mushroom is edible or poisonous based on certain characteristics. Co-author: Steffer Ehrle.
        `,
      },
      {
        title:
          "Experiment of optimization techniques in the context of embedded systems",
        image: esiee_s1_ca,
        description: `One of the most used libraries for computer vision applications is OpenCV. 
                      The computer vision is computationally expensive, even for algorithms which solve specific problems such smile detection. 
                      We performed an approach to create a sobel filter for embedded architectures to optimize the frame processing and compare it with OpenCV.
                      This approach didn't use parallelization or hardware accelerators. Co-author: David Martinez.`,
      },
      {
        title: "Exploring rhytmic patterns by video analysis",
        image: hci2016,
        href:
          "https://link.springer.com/chapter/10.1007%2F978-3-319-40247-5_13",
        description: `Treatments of coordination disorders may be benefit from modern assistive technologies by achieving effective feedback that improves the rehabilitation protocols. 
                      In this paper, a method to identify movement patterns from video sequences is presented, providing acoustic stimuli by means of sounds generated from motion analysis. 
                      The method explores rhythmic patterns in movements, through fundamental concepts as: motion detection and analysis, Principal Component Analysis (PCA) and frequency analysis. 
                      The proposed method was evaluated by using four (4) dance steps, used typically in Latin music, showing good performance in detecting and reproducing acoustic beats.`,
      }
    ],
  },
  How: {
    title: "Motivations",
    info: [
      {
        icon: iconScience,
        title: "Science",
        subtitle: "Learning every day about the knowledge of humanity.",
      },
      {
        icon: iconComputer,
        title: "Coding",
        subtitle:
          "I write code which creates solutions for real-life problems.",
      },
      {
        icon: iconFilm,
        title: "VFX",
        subtitle: "One of my dreams is to become a visual-artist.",
      },
      {
        icon: iconEducation,
        title: "Teaching",
        subtitle: "I am professor by passion.",
      },
      {
        icon: iconCosmos,
        title: "Cosmos",
        subtitle: "The curiosity about new ways to understand our universe.",
      },
    ],
  },
  PersonalInfo: {
    name: "Camilo Argüello",
    job: "Developer and future scientist",
    email: "camilo.arguello.rincon@gmail.com",
    logo: CALogo,
    logoWhite: CALogoWhite,
    cv: "https://camiloarguello.xyz/cv/cv_camiloarguello.pdf",
    linkedin: "https://www.linkedin.com/in/kmiloarguello",
    github: "https://github.com/kmiloarguello",
  },
  Legal: {
    legal: `Currently, I am studying Physics at Sorbonne Univeristé. If you want to work with me, just put in contact with me.`,
    contact: "Contact",
    consulting: "Get a tech consulting on",
    siteMap: "Sitemap",
    curriculum: "Curriculum Vitae",
  },
  Deezer: {
    title: "Based on Deezer these are my favorites songs right now",
    favorites: [
      {
        title: "Me and Magdalena",
        image: meandmagdalena,
        description:
          "Loving someone goes beyond understanding the language we speak and seeing that feelings can speak for themselves.",
      },
      {
        title: "Miracle",
        image: miraclemadeon,
        description:
          "This song represents everything good, everything pure.",
      },
    ],
  },
  Language: {
    language: "Language",
    english: "English",
    french: "French",
    spanish: "Spanish",
  },
  Loading: {
    error: "I am sorry, something wrong happened!",
    timeout: "This section is taking so much time to load...",
    retry: "Retry",
  },
  AdditionalIcons: {
    iconGithub,
    iconLinkedin,
  },
  ColorPalettes: colorPalettesFile,
};

module.exports = { data };
