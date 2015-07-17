let monitor   = new SinglePart("LCD Monitor"),
    keyboard  = new SinglePart("Italian keyboard"),
    processor = new SinglePart("Pentium II Processor"),
    ram 	  = new SinglePart("250kb RAM"),
    hardDisk  = new SinglePart("40GB Hard Disk");

let mainSystem = new CompoundPart("Main System");
try {
	mainSystem.add(processor);
	mainSystem.add(ram);
	mainSystem.add(hardDisk);
} catch (e)	{
	console.log(e);
}

let computer = new CompoundPart("Computer");
try {
	computer.add(monitor);
	computer.add(keyboard);
	computer.add(mainSystem);
} catch (e)	{
	console.log(e);
}

console.log("**Tries to describe the 'monitor' component");
monitor.describe();

console.log("**Tries to describe the 'main system' component");
mainSystem.describe();

console.log("**Tries to describe the 'computer' component");
computer.describe();

try	{
	monitor.add(computer);
} catch(e)	{
	console.log(e)
}