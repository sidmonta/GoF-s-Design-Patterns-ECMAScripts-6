import ConnectorHandler from './ConnectorHandler'
import PlaceHandler from './PlaceHandler'

const cTool = new ConnectorHandler()
const pTool = new PlaceHandler()

let startPoint, endPoint, connector

console.log('1st place creation')
startPoint = pTool.createElement()

console.log('2st place creation')
endPoint = pTool.createElement()

console.log('connector creation')
connector = cTool.createElement()

cTool.connect(connector, startPoint, endPoint)

pTool.paintElement(startPoint)
pTool.paintElement(endPoint)
cTool.paintElement(connector)
