# ECMAScript 6
#### Basato su [git.io/es6features](http://git.io/es6features)

## Introduzione
ECMAScript 6 è la prossima versione dello standard ECMAScript. 

ES6 include le seguenti nuove features:
* Funzioni frecce
* Classi
* Migliore costruzione di oggetti
* Stringhe formattate
* Destrutturazione
* Default + rest è spread
* let + const
* Iteratori + for..of
* Generatori
* Unicode
* Moduli
* Caricamento di moduli
* map + set + weak map + weakset
* Proxies
* Symbols
* Sottoclassi built-in
* Promises
* math + number + string è object APIs
* Letterali binari e ottali
* Reflect api
* Chiamate di coda

## ECMAScript 6 caratteristiche

### Funzioni frecce
Le frecce sono un modo abbreviato per l’uso di funzioni, usando la sintassi 	=>	simile ad altri linguaggi. Diversamente alle funzioni, le frecce propagano lo scope di 	this	del codice in cui vengono inseriti

	//Corpo come espressioni 
    var odds = evens.map(elemento => elemento + 1);
    var nums = evens.map((elemento, indice) => elemento + indice);
    var pairs = evens.map(elemento => ({even: elemento, odd: elemento + 1}));
    
    //Corpo come costrutto
    nums.forEach(elemento => {
        if (elemento % 5 === 0)
            fives.push(v);
    });
    
    //Uso del this
    var bob = {
        _name: "Bob",
        _friends: [],
        printFriends() {
            this._friends.forEach(f => 
                console.log(this._name + " knows " + f));
        }
    }
    
### Classi
Le classi ES6 sono semplice zucchero sintattico per la prototipazione OO. Classi supportano l'ereditarietà, superclassi, istanze, metodi statici e costruttori.

    class SkinnedMesh extends THREE.Mesh {
        constructor(geometry, materials)    {
            super(geometry, materials);
            
            this.idMatrix = SkinnedMesh.defaultMatrix();
            this.bones = [];
            this.boneMatrices = [];
            //...
        }
        update(camera)  {
            //...
            super.update();
        }
        get boneCount() {
            return this.bones.length;
        }
        set matrixType(matrixType)    {
            this.idMatrix = SkinnedMesh[matrixType]();
        }
        static defaultMatrix()  {
            return new THREE.Matrix4();
        }
    }

### Migliore costruzione di oggetti
Il letterale Object sono estesi con il supporto per il settaggio dei prototype alla costruzione dell’oggetto, con l’associazione abbreviata 	foo: foo	si possono definire metodi, creare chiamate a super e assegnare il nome delle proprietà con delle espressioni.

    var obj = {
        //__proto__
        __proto__: theProtoObj,
        //scorciatoia per 'handler: handler'
        handler,
        //Metodi
        toString() {
            //chiamate a super
            return "d" + super.toString();
        },
        //Calcolo dinamico del nome delle proprietà
        ['prop_' + (() => 42)() ]: 42
    };
    
### Stringhe formattate
Le stringhe formattate sono zucchero sintattico per la costruzione di stringhe. Simile ad altri linguaggi permettono la costruzione di stringhe modificabili, permettendo l'utilizzo di variabili in fase di cotruzione.

    //Creazione di una stringa
    `Una stringa in javascript \n con 'entrambi' gli "apici"`
    
    //Stringhe su più righe
    `Questa è una prima riga
     Questa è una seconda riga`
     
     var name = "Bob", time = "oggi";
     `Ciao ${name}, come stai ${time}?`
     
     //Costruzione di una richiesta HTTP 
    
### Destrutturazione
La destrutturazione permette una assegnazione di variabili tramite pattern matching, con supporto per l'associazione di array e oggetti.

    //Assegnazione di liste
    var [a, , b] = [1,2,3];
    
    //Assegnazione di oggetti
    var {op: a, lhs: {op: b}, rhs: c} = getASTNode();
    
    //Puoi usare nella posizione dei parametri
    function g({name: x})   {
        console.log(x);
    }
    g({name: 5});
    
    //Fail-soft destrutturazione
    var [a] = [];
    a === undefined;
    
    //Fail-soft destrutturazione con valori di default
    var [a = 1] = [];
    a === 1;
    
