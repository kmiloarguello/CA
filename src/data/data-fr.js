
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
    esiee_s1_ca,
    esiee_s2_wi,
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
      job: "Ingénieur en génie informatique",
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
          title: "Exploring rhytmic patterns by video analysis",
          image: hci2016,
          href: 'https://link.springer.com/chapter/10.1007%2F978-3-319-40247-5_13',
          description: `Les traitements des troubles de la coordination peuvent avoir de nombreux avantages en utilisant des technologies modernes qui facilitent les protocoles de réadaptation. 
                        Dans cet article, nous présentons une méthode efficace pour extraire des modèles de mouvement à partir de séquences vidéo, puis fournir des stimuli acoustiques générés à partir de l'analyse de mouvement. 
                        Cette méthode explore différents modèles de mouvement guidés par des concepts tels que: détection et analyse de mouvement, analyse en composantes principales (ACP) et analyse de fréquence.`
        },
        {
          title: "Expériences dans les techniques d'optimisation des systèmes embarqués.",
          image: esiee_s1_ca,
          description: `
                        OpenCV est l'une des bibliothèques les plus utilisées dans les applications de vision par ordinateur ou en anglais Computer Vision.
                        La vision par ordinateur demande beaucoup de calcul, même pour des algorithmes qui résolvent des problèmes comme la détection faciale.
                        Dans cette recherche, on présent une implémentation du filtre des images Sobel conçu pour les architectures embarquées afin d'optimiser le traitement par rapport à OpenCV.
                        Cette approche n'a pas utilisé de parallélisation ou d'accélérateurs matériels. Co-author: David Martinez.`,
        },
        {
          title: "Un voyage jusqu'à MQTT",
          image: esiee_s2_wi,
          description: `
                        L'internet of things (IoT) est devenu un standard en raison de la révolution des technologies de l'information, par conséquent, il existe de nombreux scénarios mis en œuvre où les protocoles IoT participent.
                        Par exemple, le protocole Push est plus recommandé pour les appareils IoT, en raison de sa faible consommation d'électricité et de sa faible capacité de transfert de données. Dans cette recherche, un guide complet du MQTT est présenté. 
                        Pour ce faire, j'effectue une configuration testant différents scénarios et appareils pour analyser les avantages de la technologie.
                        Aussi, je conclus les tests de l'étude MQTT sur différents périphériques matériels. Ce projet concernait le cours IMC-4302A à l'école ESIEE Paris.`,
        },
      ]  
    },
    Deezer: {
      title: "Here is my favorite music of 2019",
      favorites:[
        
        {
          title:"The XX",
          image: iconBestGroup,
          description: "Le mixing et les chansons qu'ils ont créées sont incroyables. Chaque chanson est une œuvre d'art. Leurs chansons représentent le glamour de la vie à Paris. c'est la principale raison pour laquelle mon artiste préféré pour 2019 est The XX."
        },
        {
          title:"On Hold - The XX",
          image: iconBestSong,
          description:"Je vous invite à imaginez habiter à Paris avec la mode, la culture, la beauté, la passion et l'amour. C'est la perfection combinée en une chanson. C'est ma chanson préférée pour 2019."
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
  