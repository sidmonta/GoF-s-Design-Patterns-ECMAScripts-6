import {RectangleClassAdapter} from 'RectangleClassAdapter';


//ClassAdapterExample
var block = new RectangleClassAdapter();
block.name = 'Demo';
block.define(3,4,10,20, '#FFC');
console.log(`The area of  ${block.name} is ${block.getSurface()}, and it's ${block.getColor()}`);


//ObjectAdapterExample
var block1 = new RectangleObjectAdapter();
block1.name = 'Demo1';
block1.define(3,4,10,20,'#ADCF');
console.log(`The area of  ${block1.name} is ${block1.getSurface()}, and it's ${block1.getColor()}`);
