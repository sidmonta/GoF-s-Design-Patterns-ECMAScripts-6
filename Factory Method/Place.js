//import * as ElementHandler from './ElementHanfler';

class Place {

	set label(l)	{
		this.l = l;
	}

	get label()	{
		return this.l;
	}

	get html()	{
		let element = document.createElement('div');
		elem.setAttribute('class', 'place');
		elem.textContent = l;

		return elem;
	}
}