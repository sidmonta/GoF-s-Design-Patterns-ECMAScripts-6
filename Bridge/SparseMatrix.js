export class SparseMatrix extends Matrix	{

	constructor(rows, cols, collection)	{
		super(rows, cols, collection);
	}

	put(row, col, value)	{
		let cell =super. getPosition(row, col);
		if (cell !== null)	{
			if (value === 0)	super.deletePosition(cell);
			else cell.value = value;
		} else
			if (value !== 0)
				cell = super.createPosition(row, col).value = value;
	}

	get(row, col)	{
		let cell = super.getPosition(row, col);
		return (cell !== null) ? cell.value : 0;
	}
}