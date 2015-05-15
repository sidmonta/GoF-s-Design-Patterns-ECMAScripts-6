import * as ElementHandler from './ElementHandler';
import * as Place from './Place';

var PlaceHandler = (function () {
  var c = new class {
    newElement()	{
		  return new Place();
	  }
  }();
  
  var e = new ElementHandler();
  Object.setPrototypeOf(e.__proto__, c.__proto__);
  
  return e;
  
  
});

export PlaceHandler;