export class CompoundPart extends Component	{

	constructor(aName)	{
		super(aName);
		this.children = [];
	}

	describe()	{
		console.log("Component: " + this.name);
		console.log("Component by: ");
		console.log("{\n");
		for (let i = 0; i < this.children.length; i++)
			this.children[i].describe();
		console.log("}");
	}

	add(c)	{
		this.children.push(c);
	}

	remove(c)	{
		this.children = this.children.filter(function (elem) {
			return elem.name !== c.name;
		});
	}

	getChild(n)	{
		return this.children[n];
	}
}