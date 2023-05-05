//formas de importar y exportar modulos
//1- commonJS - require
//2- import ES6 - import

//1 forma
//const moduloMatematicas=require("./modulos/matematicas.js")
//const fact=moduloMatematicas.factorial(5)
//console.log(fact)
//const sum=moduloMatematicas.suma(10,20)
//console.log(sum)

//2 forma
const {factorial, suma, eleva}= require("./modulos/matematicas.js")

const fact=factorial(5)
console.log(fact)

const sum=suma(10,20)
console.log(sum)

const el=eleva(2,2)
console.log(el)