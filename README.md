# CA Portfolio

This is the source code for my own website. [camiloarguello.xyz](https://camiloarguello.xyz). This is the result of so many hours trying to find a mix between a good web design with my skills creating beautiful and powerfull software. I've put on this project all my knowledge in Front-end development.

## Execution

If you want to run the project you need to follow the next steps:

1. Clone the project on your machine
```
git clone https://github.com/kmiloarguello/CA.git
```
2. Add the correct libraries
```
npm install
```
3. Run the project in `development-mode`
```
npm run dev
```
4. Create a production-ready project
```
npm run prod
```

---

## WIP

I try to update this site as much as possible, these are the new requirements in the backlog.

- Fix `See more` button on desktop [Priority: High]
- Finalize the project README.md >:'v [Priority: Medium]
- Create totally french website [Priority: Medium]
- Create totally spanish website [Priority: Medium]
- Combine the files `src/data/data.js`, `src/data/data-es.js` and `src/data/data-fr.js` into a one single file which handles all the three languages. [Priority: Low]
- Add [Redux](https://reduxjs.com)
- Admin platform to update the content [Priority: Low]

---

## Why, How, What

The site was built following the Why-How-What characteristics. Today, the way to comunicate with others is remarked by these 3 features. Where each one represents a purpose of this website. I structure the information in the same way, in order to show to each visitor a complete experience about me and why I do all of these things. So, the first component should be **Why**, is where I present my purpose, then I present the **How** where I put my motivations and finally, the **What** where I present what specifically I do.

---

## Technologies

This project is composed by different kind of libraries such as:

- [React JS](https://reactjs.org)
- [Webpack](https://webpack.org)
- [PostCSS](https://postcss.org)
- [Babel](https://babel.org)
- [Jest](https://jest.org)
- [Particles.js](https://particlesjs.com)

---

## Structure

The project is structured, in order to organize each file or groups of files in a single folder. All the source code are stored in the `src` folder. Inside of this folder you will find.

- `Components` folder: This folder contains all the `*.jsx` components.
- `css` folder: Contains all the styles.
- `data` folder: Contains all the information about me and how the information put on the screen.
- `html` folder: Contains the template to render the components.
- `img` folder: Contains all the images organized by subfolders.
- `lang` folder: Contains one file in charge of define the site language.
- `sw` folder: Contains the files to make the site offline-first
- `video` folder: Contains the video files.

The main file `index.js` is the first file analized by React and Webpack and it tells to the browser, which component it must be render.

The main component file `CA.jsx` is located in the same path. This file is responsible to call asynchronously all the subcomponents and render them. Also, this file define the `four-color` state to handle the gradient background.

---

## Data

The files `src/data/data.js`, `src/data/data-es.js` and `src/data/data-fr.js` manage the information showed on the website. Each file contains a [JSON File](https://w3c.org/json) composed by key values which contains the sections and subsections. All the media type data are coming from the files `src/data/images.js` and `src/data/videos.js`. An image must be imported in the file `src/data/images.js`, then exported from that file, and, in the file `src/data/data.js` must import all the exported files from images and videos.

---

## CSS

This site uses the most powerful tools in web technologies. And, for CSS I use a post-processor called [PostCSS](https://postcss.org). The way to work on styles becomes simpler. There is a file `postcss.config.js` in the project root, which manage the configurations of the entire stylesheet. For example, it is possible to add a new Google font only putting the name and the wanted `weights`. It uses CSSNext for providing support to all the browsers. There are some rules to follow, global styles must be added on `src/css/index.pcss`. Variables, such as colors or measures and queries must be added on `src/css/variables.pcss`. Each component should have one `.pcss` file to organize the project. Advice: Re-use styles as much as possible, don't over-use `!important`.

---

## Components

Each component is develop to assure one specific functionality. The way to determine a component is thinking in design/task/instances way. If one html section would be used on different places, it should be useful create that section as a component. 

---

## Language

Currently, the aim of this site is to support English, Spanish and French. Right now this is the coverage: English `(100%`, Spanish `80%` and French `40%` Three data-files were created to store the information. The file `src/lang/lang.js` uses the information of  provided by the browser and determines which language should be render out.

---

## Aknowledge

Thank you for all the people that inspired me to build this site. <3 It was made with love by me.