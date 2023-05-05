const persona=[
    {nombre:"Jose Luis"},
    {apellido:"Sandoval Mojica"},
    {edad:32},
    {altura:1.72},
    {eresDesarrollador:true}
]

console.log(persona)

//Mi edad en una variable del objeto anterior
const miEdad=persona[2].edad
console.log(miEdad)

//objeto con mis datos personales y un nuevo objeto con los datos de amigos

const persona1=[
    {nombre:"Juan"},
    {apellido:"Perez"},
    {edad:30},
    {altura:1.72},
    {eresDesarrollador:true}
]
const persona2=[
    {nombre:"Sergio"},
    {apellido:"Roman"},
    {edad:15},
    {altura:1.72},
    {eresDesarrollador:true}
]

const amigos =persona.concat(persona1).concat(persona2)
console.log(amigos)

//ordenar por edad
amigos.sort((a,b)=>a.edad-b.edad)
console.log(amigos)