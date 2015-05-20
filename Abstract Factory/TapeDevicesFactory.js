import {Tape} from 'Tape';
import {TapeRecorder} from 'TapeRecorder';
import {TapePlayer} from 'TapePlayer';

export class TapeDevicesFactory	{
	createPlayer()	{
		return new TapePlayer();
	}

	createRecorder()	{
		return new TaperRecorder();
	}

	createMedia()	{
		return new Tape();
	}
}