### Default + Rest + Spread
È possibile settare dei valori di default ai parametri delle funzioni.
Rest sostituisce il vecchio     arguments   con i   ... 

    function f(x, y = 12)    {
        return x + y
    }
    f(3) === 15

    function f(x, ...y) {
        //y è un'array
        retur x + y.length;
    }
    f(3, "ciao", true) === 6
    
    function f(x, y, z)  {
        return x + y + z;
    }
    f(...[1,2,3]) === 6
    
### Let + Const
Sono due nuovi costrutti per la dichiarazione di variabili in cui lo scope viene bloccato.     let è il nuovo  var .   const serve per la dichiarazione di costanti.
    
    var global = 15;
    function f()    {
        let x = 15;
        if (x === global)    {
            let y = 5;
            let x = 6
            const z = y + x;    //z = 11
            z = global; //Errore
            console.log(x); //Stampa 6
        }
        y = global; //y = 15
      console.log(x);   //Stampa 15
    }
    
### Iterators + For Of
Gli oggetti iterator oernettibi una iterazione personalizzata.     for..in  viene sostituito con    for..of che permetterà di ciclare per un iteratore

    let fibonacci = {
        [Symbol.iterator]() {
            let pre = 0, cur = 1;
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return {done: false, value: cur}
                } } } }
    for (var n of fibonacci)    {
        if (n > 1000)
            break;
        console.log(n);
    }
    
Iterator si basa sulla interfaccia (scritta usando a titolo di esempio TypeScript):

    interface IteratorResult    {
        done: boolean;
        value: any;
    }
    interface Iterator  {
        next(): IteratorResult;
    }
    interface Iterable  {
        [Symbol.iterator](): Iterator
    }
    
### Generatori
I generatory semplificano l'utilizzo degli iteratori, usando    function\*    e     yield .
Una funzione dichiarata     function\*   ritorna una istanza di un generatore.
I generatori possono essere visti come sottotipi di iteratori che includono delle aggiunte come     next    e   throw   .

    let fibonacci = {
        [Symbol.iterator]: function* {
            let pre = 0, cur = 1;
            for (;;)    {
                var temp = pre;
                pre = cur;
                cur += temp;
                yield cur;
            } } } }
            
    for (var n of fibonacci)    {
        if (n > 1000)
            break;
        console.log(n);
    }

Le interfacce di un generatore sono

    interface Generator extends Iterator    {
        newxt(value?: any): IteratorResult;
        throw(exception: any);
    }
    
### Unicode
Ora javascript ha pieno supporto a Unicode, incluso i nuovi letterali e le nuov RegExp in modalita     u   .

    "𠮷".length == 2

    "𠮷".match(/./u)[0].length == 2

    "\u{20BB7}"=="𠮷"=="\uD842\uDFB7"

    "𠮷".codePointAt(0) == 0x20BB7

    for(var c of "𠮷") {
        console.log(c);
    }
    
    
    
### Moduli
Javascript permette di definire moduli per la definizione di componenti, come le librerie di terze parti (AMD, CommonJS). Implicitamente utilizzano un modello asincrono, questo implica che l'esecuzione del codice non viene interrotta al caricamento dei moduli

    // lib/math.js
    export function sum(x, y)   {
        return x + y;
    }
    export var pi = 3.141593;

    //app.js
    import * as math "lib/math";
    alert("2π = " + math.sum(math.pi, math.pi));
    
    //otherApp.js
    import {sum, pi} from "lib/math";
    alert("2π = " + sum(pi, pi));
    
Delle features aggiuntive includono     export default e    export \*:

    // lib/mathplusplus.js
    export * from "lib/math";
    export var e = 2.7183;
    export default function (x) {
        return Math.exp(x);
    }
    
    //app.js
    import exp, {pi, e} from "lib/mathplusplus";
    alert("2π = " + exp(pi, e ));
    
    
    
    
    
    
    
    
    
    