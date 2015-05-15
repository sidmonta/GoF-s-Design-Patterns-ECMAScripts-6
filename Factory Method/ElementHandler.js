var ElementHandler = (function () {

  return new class	{
  
  	createElement()	{
  		let label = prompt("Enter the label for the elementi");
  		let element = super.newElement();
  		element.label = label;
  		return element;
  	}	
  	
  	
  	paintElement(element)	{
  		document.getElementsByTagName('body')[0].appendChild(element.html);
  	}
  }
});

export Elementhandler;