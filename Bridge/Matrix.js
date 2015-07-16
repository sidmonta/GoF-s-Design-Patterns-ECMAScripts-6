export class Matrix	{

	constructor(rows, cols, collection)	{
		this.rows = rows;
		this.cols = cols;
		this.data = new Collection(collection);
	}

	createPosition(row, col)	{
		var mc = this.getPosition(row, col);
		if (mc === null)	mc = new MatrixCell(row, col);
		this.data.add(mc);
		return mc;
	}

	deletePosition(toDelete)	{
		this.data.remove(toDelete);
	}

	getPosition(row, col)	{

		if (row < 0 || row >= this.rows || col < 0 || col >= this.cols)
			throw "Riga e/o colonna non valida";

		for (let mc of this.data)	{
			mc = mc[1];
			if (mc.row === row && mc.col === col)	return mc;
		}

		return null;
	}

	put(row, col, value)	{}
	get(row, col)	{}
}