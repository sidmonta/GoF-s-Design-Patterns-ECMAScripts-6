import * as ElementHandler from './ElementHandler';
import * as Place from './Place';
import * as Connector from './Connector';
import * as ConnectorHandler from './ConnectorHandler';
import * as PlaceHandler from './PlaceHandler';

var cTool = new ConnectorHandler();
var pTool = new PlaceHandler();

//console.log(cTool);

var startPoint, endPoint, connector;

console.log('1st place creation');
startPoint = new pTool.createElement();
console.log('2st place creation');
endPoint = new pTool.createElement();
console.log('connector creation');
connector = new cTool.createElement();

//console.log(cTool);

cTool.connect(connector, startPoint, endPoint);

console.log(pTool.paintElement(startPoint));
console.log(pTool.paintElement(endPoint));
console.log(cTool.paintElement(connector));