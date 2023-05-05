//declaracion de variables
let TuNombre="  Jose Luis    "
let TuApellido=" Sandoval Mojica   "
let ocupacion=" EstuDianTe    "

//concatenar variables
let persona=`${ocupacion} ${TuNombre} ${TuApellido}`
console.log(persona)

//Nombre en mayuscula
let nombreMayuscula = ocupacion.toUpperCase();
console.log(nombreMayuscula)

//Nombre en minuscula
let nombreMinuscula=ocupacion.toLowerCase();
console.log(nombreMinuscula)

let persona2=`${nombreMayuscula} ${TuNombre} ${TuApellido}`
console.log(persona2)

//Contar espacios  del string ocupacion=estudiante
let contarCaracteres=ocupacion.length
console.log(contarCaracteres)

//eliminar espacios inicio y final de la variable ocupacion=estudiante
let nombreSinEspacios=ocupacion.trim().length;
console.log(nombreSinEspacios)

//eliminar espacios solo al inicio / al final
let sinEspaciosInicio=ocupacion.trimStart().length;
console.log(sinEspaciosInicio)

let sinEspaciosFinal=ocupacion.trimEnd().length;
console.log(sinEspaciosFinal)

//Primer letra del nombre, le quitamos primero los espacios y despues seleccionamos la primer posicion cero
let nombreSinEspacio=TuNombre.trim()
let primerLetra=nombreSinEspacio.charAt(0)
console.log(primerLetra)

//ultima letra del apellido, le quitamos primero los espacios, contamos cuantos caracteres tiene apellido y despues seleccionamos la primer posicion cero
let apellidoSinEspacio=TuApellido.trim()
let contarApellido=apellidoSinEspacio.trim().length
console.log(contarApellido)
let ultimaLetra=apellidoSinEspacio.charAt(14)
console.log(ultimaLetra)


/*Booleano si los dos son iguales
Quitamos los espcaio si se ingresaron en la variable nombre, despues se convierte en minusculas 
para compararlo con el de la base de datos que se llama estudiante2
*/
//Quitamos los espacios de las dos variables
let TunombreSinEspacios=TuNombre.trim()
let ocupacionSinEspacios=ocupacion.trim()
//convertimos las variables en minusculas y las comparamos
let comparativaNombres=TunombreSinEspacios.toLowerCase()===ocupacionSinEspacios.toLowerCase()
console.log(comparativaNombres)

//Si en ocupacion y Tu nombre ponemos los mismos nombres la comparacion sera verdadera
