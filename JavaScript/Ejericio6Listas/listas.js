//Variable con lista de elemetos de compra
//Autor Jose Luis Sandoval

const compra=["arroz","leche","pan","huevos","carne"]
console.log(compra)

//Agregar ACEITE DE GIRASOL
venta=compra.push("ACEITE DE GIRASOL")
console.log(compra)

//Eliminar ACEITE DE GIRASOL
ventaTotal=compra.pop()
console.log(compra)

//Lista de 3 peliculas favoritas
const peliculas=[
    {nombre:"fast and furious",director:"Justin Lin",fecha:2009},
    {nombre:"Mario",director:"Aaron Horvath",fecha:2023},
    {nombre:"vertigo",director:"Alfred Hitchcock",fecha:2022}
]
console.log(peliculas)


//filtro de peliculas con fecha mayor a 2010
const fechaPeliculas=peliculas.filter(date=>date.fecha>2010)
console.log(fechaPeliculas)

//directores de las peliculas
const directores=peliculas.map((valor,indice)=>`${indice+1}-${valor.director}`)
console.log(directores)

//titulos de las peliculas
const titulos=peliculas.map((valor,indice)=>`${indice+1}-${valor.nombre}`)
console.log(titulos)

//concatenar lista de directores y titulos
const listaDirectores=["Justin Lin","Aaron Horvath","Alfred Hitchcock"]
const listaTitulos=["fast and furious","Mario","vertigo"]

const listaGral=listaDirectores.concat(listaTitulos)
console.log(listaGral)

//lista de directores y titulos usando factor de propagacion
const listaGral2=[...listaDirectores,...listaTitulos]
console.log(listaGral2)