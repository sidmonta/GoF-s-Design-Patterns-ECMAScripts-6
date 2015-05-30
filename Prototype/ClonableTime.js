export class ClonableTime	{
	setTime(hr, min, sec)	{}
	getHours()	{}
	getMinutes()	{}
	getSeconds()	{}

	cloneItself() {
		let theClone = Object.create(this);
		theClone.setTime(0,0,0);
		return theClone;
	}
}