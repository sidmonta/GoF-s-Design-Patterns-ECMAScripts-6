import {Tape} from 'Tape';

export class TapeRecorder	{

	accept(med)	{
		if (med instanceof Tape)	this.tapeInside = med;
		else	throw "Media is not type Tape";
	}

	record(sound)	{
		if (typeof this.tapeInside === 'undefined')	
			console.log("Error: insert a Tape");
		else
			this.tapeInside.saveOnTape(sound);
	}
}