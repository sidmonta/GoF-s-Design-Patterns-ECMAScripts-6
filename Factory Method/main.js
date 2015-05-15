import ElementHandler from './ElementHandler';
import Place from './Place';
import Connector from './Connector';
import ConnectorHandler from './ConnectorHandler';
import PlaceHandler from './PlaceHandler';

var cTool = new ConnectorHandler();
var pTool = new PlaceHandler();

var startPoint, endPoint, connector;

console.log('1st place creation');
startPoint = new pTool.createElement();

console.log('2st place creation');
endPoint = new pTool.createElement();

console.log('connector creation');
connector = new cTool.createElement();

cTool.connect(connector, startPoint, endPoint);

pTool.paintElement(startPoint);
pTool.paintElement(endPoint);
cTool.paintElement(connector);