import * as ElementHandler from './ElementHandler';
import * as Place from './Place';
import * as Connector from './Connector';

var ConnectorHandler = (function () {
  var c = new class {
      newElement()	{
    		return new Connector();
    	}
    
    	connect(conn, origin, destination)	{
    		conn.setPlaceConnected(origin, destination);
    	}
  }();
  
  var e = new ElementHandler();
  Object.setPrototypeOf(e.__proto__, c.__proto__);
  
  return e;
});

export ConnectionHandler;