export class Engineer extends Employee	{

	constructor(nam, off)	{
		super();
		this.nam   = nam;
		this.off = off;
	}

	get name()	{
		return this.nam;
	}

	get office()	{
		return this.off;
	}

	whoIs()	{
		console.log(`I am ${this.nam}, and I am with the ${this.off}.`);
	}
}