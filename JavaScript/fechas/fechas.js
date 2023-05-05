const fecha=new Date()
console.log(fecha)

//por milisegundos
const fecha2=new Date(672282000000)
console.log(fecha2)

//por numeros
const fecha3=new Date(1991,03,21,08,15,20)
console.log(fecha3)

//por string
const fecha4=new Date("april 21,1991 08:30:15")
console.log(fecha4)


//comparar fechas
const compararFecha= new Date > fecha4
console.log(compararFecha)

//comparar las fechas, se traducen a milisegundos y se comparan
const fecha5=new Date("april 21,1991 08:30:15")
const fecha6=new Date("april 21,1991 08:30:15")
console.log(fecha5===fecha6)
console.log(fecha5.getTime()===fecha6.getTime())

//Obtener el dia, mes y año de una fecha

console.log(fecha6.getDate())
console.log(fecha6.getMonth()+1)
console.log(fecha6.getYear())

//mostrar fecha en front
console.log(fecha6.toLocaleDateString())
