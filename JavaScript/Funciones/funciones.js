
const nombre="Jose"

saludar(nombre)

function saludar(nombre)
{
    console.log(`Hola ${nombre}`)

}

/////// objeto a una funcion

let persona={nombre:"Luis",apellido:"Mojica"}

saludarPersona(persona)

function saludarPersona(objeto){

    console.log(`hola ${objeto.nombre} ${objeto.apellido}`)

}


//valores por defecto

function imprimirNumero(numero=7){
    console.log(numero)
}
imprimirNumero()

///objetos inpredetermindos sumar calores
function suma(...nums){
    return nums.reduce((a,b) => a + b)

}
const resultado=suma(2, 2, 2, 3, 4)
console.log(resultado)




/////Multiplicar
function multiplicar(a=0,b=0){
    return a*b
}

const total=multiplicar(30,20)
console.log(total)
