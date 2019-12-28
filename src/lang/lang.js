import { data } from "../data/data.js";
import { data_fr } from "../data/data-fr.js";
import { data_es } from "../data/data-es.js";

/**
 * Defines the language inside of the website
 * @param {String} language Type of language. i.e en-US or fr-FR 
 */
const defineLanguage = (language = window.navigator.language) => {

  if (typeof(Storage) !== "undefined") {

    // If exists the localStorage AND also the lang storage variable exists
    if(localStorage.getItem("lang") != null){
      if( /fr/ig.test(localStorage.getItem("lang")) ){
        return data_fr;
      }else if( /es/ig.test(localStorage.getItem("lang")) ){
        return data_es;
      }else{
        return data;
      }

    // Use the window.navigator language
    }else{
      if( /fr/ig.test(language) ){
        return data_fr;
      }else if( /es/ig.test(language)){
        return data_es;
      }else{
        return data;
      }
    }
    // Otherwise return english lang
  }else{
    return data;
  }
}

module.exports = defineLanguage;
