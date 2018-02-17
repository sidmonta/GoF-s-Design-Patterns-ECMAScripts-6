import ProxyFileHandler from 'ProxyFileHandler'

const fh = new ProxyFileHandler('form#textarea')
console.log(`
  ** Il nome del file è: ${fh.filename}
  ** Il contenuto del file è: ${fh.getContent()}
  ** Il contenuto del file è ancora: ${fh.getContent()}
  ** Il contenuto della riga 2 è: ${fh.getLine(2)}
  ** Il contenuto della riga 2 è ancora: ${fh.getLine(2)}
  ** Il contenuto della riga 4 è: ${fh.getLine(4)}
`)
