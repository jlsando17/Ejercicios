//SET garnatiza q no se repliquen los datos
const array=[1,2,5,4,4,3]

const miSet=new  Set(array)
console.log(miSet)

//añadir valores
miSet.add(9)
console.log(miSet)

//eliminar valores
miSet.delete(9)
console.log(miSet)

//limpiar set clear
//miSet.clear()
//console.log(miSet)

//verificar si existe un valor
console.log(miSet.has(4))

//cuantos valores existen en el arreglo
console.log(miSet.size)

miSet.forEach(valor=>{
    console.log(valor)
})

//convertir el set en un array nuevamente
const newArray=[...miSet]
console.log(newArray[2])
console.log(newArray)