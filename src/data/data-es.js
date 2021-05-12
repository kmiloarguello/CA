import {
  CALogo,
  CALogoWhite,
  CAprofile,
  confflux_001,
  confflux_002,
  confflux_003,
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
  esiee_s2_wi,
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

const data_es = {
  Header: {
    menu: [
      { title: "Inicio", href: "#home" },
      { title: "Motivación", href: "#motivation" },
      { title: "Investigación", href:"#research"},
      { title: "Trabajo", href: "#work" },
      { title: "Contacto", href: "#contact" }
    ]
  },
  Why: {
    title: "Home",
    img: CAprofile,
    section1: `Ciencia Tecnología Ingeniería y Matemáticas`,
    section2: `Soy una persona creativa e ingenionsa, quien usa la tecnología para dar vida a maravillosas e increibles ideas usando algoritmos, diseño computacional, desarrollo de software e investigación en multimedia.
              Actualmente, estoy haciendo el master IMA - M2 (Procesamiento de imágenes) en la Universidad Sorbonne (Paris - Francia).`,
    section3: `Actualmente, estoy haciendo el master IMA - M2 en la Universidad Sorbonne (Paris - Francia). Si deseas trabajar conmigo, contáctame.`,
    btnMail: "Contáctame",
    btnScrollToWork: "Conoce más",
    txtMemories: "Recuerdo de un momento feliz."
  },
  What: {
    title: "Portafolio",
    work: [

      {
        image: confflux_003,
        alt: "Confflux API",
        level: 2,
        detail: {
          title: "Confflux API",
          description: "la API para Confflux.",
          chips: ["NodeJS", "ExpressJS", "MongoDB"],
          linkRepository: "https://gitlab.com/conflux-solutions/web-backend",
          images: [
            {
              image: confflux_003,
              alt: "Encuentra lugares libres de multitud."
            },
            {
              image: confflux_002,
              alt: "Confflux es una app desarrollada con NodeJS y MongoDB."
            },
           {
              image: confflux_001,
              alt: "Estamos comprometidos en ayudar a negocios y a personas en esta cuarentena."
            }
          ],
          videos: [
            confflux_api_001
          ]
        }
      },

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
    age: 25,
    email: "camilo.arguello.rincon@gmail.com",
    tel: 10010101,
    logo: CALogo,
    logoWhite: CALogoWhite,
    cv: "https://camiloarguello.xyz/cv/cv_camiloarguello.pdf",
    linkedin: "https://www.linkedin.com/in/kmiloarguello",
    github: "https://github.com/kmiloarguello"
  },
  Research: {
    title: "Investigación",
    papers: [
      {
        title: "[EN PROGRESO] - Extracción y analisis de regiones de contaminación por Ozono a partir de observaciones satelitales en la Tropósfera",
        image: iasi_satellite_stage,
        href: "https://w3.mi.parisdescartes.fr/sip-lab/files/stages/2020-2021/stageM2-Smoothing%20of%20incomplete%20air%20pollution%20regions%20of%20interest%20from%20satellite%20observations.pdf",
        description: `El objetivo de esta pasantía es de analizar un conjunto de observaciones satelilates de forma objetiva, con el fin de identificar los eventos de contaminación, de igual manera, rastrear estas regiones de contaminación y su evolución en el tiempo.
        Este trabajo es realizado en el marco de mi pasantía en la Université de Paris - LIPADE (Laboratoire d'Informatique Paris DEscartes). Supervisado por: Laurent Wendling, Camille Kurtz, Nicole Vincent et Gaëlle Dufour.`
      },
      {
        title: "Investigación de tecnicas de morfología matemática usando grafos",
        image: graphs_regions,
        href: "https://camiloarguello.xyz/pdf/morphologygraphs.pdf",
        description: `Esta investigación se concentra sobre los principios de grafos aplicados al tratamiento de imágenes.
        El objetivo es modelizar las relaciones de vecindad entre los pixeles o los voxeles de la imagen, para luego construir operadores morfológicos.
        Esta teoría conlleva a una gran aplicabilidad sobre diferentes dominios como el filtrado de imágenes, la reconstrucción, 'esqueletización', y los operadores geodésicos, etc. Supervisado por: Isabelle Bloch.`,
      },
      {
        title: "Implementación de una cascada de regresores lineares sobre un dataset de rostros humanos",
        image: analyse_faciale,
        href: "https://camiloarguello.xyz/pdf/analysefaciale.pdf",
        description: `L'objectif de ce recherche est d'analyser plusieurs images associées à un ensemble de points caractéristiques qui sont liés sur la forme du visage. L'idée est que l'algorithme apprend à déplacer ces points pour les positionner correctement sur le visage.
        Lorsqu’on veut d’extraire des informations d'une image, on peut utiliser les points caractéristiques, qui vont nous indiquer l’information sur la distance entre eux, ainsi que sur les caractéristiques de l'expression du visage. L'objectif est de pouvoir les affiner en fonction de la position et de la taille de la boite englobante.
        à la fin, nous testons si le modèle a appris à localiser les points caractéristiques, en utilisant un ensemble de données de points aléatoires.        
        `,
      },
      {
        title: "Segmentación de imágenes usando \"Active contours\"",
        image: ac_vincent,
        href: "hhttps://camiloarguello.xyz/pdf/modelesdeformables.pdf",
        description: `La detección de contornos en imágenes usando contornos "snakes" activos, permite una forma semi-interactiva de segmentar la imagen por un operador que se inicializa en la imagen en la misma región en
        segmento y que, en última instancia, mediante energía limpia, energía potencial y energía externa permite encontrar el contorno del objeto. En este experimento, muestro algunos ejemplos de lo que podemos hacer usando este principio de segmentacion para encontrar contornos y bordes. Una de las aplicabilidades de este principio se refleja en Photoshop, cuando se selecciona un objeto con la "varita mágica", el software calcula los bordes.
        Este trabajo fue como parte de mi formación a Sorbonne Université.`,
      },
      {
        title: "Cómo distinguir a un hongo venenoso?",
        image: esiee_s3_ml,
        href:
          "https://github.com/crownedone/mushrooms",
        description: `Comer un hongo puede ser un riesgo, ellos son unas de las pocas plantas que contienen vitaminas D y algunos otros beneficios para los seres humanos.
        Sin embargo, reacciones adversas pueden ocurrir luego de comer un hongo. Algunos de ellos producen reacciones negativas que van hasta serios problemas respiratorios, nauseas y vomito.
        Como consecuencia algunos organos vitales pueden ser afectados, lo que puede resultar en la muerte. Por ende, el objetivo de esta investigación es analizar y predecir si un hongo es comestible o venenoso basado en algunas caracteristicas. Co-author: Steffer Ehrle.`,
      },
      {
        title:
          "Experimento en técnicas de optimización para sistemas embebidos.",
        image: esiee_s1_ca,
        description: `Uno de las librerías más usadas en aplicaciones de visión por computador es OpenCV.
                      La visión por computador exige alta demanda computacional, incluso para algoritmos que resuelven problemas como la deteción facial.
                      En esta investigación, presentamos una implementación del filtro Sobel hecha para arquitecturas embebidas para así, optimizar el procesamiento comparado con OpenCV.
                      Este approach no utilizó paralelización o hardware accelerators. Co-author: David Martinez.`,
      },
      {
        title: "Explorando patrones rítmicos usando análisis de video.",
        image: hci2016,
        href:
          "https://link.springer.com/chapter/10.1007%2F978-3-319-40247-5_13",
        description: `Los tratamientos de desordenes de coordinación pueden tener bastantes beneficios usando tecnologías modernas que asistan en los protocolos de rehabilitación. En este artículo, presentamos un método efectivo para extraer patrones de movimiento a partir de secuencias de video, para luego proveer estímulos acústicos generados desde el análisis del movimiento. Este método explora diferentes patrones de movimiento guiado por conceptos como: Detección y análisis de movimiento, Principal Component Analysis (PCA) y análisis frequencial.`
      },
      {
        title: "Un viaje hacia MQTT",
        image: esiee_s2_wi,
        description: `Internet of Things (IoT), se ha convertido en un estandar debido a la rápida revolución en tecnologías de información, por ende hay muchos escenarios implementados donde participan protocolos IoT.
                      Por ejemplo, Protocolo Push is mas recomendable para dispositivos IoT, debido a su bajo consumo de electricidad y baja capacidad de transferencia de datos. En esta investigación, una guia completa sobre MQTT es presentada. Para ello, realizo una configuración probando diferentes escenarios y dispositivos para analizar las ventajas de la tecnología.
                      Además, Concluyo el estudio de MQTT probando en diferentes dispositivos hardware. Este proyecto fue para el curso IMC-4302A de ESIEE Paris.`,
      }
    ]
  },
  Legal: {
    legal: `Actualmente, estoy haciendo el master IMA - M2 en la Universidad Sorbonne (Paris - Francia). Estoy buscando una pasantía en el campo de procesamiento de imágenes que empiece en febrero de 2021. Si deseas trabajar conmigo, contáctame.`,
    contact: "Contacto",
    siteMap: "Mapa del sitio",
    curriculum: "Hoja de vida"
  },
  Deezer: {
    title: "Según Deezer, estas son mis canciones preferidas",
    favorites: [
      {
        title: "Me and Magdalena",
        image: meandmagdalena,
        description:
          "Querer a alguien va mas allá de las diferencias de idioma, es ver que los sentimientos hablan un mismo idioma.",
      },
      {
        title: "Miracle",
        image: miraclemadeon,
        description:
          "Esta canción representa todo lo que es bueno y puro en mi vida.",
      },
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
