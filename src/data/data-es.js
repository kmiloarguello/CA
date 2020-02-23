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

const data_es = {
  Header: {
    menu: [
      { title: "Inicio", href: "#home" },
      { title: "Motivación", href: "#motivation" },
      { title: "Trabajo", href: "#work" },
      { title: "Contacto", href: "#contact" }
    ]
  },
  Why: {
    title: "Home",
    img: CAprofile,
    section1: `Ciencia Tecnología Ingeniería y Matemáticas`,
    section2: `Soy una persona creativa e ingenionsa, quien usa la tecnología para dar vida a maravillosas e increibles ideas usando algoritmos, diseño computacional, desarrollo de software e investigación en multimedia.`,
    section3: `Actualmente, estoy disponible para un trabajo de tiempo completo. Si deseas trabajar conmigo, contáctame.`,
    btnMail: "Contáctame",
    btnScrollToWork: "Conoce mi trabajo",
    txtMemories: "Recuerdo de un momento feliz."
  },
  What: {
    title: "Portafolio",
    work: [

      {
        image: boulangerie001,
        alt: "Pastelería en Paris",
        level: 3,
        detail: {
          title: "La boulangerie",
          description: "Pastelería en Paris",
          chips: ["Angular", "SpringBoot", "MongoDB","Personal Project"],
          linkProject: "https://boulangerie-front.herokuapp.com",
          linkRepository: "https://github.com/kmiloarguello/boulangerie-back.git",
          images: [
            {
              image: boulangerie001,
              alt: "Desarrollo usando arquitectura MVC."
            },
            {
              image: boulangerie002,
              alt: "Base de datos MongoDB."
            },
            {
              image: boulangerie003,
              alt: "UI insipirada en el estilo \"Pâtisserie Parissien\"."
            }
          ],
        }
      },

      {
        image: daftpunk,
        alt: "Aplicación web musicar de una canción de Daft Punk.",
        level: 2,
        detail: {
          title: "Harder Better",
          description:
            "Aplicación web musical de una canción de Daft Punk usando Web Audio API y Vanilla Js.",
          chips: ["VanilaJS", "Web Audio Api", "Daft Punk"],
          linkProject: "/harder-better",
          linkRepository: "https://github.com/kmiloarguello/myBirthday24",
          images: [
            {
              image: daftpunk001,
              alt:
                "<b>Todo el desarrollo</b> fue inspirado en la música de Daft Punk."
            },
            {
              image: daftpunk002,
              alt: "La interfaz permite al usuario <b>jugar con el teclado</b>."
            },
            {
              image: daftpunk003,
              alt:
                "Cada tecla actua como un disparador de un sonido de la cancion Harder Better Stronger. El objetivo es igualar la canción."
            },
            {
              image: daftpunk,
              alt:
                "Contiene una sección para cargar en un buffer todos los sonidos."
            }
          ]
        }
      },
      {
        image: motoe4plus002,
        alt: "Maquetación del sitio web del nuevo Moto e4 plus.",
        level: 1,
        detail: {
          title: "Moto e4 Plus",
          description:
            'El "layout" del sitio muestra las características principales de estética, diseño y ergonomía del teléfono. Además, cuenta con funcionalidades adicionales con la cámara, la batería y el touch ID.',
          chips: ["ReactJs", "Jest", "Webpack", "PostCSS"],
          linkProject: "/moto-e4-plus",
          linkRepository: "https://github.com/kmiloarguello/moto-e4-plus",
          images: [
            {
              image: motoe4plus001,
              alt: 'El desarrollo fue "mobile-first" usando Css grid.'
            },
            {
              image: motoe4plus002,
              alt: "La interfaz gráfica se adapta a cualquier dispositivo."
            },
            {
              image: motoe4plus003,
              alt: "Se desarrolló una transición manual sin uso de librerías."
            },
            {
              image: motoe4plus,
              alt:
                "TOdo el contenido e imágenes usadas son para fines no-comerciales, todas son propiedad de la marca Motorola."
            }
          ]
        }
      },

      {
        image: tiendasjumbo002,
        alt: "Tiendas Jumbo Colombia",
        level: 1,
        detail: {
          title: "Tiendas Jumbo Colombia",
          description:
            'Desarrollo de nuevas tecnologías para un retail "e-commerce" con promedio de visitantes diarios de 10000.',
          chips: ["Javascript", "Sass", "Vtex", "ES6"],
          linkProject: "https://www.tiendasjumbo.co",
          images: [
            {
              image: tiendasjumbo001,
              alt: "Así es como luce el nuevo home del e-commerce."
            },
            {
              image: tiendasjumbo007,
              alt:
                'Dessarrollamos la estructura para servicios como "Jumbo al auto" y "Recogida en Tienda" con todo el análisis de la experiencia de usuario en un ambiente Vtex Checkout V5. Este ha sido uno de mis desarrollos favoritos, debido a la complejidad y los múltimples flujos de historias de usuario. Estoy orgulloso del trabajo realizado.'
            },
            {
              image: tiendasjumbo008,
              alt:
                "Los usuarios ahora tienen la opción de elegir entre recoger sus productos en la tienda fisica o esperarlos en casa."
            },
            {
              image: tiendasjumbo002,
              alt:
                "Los desarrollos fueron hechos en asociación con Blacksip, Fizzmod y Vtex."
            },
            {
              image: tiendasjumbo003,
              alt:
                'Trabajé en diferentes "mini-sites" o "landing-pages" como el especial para el Samsung S10.'
            },
            {
              image: tiendasjumbo004,
              alt: 'Cada desarrollo es "mobile-first".'
            }
          ]
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
          description:
            "It was an application to one company that I've worked for. The objective was to simulate an interior environment and select a set of key points with specific information for technician people.",
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
        alt: "Sitio web para Mostro Media",
        level: 1,
        detail: {
          title: "Mostro Media",
          description:
            "Sitio web para la empresa Mostro Media. El objetivo fue mostar la compañia con un estilo moderno.",
          chips: ["Wordpress"],
          linkProject: "https://mostromedia.com",
          images: [
            {
              image: mostromedia001,
              alt: "Mostro representa <b>innovación y creatividad</b>."
            },
            {
              image: mostromedia,
              alt:
                "El sitio entero es una prueba de la <b>alta calidad en diseño</b>."
            },
            {
              image: mostromedia003,
              alt:
                "Mostro <b>impulsa</b> a compañias en su viaje dentro del mundo digital."
            }
          ]
        }
      },

      {
        image: escamiloarguello005,
        alt: "Mi ultimo portfolio",
        level: 1,
        detail: {
          title: "Mi ultimo portfolio",
          description:
            "Fue la primer version estable de mi portafolio. Fue orientado e influenciado por mis gustos musicales de la época.",
          chips: ["Jquery", "Css", "Javascript"],
          linkProject: "https://es.camiloarguello.xyz",
          linkRepository:
            "https://github.com/kmiloarguello/kmiloarguello.github.io/tree/master/spanish",
          images: [
            {
              image: escamiloarguello005,
              alt:
                "Fue inspirado en las animaciones de <a href='https://jackuofficial.com' target='_blank'>Jack Ü</a>."
            },
            {
              image: escamiloarguello,
              alt:
                "Los colores fueron inspirados en la banda <a href='https://coldplay.com' target='_blank'>Coldplay</a>."
            },
            {
              image: escamiloarguello004,
              alt:
                "Mis habilidadas estaban orientadas al modelado 3D y las animaciones. Sin embargo, hoy en día me enfoco en otras áreas."
            },
            {
              image: escamiloarguello003,
              alt: "Animaciones para las secciones de los títulos."
            },
            {
              image: escamiloarguello002,
              alt: "Animaciones para las secciones de los títulos."
            }
          ]
        }
      },

      {
        image: descubriendobogicon,
        alt: "Videojuego Descubriendo Bogotá",
        level: 2,
        detail: {
          title: "Descubriendo Bogotá",
          description:
            "Videojuego desarrollado para el IDPC Bogotá - Colombia.",
          chips: ["Videogame", "Unity", "C#", "Firebase", "AR"],
          linkProject:
            "https://play.google.com/store/apps/details?id=com.mostromedia.descubriendobogota",
          linkRepository: "https://github.com/MostroMedia/DescubriendoBogota",
          images: [
            {
              image: descubriendobog1,
              alt:
                "Fuí el desarrollador lider del proyecto. Mi rol era establecer la estructura del juego, diseñar la lógica y el código en C#."
            },
            {
              image: descubriendobog2,
              alt:
                "Creamos un completo conjunto de animaciones para cada personaje usando Unity y Adobe Photoshop."
            },
            {
              image: descubriendobog3,
              alt:
                "El diseño y las mécanicas de juego fueron definidas para crear una excelente experiencia de usuario."
            },
            {
              image: descubriendobog4,
              alt:
                "Para la interacción y realidad aumentada. Usamos el poder de Vuforia Engine para analizar, segmentar y rastrear a los modelos 3D."
            }
          ]
        }
      },

      {
        image: kapta01,
        alt: "Sitio web para K@PTA Mexico",
        level: 1,
        detail: {
          title: "K@PTA Mexico",
          description:
            "Sitio web para la empresa K@PTA en Mexico. El objetivo era crear un portal con la estética e identidad corporativa de la empresa para el mercado mexicano.",
          chips: ["Reactjs", "node", "Html"],
          linkProject: "https://kaptamexico.biz",
          images: [
            {
              image: kaptamexico001,
              alt: "K@PTA refleja ser una <b>empresa moderna</b>."
            },
            {
              image: kaptamexico002,
              alt: "Información acerca de la compañia en dispositivos móviles."
            },
            {
              image: kaptamexico003,
              alt:
                "El manual de identidad corporativa se ve reflejado en el sitio web."
            }
          ]
        }
      },

      

      {
        image: dashboard,
        alt: "Web Application for K@PTA",
        level: 1,
        detail: {
          title:
            "Web Application for K@PTA",
          description: "Dashboard of Results K@PTA. The goal was to create a platform to manage the test results and learning progress curve for BMW and KAPTA teams.",
          chips: ["NodeJS", "Express", "MongoDB", "Server-side-rendering"],
          images: [
            {
              image: dashboard001,
              alt:
                "A modern platform to manage the <b>internal evaluation results</b>."
            },
            {
              image: dashboard,
              alt:
                "It uses the <b>ClassMarker API</b> to handle the results and to create graphs and tables."
            }
          ]
        }
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
              alt: "All the content is property of K@PTA."
            }
          ],
          video: propulsion002
        }
      }
    ],
    btnLoadMoreProjects: "Ver más"
  },
  How: {
    title: "Motivaciones",
    info: [
      {
        icon: iconScience,
        title: "Ciencia",
        subtitle: "Aprender cada dia sobre el conocimiento de la humanidad."
      },
      {
        icon: iconComputer,
        title: "Computación",
        subtitle: "Escribo código que soluciona problemas de la vida real."
      },
      {
        icon: iconFilm,
        title: "VFX",
        subtitle: "Uno de mis sueños es ser un artista visual."
      },
      {
        icon: iconEducation,
        title: "Profesor",
        subtitle: "Enseño por pasión."
      },
      {
        icon: iconCosmos,
        title: "Cosmos",
        subtitle:
          "Mi curiosidad acerca de nuevas formas de entender nuestro universo."
      }
    ]
  },
  PersonalInfo: {
    name: "Camilo Argüello",
    job: "Ingeniero apasionado por la ciencia.",
    age: 26,
    email: "camilo.arguello.rincon@gmail.xyz",
    tel: 10010101,
    logo: CALogo,
    logoWhite: CALogoWhite,
    cv: "https://camiloarguello.xyz/cv/cv_camiloarguello.pdf",
    linkedin: "https://www.linkedin.com/in/kmiloarguello",
    github: "https://github.com/kmiloarguello"
  },
  Research: {
    title: "Research",
    papers: [
      {
        title: "Explorando patrones rítmicos usando análisis de video.",
        image: hci2016,
        href:
          "https://link.springer.com/chapter/10.1007%2F978-3-319-40247-5_13",
        description: `Los tratamientos de desordenes de coordinación pueden tener bastantes beneficios usando tecnologías modernas que asistan en los protocolos de rehabilitación. En este artículo, presentamos un método efectivo para extraer patrones de movimiento a partir de secuencias de video, para luego proveer estímulos acústicos generados desde el análisis del movimiento. Este método explora diferentes patrones de movimiento guiado por conceptos como: Detección y análisis de movimiento, Principal Component Analysis (PCA) y análisis frequencial.`
      }
    ]
  },
  Legal: {
    legal: `Actualmente, estoy disponible para un trabajo de tiempo completo. Si deseas trabajar conmigo, contáctame.`,
    contact: "Contacto",
    siteMap: "Mapa del sitio",
    curriculum: "Hoja de vida"
  },
  Deezer: {
    title: "Música favorita 2019",
    favorites: [
      {
        title: "The XX",
        image: iconBestGroup,
        description:
          'La mezcla de sonidos que ellos han creado es increible. Cada sonido es una pieza de arte. Sus sonidos representan el "glamour" de vivir en Paris. Esta es la razón por la cual son mis favoritos del 2019.'
      },
      {
        title: "On Hold - The XX",
        image: iconBestSong,
        description:
          "Imagina vivir en Paris con el estilo, la clase, la cultura, la belleza, la pasión y el amor. Es la perfección combinada en una canción. Por eso es mi favorita del 2019."
      }
    ]
  },
  Language: {
    language: "Idioma",
    english: "Inglés",
    french: "Francés",
    spanish: "Español"
  },
  Loading: {
    error: "Lo sentimos hubo un error!",
    timeout: "Esta sección está tomando demasiado tiempo para cargar...",
    retry: "Reintentar"
  },
  AdditionalIcons: {
    iconGithub,
    iconLinkedin
  },
  ColorPalettes: colorPalettesFile
};

module.exports = { data_es };
