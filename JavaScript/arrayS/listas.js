//ordenar arrays
//.sort() MODIFICA EL ARRAY

//cambiar el orden
const array=[2,5,6,7,8,2,9]
array.sort((a,b)=>{
   return -1
})
console.log(array)

//ordenar el array ascendente // descendente cambiar el -1*+1 y el +1*-1
array.sort((a,b)=>{
    if(a<b){
        return -1
    }else if(a>b){
        return +1
    }else{ //si a===b
        return 0
    }
})
console.log(array)

//ordenar unicamente numericos //cambiar el orden b-a
const arrayNumerico =[4,5,2,3,1,9,7,2,8,2]
arrayNumerico.sort((a,b)=>a-b)
console.log(arrayNumerico)

///Array de objetos
const db=[
    {nombre:"jose", edad:31},
    {nombre:"josel", edad:33},
    {nombre:"josell", edad:3},
    {nombre:"josell", edad:1}
]
//
//db.sort((a,b)=>{
  //  if(a.edad<b.edad){
    //    return -1
    //}else if(a.edad>a.edad){
    //    return +1
    //}else{
     //   return 0
   // }
//})
//console.log(db)

db.sort((a,b)=>a.edad-b.edad)
console.log(db)

//compara listas
const arrayA=[4,3,2,5,85,45,5,-5,-9,-6]

//const resultado= arrayA.every(valor =>{
 //   if(typeof valor==="number"){
        ///////////////valor>0 el resultado seria false por los numeros negativos
 //       return true
  //  }else{
  //      return false
  //  }
//})
const resultado=arrayA.every(valor => typeof valor==="number")

console.log(resultado)




///COMPARACION DE LISTAS
const ar1=[1,2,3,4]
const ar2=[1,2,3,4]

const compararArray=(Array_1,Array_2)=>{
   if(Array_1.length !== Array_2.length)
   return false

   const resultado=Array_1.every((valor,i)=> valor ===Array_2[i])
   return resultado
}
console.log(compararArray(ar1,ar2))


//.SOME SI ALGUNO CUMPLE LA CONDICION
//si existe un numero negativo

const arrayB=[3,5,4,8,-1]

const resulta=arrayB.some(valor=>valor < 0)
console.log(resulta)

const existe=arrayB.some(valor=> valor===8)
console.log(existe)

//buscar un valor dentro de un objeto
const existeJose=db.some(persona=>persona.nombre==="jose")
console.log(existeJose)


//OBTENER UNA LISTA A PARTIR DE UN OBJETO ITERABLE
const strr="Hola soy Jose"
const ar_str=Array.from(strr)
console.log(ar_str)


