let array=[1,2,"hola",false]
console.log(array[2])

//introducir nuevos valores en el array al final
array.push("final")
console.log(array)

//agregar al inicio
array.unshift("inicio")
console.log(array)

//eliminar valores al final
array.pop()
console.log(array)

//eliminar valores al inicio
array.shift()
console.log(array)

//metodo splice elimina datos, indica el comienzo y la cantidad de elementos
array2=[1,2,3,4,5,6]
array2.splice(2,2)
console.log(array2)

//añadir valores 
array3=[1,2,3,4,5,6]
array3.splice(2,0,"hola","bebe")
console.log(array3)

//sustituir valores
array3.splice(2,2,3)
console.log(array3)

//unir dos listas
const lista1=["hola",1,2,3,false]
const lista2=["como estas",4,5,6,7,true]
const lista3=(lista1.concat(lista2))
console.log(lista3)

//factor de propagacion // eliminar los corchetes

const lista4 =[...lista1,...lista2]
console.log(...lista4)

 //optener lista a partir de otra lista
 console.log(lista4.slice(2,6))

 //los ultimos valores de la lista
 console.log(lista4.slice(5,-2))

 //iterar los valores de la lista
 let suma=0
 const array5=[1,2,3,4,5,6,7,8]
array5.forEach(valor=>{
    suma+=valor
    console.log(valor)
})
console.log(suma)

//busqueda de un valor
const variable=array5.find(valor=> {
    if (valor===7){
        return true
    }
})
console.log(variable)

//encontrar un objeto dentro de una serie de listas
const listaObjeto =[
    {nombre:"jose", edad:31},
    {nombre:"luis", edad:32},
    {nombre:"sandoval", edad:33},
    {nombre:"josel", edad:3},
    {nombre:"luisl", edad:2},
    {nombre:"sandovall", edad:53}
]
const objeto=listaObjeto.find( o=>{
    if(o.nombre==="jose"){
        return true
    }
})
console.log(objeto)
//simplificada
const objeto2=listaObjeto.find( o=>{
        return o.nombre==="jose"
      })
console.log(objeto2)
//mas simplificada
const objeto3=listaObjeto.find( o => o.nombre==="jose")
console.log(objeto3)

//traer la un atributo de un arreglo
const {edad}=listaObjeto.find(o=> o.nombre==="jose")
console.log(edad)


//////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//Agregar valores o indices al array
const paises=["colombia","peru","bolivia","Venezuela","paris"]

const newarray =paises.map((valor,indice)=>`${indice+1}-${valor}`)
console.log(newarray)


//utilizar un filtro
const mayores=listaObjeto.filter(obj=>{
    if(obj.edad>32){
        return true
    }else{
        return false
    }
})
console.log(mayores)
//simplificado
const menores=listaObjeto.filter(obje=>obje.edad<30)
console.log(menores)

//eliminar un objeto de la lista
const sinJose=listaObjeto.filter(ob=>ob.nombre!=="jose")
console.log(sinJose)

/////////////////////////////////////////////////////////////////////////////////
//sumar un array

const valores2=[5,2,3,6]

const suma2=valores2.reduce((acumulado,curr,iterad,arrayOriginal)=>{
    console.log(acumulado)
    console.log(curr)
    console.log(iterad)
    console.log(arrayOriginal)
    return acumulado+curr
})
console.log(suma2)