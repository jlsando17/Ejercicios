//obtener los valores
let str=new String("Soy sting")
console.log(str)
console.log(str.valueOf())

//NaN (not a number) -infinity   el valor no es divisible
let n=Number("adios")
console.log(n)
console.log(isNaN(n))

let numerador=19
let divisor=0

//console.log(numerador/divisior)

//convertir string a number
let an=5;
let bn="8.899";
console.log(an+Number(bn))
console.log(typeof Number(bn))
//parseint
console.log(parseInt(bn))
//parseFloat
console.log(parseFloat(bn))

//hexadecimales
let numHex='0x3a5b7'
console.log(parseInt(numHex))