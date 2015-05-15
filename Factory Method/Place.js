/**
 * Classe che implementa un Concrete Product.
 * label e html sono due proprietà della classe, mentre setPlaceConnected è un
 * metodo.
 */
export class Place {

	set label(l)	{
		this.l = l;
	}

	get label()	{
		return this.l;
	}

	get html()	{
		let element = document.createElement('div');
		elem.setAttribute('class', 'place');
		elem.textContent = this.l;

		return elem;
	}
}