const obj={
    id:4,
    nombre:"daniela",
    apellido:"Barra",
    isDeveloper:true,
    libros:["el oro","el fin de todo"],
    "juegos":[1,2,3,4]
}
console.log(obj.juegos)

///////////////////////////////
//ASIGNACION EN MEMORIA A LOS OBJETOS
////////////////////////////////////////
const obj3={...obj}
obj3.nombre="Maria"

console.log(obj.nombre)
console.log(obj3.nombre)
////////////////////////////////

const obj2=obj
obj2.nombre="Claudia"

console.log(obj.nombre)
console.log(obj2.nombre)




//////////////////////
//////////////////////
////ORDENAR OBJETOS SEGUN UNA PROPIEDAD

const listaPeliculas=[
    {titulo:"aelicula", anyio:2019},
    {titulo:"belicula", anyio:2018},
    {titulo:"celicula", anyio:2017},
    {titulo:"delicula", anyio:2010},
    {titulo:"eelicula", anyio:2009},
]
listaPeliculas.sort((a,b)=>a.anyio- b.anyio)
console.log(listaPeliculas)

//listaPeliculas.sort((a,b)=>a.titulo - b.titulo)
//console.log(listaPeliculas)