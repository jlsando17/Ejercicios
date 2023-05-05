//hay que cambiar en el json 
//  "type":"module" ,

import {suma, nombre} from './modulos/matematicas.js'
//import * as moduloMatematicas from './modulos/matematicas.js'
import getAutor,{libro} from './modulos/literatura.js'

const sum=suma(4,9)
console.log(sum)

console.log(nombre)

console.log(getAutor())
console.log(libro)