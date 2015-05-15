import ElementHandler from './ElementHandler';
import Place from './Place';

/**
 * È un Concrete Creator, progettato per la gestione dei Place, estende la 
 * classe ElementHandler, e implementa il metodo newElement per la creare oggetti
 * di Place
 */
var PlaceHandler = (function () {
  var c = new class {
    newElement()	{
		  return new Place();
	  }
  }();
  
  /**
   * Questa parte è essenziale per la corretta estensione della classe ElementHandler
   * per fare in modo che ElementHandler possa usare il metodo newElement per la
   * creazione del Concrete Product
   */
  var e = new ElementHandler();
  Object.setPrototypeOf(e.__proto__, c.__proto__);
  
  return e;
  
  
});

export PlaceHandler;