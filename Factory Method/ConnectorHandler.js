import ElementHandler from './ElementHandler';
import Place from './Place';
import Connector from './Connector';

/**
 * È un Concrete Creator, progettato per la gestione dei Connector, estende la 
 * classe ElementHandler, e implementa il metodo newElement per la creare oggetti
 * di Connector
 */
var ConnectorHandler = (function () {
  var c = new class {
      newElement()	{
    		return new Connector();
    	}
    
    	connect(conn, origin, destination)	{
    		conn.setPlaceConnected(origin, destination);
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

export ConnectionHandler;