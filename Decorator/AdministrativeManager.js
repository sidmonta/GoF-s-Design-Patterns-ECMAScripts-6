export class AdministrativeManager extends ResponsibleWorker	{

	constructor(empl)	{
		super(empl);
	}

	whoIs()	{
		this.sayIamBoss();
		super.whoIs();
	}

	sayIamBoss()	{
		console.log("I am a boss");
	}
}