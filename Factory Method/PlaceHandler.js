import ElementHandler from 'ElementHandler'
import Place from 'Place'

/**
 * È un Concrete Creator, progettato per la gestione dei Place, estende la
 * classe ElementHandler, e implementa il metodo newElement per la creare oggetti
 * di Place
 */
let PlaceHandler = () => {
  let c = new class {
    newElement () {
      return new Place()
    }
  }()

  /**
   * Questa parte è essenziale per la corretta estensione della classe ElementHandler
   * per fare in modo che ElementHandler possa usare il metodo newElement per la
   * creazione del Concrete Product
   */
  let e = new ElementHandler()
  return Object.create(e.prototype, c.prototype)
}

export default PlaceHandler
