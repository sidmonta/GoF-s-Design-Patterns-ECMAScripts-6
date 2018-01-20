/**
 *  Oggetto che fornisce la procedura di creazione e gestione di oggetti di tipo
 *  prodotti.
 */
const ElementHandler = () => {
  return new class {
    /**
     * Fornisce il codice necessario per creare qualunque tipo di Concreate Product.
     * L'istanziazione del particolare elemento è delegata al metodo newElement;
     * tale metodo è implementato dalla classe che estenderà questa.
     * Ritorna l'elemento Concrete Product creato.
     */
    createElement () {
      let label = window.prompt('Enter the label for the elementi')
      let element = super.newElement()
      element.label = label
      return element
    }

    paintElement (element) {
      document.getElementsByTagName('body')[0].appendChild(element.html)
    }
  }()
}

export default ElementHandler
