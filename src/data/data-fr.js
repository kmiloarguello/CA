
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
    confflux_001,
    confflux_002,
    confflux_003,
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
    esiee_s1_ca,
    esiee_s3_ml,
    ac_vincent,
    boulangerie001,
    boulangerie002,
    boulangerie003,
    graphs_regions,
    analyse_faciale,
    iasi_satellite_stage
  } from "./images.js";
  import {
    interiorTrims,
    confflux_api_001
  } from "./videos.js";
  
  import colorPalettesFile from "../colors/colors-palettes.js";

  
  const data_fr = {
    Header: {
      menu: [
        {title: "Accueil", href:"#home"}, 
        {title: "Motivation", href:"#motivation"},
        {title: "Recherche", href:"#research"},
        {title: "Travail", href:"#work"},
        {title: "Contactez moi", href:"#contact"}
      ]
    },
    Why: {
      title: "Accueil",
      img: CAprofile,
      section1: `La science et la technologie`,
      section2: `Je suis une personne créative et ingénieuse. 
                J'utilise la technologie pour créer de nouvelles idées. Je viens de finir un master informatique liée au traitement des images et vision par ordinateur à Sorbonne Université.`,
      section3: `Je suis à la recherche active d'un poste de travail comme ingénieur de logiciels, ou développeur web, ou développeur machine learning. Contactez moi.`,
      btnMail: "Contactez moi",
      btnScrollToWork: "En savoir plus",
      txtMemories: "Souvenirs d'un bon moment."
    },
    What: {
      title: "Travail",
      work: [
        {
          image: confflux_003,
          alt: "Confflux API",
          level: 2,
          detail: {
            title: "Confflux API",
            description: "L'API pour Confflux.",
            chips: ["NodeJS", "ExpressJS", "MongoDB"],
            linkRepository: "https://gitlab.com/conflux-solutions/web-backend",
            images: [
              {
                image: confflux_003,
                alt: "Trouvez des éspaces sans affluences."
              },
              {
                image: confflux_002,
                alt: "Développement Backend avec NodeJS et MongoDB."
              },
             {
                image: confflux_001,
                alt: "Nous sommes éngages pour amêliorer la vie des gens pendant et après le confinément."
              }
            ],
            videos: [
              confflux_api_001
            ]
          }
        },

        {
          image: boulangerie001,
          alt: "Boulangerie à Paris",
          level: 3,
          detail: {
            title: "La boulangerie",
            description: "Boulangerie à Paris",
            chips: ["Angular", "SpringBoot", "MongoDB","Personal Project"],
            linkProject: "https://boulangerie-front.herokuapp.com",
            linkRepository: "https://github.com/kmiloarguello/boulangerie-back.git",
            images: [
              {
                image: boulangerie001,
                alt: "Développement propre à l'aide de l'architecture MVC"
              },
              {
                image: boulangerie002,
                alt: "Base de donnée avec MongoDB."
              },
              {
                image: boulangerie003,
                alt: "UI inspiré du style Pâtisserie Parissien."
              }
            ],
          }
        },
        
        {
          image: daftpunk,
          alt: "Application web musicale d'une chanson de Daft punk.",
          level: 2,
          detail: {
            title: "Harder Better",
            description: "Application web musicale d'une chanson de Daft punk avec Web Audio API et Vanilla Js.",
            chips: ["VanilaJS", "Web Audio Api", "Daft Punk"],
            linkProject: "/harder-better",
            linkRepository: "https://github.com/kmiloarguello/myBirthday24",
            images: [
              {
                image: daftpunk001,
                alt: "<b>Tout le développement</b> a été inspiré par la musique de Daft Punk."
              },
              {
                image: daftpunk002,
                alt: "L'interface utilisateur permet à l'utilisateur <b>de jouer à l'aide du clavier</b>."
              },
              {
                image: daftpunk003,
                alt: "Chaque touche déclenche une chanson de la plus difficile et la plus forte."
              },
              {
                image: daftpunk,
                alt: "il y a d'une section lorsque les sons sont préchargés."
              },
            ],
          }
        },
        {
          image: motoe4plus002,
          alt: "Présentation du nouveau site Web Moto e4 plus.",
          level: 1,
          detail: {
            title: "Moto e4 Plus",
            description: "La mise en page du nouveau site Web Moto e4 Plus, qui couvre les principaux caractéristiques esthétiques, design et ergonomiques. Aussi ses fonctionnalités avec l'appareil photo, la batterie et le Touch ID.",
            chips: ["ReactJs", "Jest", "Webpack", "PostCSS"],
            linkProject: "/moto-e4-plus",
            linkRepository: "https://github.com/kmiloarguello/moto-e4-plus",
            images: [
              {
                image: motoe4plus001,
                alt: "Le développement a d'abord été mobile en utilisant CSS grid."
              },
              {
                image: motoe4plus002,
                alt: "Interface utilisateur adaptable à chaque appareil."
              },
              {
                image: motoe4plus003,
                alt: "Slider et transitions et événements de clic."
              },
              {
                image: motoe4plus,
                alt: "Tous les contenus et images utilisés étaient uniquement à des fins non commerciales et ils sont la propriété de Motorola."
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
            description: "Développement de nouvelles fonctionnalités concernant à 10k visiteurs quotidiens du marché en Colombie et dans le monde.",
            chips: ["Javascript", "Sass", "Vtex" , "ES6"],
            linkProject: "https://www.tiendasjumbo.co",
            images: [
              {
                image: tiendasjumbo001,
                alt: "Voilà à quoi ressemble la nouvelle maison du magasin."
              },
              {
                image: tiendasjumbo007,
                alt: "On a développé la structure de services tels que \"Jumbo al auto\" et \"Recogida en Tienda\" avec toute l'expérience utilisateur, y compris dans Checkout v5. Cela a toujours été mon développement préféré, en raison de la complexité et des multiples flux UX. Je suis fier de ce travail."
              },
              {
                image: tiendasjumbo008,
                alt: "L'utilisateur a désormais la possibilité de choisir entre retirer ses produits ou les attendre chez lui."
              },
              {
                image: tiendasjumbo002,
                alt: "Développé en association avec les développeurs Blacksip, Fizzmod et Vtex."
              },
              {
                image: tiendasjumbo003,
                alt: "J'ai travaillé sur différents sites web tels que le spécial pour Samsung S10."
              },
              {
                image: tiendasjumbo004,
                alt: "Chaque développement est d'abord mobile."
              }
            ],
          }
        },

        {
          image: kaptainteriortrims001,
          alt: "Application web pour BMW Training course",
          level: 2,
          isAVideoThumb: true,
        videoSource: interiorTrims,
          detail: {
            title: "Interior Trims - BMW",
            description: "C'était une application pour une entreprise pour laquelle j'ai travaillé. L'objectif était de simuler un environnement intérieur et de sélectionner un ensemble de points clés avec des informations spécifiques pour les techniciens.",
            chips: ["React", "A-frame"],
            images: [
              {
                image: kaptainteriortrims001,
                alt: "Interior Trims - BMW."
              },
              {
                image: kaptainteriortrims002,
                alt: "Tout le contenu est la propriété de K@PTA."
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
            description: "Site Web de la société Mostro Media. L'objectif était de montrer l'entreprise comme moderne pour les nouveaux clients.",
            chips: ["Wordpress"],
            linkProject: "https://mostromedia.com",
            images: [
              {
                image: mostromedia001,
                alt: "Mostro représente <b>l'innovation et la créativité</b>."
              },
              {
                image: mostromedia,
                alt: "L'ensemble du site était la preuve <b>d'une conception de grande expérience</b>."
              },
              {
                image: mostromedia003,
                alt: "Mostro <b>démarre</b> de nombreuses entreprises dans le monde numérique."
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
          subtitle: "Je voudrais aprendre chaque jour à propos de les connaissances de l'humanité."
        },
        {
          icon: iconComputer,
          title: "Coding",
          subtitle: "Je fais le codage pour créer des solutions à problèmes réels."
        },
        {
          icon: iconFilm,
          title: "VFX",
          subtitle: "Un jour, je serai une artiste visuel."
        },
        {
          icon: iconEducation,
          title: "Teaching",
          subtitle: "Je suis prof par passion."
        },
        {
          icon: iconCosmos,
          title: "Cosmos",
          subtitle: "J'adore l'universe et la maniere d'éxpliquer notre vie dans le cosmos."
        }
      ]
    },
    PersonalInfo: {
      name: "Camilo Argüello",
      job: "Ingénieur en génie informatique",
      age: 25,
      email: "camilo.arguello.rincon@gmail.com",
      tel: 10010101,
      logo: CALogo,
      logoWhite: CALogoWhite,
      cv: "https://camiloarguello.xyz/cv/cv_camiloarguello.pdf",
      linkedin : "https://www.linkedin.com/in/kmiloarguello",
      github: "https://github.com/kmiloarguello"
    },
    Legal: {
      legal: `Je suis dans le master informatique - IMA à Sorbonne Université (Paris). 
              Je suis très intéressé pour le traitement des images et la vision par ordinateur. 
              Contactez moi.`,
      contact: "Contactez moi",
      siteMap: "Le carte du site",
      curriculum: "Mon CV"
    },
    Research: {
      title: "Recherche",
      papers:[
        {
          title: "Smoothing of incomplete air pollution regions of interest from satellite observations",
          image: iasi_satellite_stage,
          description: `L'objectif de ce stage est d'analyser un ensemble d'observations satellitaires de manière objective pour identifier les événements de pollution, suivre les régions de pollution et leur évolution dans le temps, et identifier l'origine anthropique ou naturelle de ces régions.
          Ce travail est réalisé dans le cadre de mon stage à l'Université Paris - LIPADE (Laboratoire d'Informatique Paris DEscartes). Encadrement par: Laurent Wendling, Camille Kurtz, Nicole Vincent et Gaëlle Dufour.`
        },
        {
          title: "Recherche de techniques en morophologie mathematique liées aux graphs.",
          image: graphs_regions,
          href: "https://camiloarguello.xyz/pdf/morphologygraphs.pdf",
          description: `Cette recherche se concentre sur les principes des graphes appliqués au traitement d'images. 
          En modélisant les relations de voisinage entre les pixels ou les voxels de l’image et en construisant des opérateurs morphologiques. 
          Cette théorie fournit une grande applicabilité sur différents domaines tels que le filtrage d'images, la reconstruction d'images, les squelettes, les opérateurs géodésiques, l'étiquetage, etc. Encadrement par: Isabelle Bloch.`,
        },
        {
          title: "Implémentation d'une cascade de régresseurs pour l'alignement de points caractéristiques du visage",
          image: analyse_faciale,
          href: "https://camiloarguello.xyz/pdf/analysefaciale.pdf",
          description: `L'objectif de ce recherche est d'analyser plusieurs images associées à un ensemble de points caractéristiques qui sont liés sur la forme du visage. L'idée est que l'algorithme apprend à déplacer ces points pour les positionner correctement sur le visage.
          Lorsqu’on veut d’extraire des informations d'une image, on peut utiliser les points caractéristiques, qui vont nous indiquer l’information sur la distance entre eux, ainsi que sur les caractéristiques de l'expression du visage. L'objectif est de pouvoir les affiner en fonction de la position et de la taille de la boite englobante.
          à la fin, nous testons si le modèle a appris à localiser les points caractéristiques, en utilisant un ensemble de données de points aléatoires.        
          `,
        },
        {
          title: "Les propriétés de modèles déformables dans la segmentation avec la méthode de contours actifs.",
          image: ac_vincent,
          href: "https://camiloarguello.xyz/pdf/modelesdeformables.pdf",
          description: `La détection de contours dans les images avec de contours actifs « snakes », permet d’un façon semi-interactive de segmenter l’image par un opérateur qui est initialisé dans l’image dans la même région à segmenter et qui finalement par une énergie propre, une énergie potentielle, et une énergie externe va à trouver le contour de l’objet.  
          L'une de ses applications se reflète dans Photoshop, lorsqu'un objet est sélectionné avec «l'outil wand magique», le logiciel calcule la région et les contours en utilisant des contours actifs.
          Ce projet à été développé pour le cours TADI à Sorbonne Université.`,
        },
        {
          title: "Éxploration des techniques d'optimisation des systèmes embarqués.",
          image: esiee_s1_ca,
          description: `
                        OpenCV est l'une des bibliothèques les plus utilisées dans les applications de vision par ordinateur ou en anglais Computer Vision.
                        La vision par ordinateur demande beaucoup de calcul, même pour des algorithmes qui résolvent des problèmes comme la détection faciale.
                        Dans cette recherche, on présent une implémentation du filtre des images Sobel conçu pour les architectures embarquées afin d'optimiser le traitement par rapport à OpenCV.
                        Cette approche n'a pas utilisé de parallélisation ou d'accélérateurs matériels. Co-author: David Martinez.`,
        },
        {
          title: "Est-ce qu'un champignon est comestible ou toxique?",
          image: esiee_s3_ml,
          href:
          "https://github.com/crownedone/mushrooms",
          description: `Manger des champignons sauvages peut être un régal; ils sont l'un des rares aliments végétaux qui contiennent de la vitamine D et d'autres avantages pour l'homme.
          Malheureusement, des effets indésirables peuvent survenir après avoir mangé un champignon sauvage. Certaines de ces réactions négatives comprennent de graves symptômes respiratoires, des nausées et des vomissements.
          Comme consécuence, les organes vitaux pourraient être endommagés, ce qui pourrait entraîner la mort. Ainsi, l'objectif de cette recherche est d'analyser et de prédire si un champignon est comestible ou toxique en fonction de quelques caractéristiques. Co-author: Steffer Ehrle.
          `,
        },
        {
          title: "(anglais) Exploring rhythmic patterns by video analysis",
          image: hci2016,
          href: 'https://link.springer.com/chapter/10.1007%2F978-3-319-40247-5_13',
          description: `Les traitements des troubles de la coordination peuvent avoir de nombreux avantages en utilisant des technologies modernes qui facilitent les protocoles de réadaptation. 
                        Dans cet article, nous présentons une méthode efficace pour extraire des modèles de mouvement à partir de séquences vidéo, puis fournir des stimuli acoustiques générés à partir de l'analyse de mouvement. 
                        Cette méthode explore différents modèles de mouvement guidés par des concepts tels que: détection et analyse de mouvement, analyse en composantes principales (ACP) et analyse de fréquence.`
        },        
      ]  
    },
    Deezer: {
      title: "Selon Deezer, ce sont mes titres préférés",
      favorites:[
        {
          title: "Me and Magdalena",
          image: meandmagdalena,
          description:
            "Aimer quelqu'un va au-delà de la compréhension de la langue que nous parlons et de voir que les sentiments peuvent parler pour eux-mêmes.",
        },
        {
          title: "Miracle",
          image: miraclemadeon,
          description:
            "Cette chanson représente tout ce qui est bon, tout ce qui est pur.",
        },
      ] 
    },
    Language: {
      language: "Language",
      english: "Anglais",
      french: "Français",
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
  