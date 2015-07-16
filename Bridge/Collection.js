export class Collection {

	constructor(data)	{
		this.collection = data;
	}

	add(elem)	{
		if (typeof this.collection.push === 'undefined')	{
			this.collection.add(elem);
		} else {
			this.collection.push(elem);
		}
	}

	remove(elem)	{
		if (typeof this.collection.delete === 'undefined')	{
			this.collection = this.collection.filter(function (e) 	{
				return (e.col !== elem.col || e.row !== elem.row );
			});
		} else
			this.collection.delete(elem);
	}

	entries()	{
	    return this.collection.entries();
	}
}