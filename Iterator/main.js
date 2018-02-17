
const tour = []

tour.push('Santiago')
tour.push('Buenos Aires')
tour.push('Atlanta')
tour.push('New York')
tour.push('Madrid')
tour.push('Torino')
tour.push('Napoli')

// Creo l'iteratore
const iterator = {
  [Symbol.iterator]: function * () {
    yield * tour
  }
}

// Uso l'iteratore
for (let value of iterator) {
  console.log(value)
}
