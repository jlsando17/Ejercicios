//Altura en centimetros con valor entero
let altura=1.72
let alturaEntero=parseInt(altura)
console.log(alturaEntero)

//altura en metros con coma flotante
let alturaFlotante=parseFloat(altura)
console.log(alturaFlotante+" metros")
console.log(typeof alturaFlotante)

//peso con variable flotante
let peso=75.433
let pesoFlotante=parseFloat(peso)
console.log(pesoFlotante)

//altura redondeada hacia arriba
console.log(Math.round(altura))

//peso redondeado hacia abajo
console.log(Math.floor(peso))

//valor maximo de js + 1
let valorMaximo=Number.MAX_VALUE;
console.log(valorMaximo)

//sumar 1 a la variable que contiene el valor maximo
let valorMaximoMas1=valorMaximo + 1;
console.log(valorMaximoMas1)

//condicional
if(valorMaximo===valorMaximoMas1){
    console.log("si");
}else{
     console.log("no")
    }
