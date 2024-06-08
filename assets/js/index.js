/*IIFE */
const videoBox = (() => {
    //crear función privada que reciba la url del video y el id de la etiqueta iframe para mostrar el documento HTML
    function configureVideoUrl(url, id) {
      const boxMovie = document.getElementById(id);
      console.log(boxMovie); //=> i frame
      boxMovie.setAttribute("src", url);
    }
    //una función pública que reciba los parámetros (url, id), y realice el llamado a la función interna (privada)
    return {
      moduleVideo: (url, id) => {
        configureVideoUrl(url, id);
      },
    };
  })();
  
  class Multimedia {
    #url;
  
    constructor(url) {
      this.#url = url;
    }
  
    get url() {
      return this.#url;
    }
  
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }
  
  /*CLASE REPRODUCTOR EXTENDIDA DE MULTIMEDIA */
  class Reproductor extends Multimedia {
    #id;
  
    constructor(url, id) {
      super(url);
      this.#id = id;
    }
  
    playMultimedia() {
      videoBox.moduleVideo(this.url, this.#id);
    }
  
    
    setInicio(tiempo) {
      videoBox.moduleVideo(`${this.url}&start=${tiempo}`, this.#id);
    }
  }
  
  
  const serie = new Reproductor ("https://www.youtube.com/embed/9GgxinPwAGc?si=9bx20JJ0hJsHW9Jt" , "series");
  const peliculas = new Reproductor ("https://www.youtube.com/embed/YD5BeUWgsSM?si=LBL8m6EbRXZKh4ax" , "peliculas");
  const musica = new Reproductor ("https://www.youtube.com/embed/AaGUbLynISk?si=52uHfJHErHKgT3zc" , "musica");
  
  serie.playMultimedia();
  peliculas.playMultimedia();
  musica.playMultimedia();
  
  musica.setInicio(30);
  
  