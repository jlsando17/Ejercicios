
//Array

const lista=[ 1, 'hola'];
const lista2=new Array(2,'caribe')
const lista3=new Array(2)
lista3[0]="3, index 0,2,3";
const lista4=[lista,lista2,lista3];


console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)


//obbjetos

const movil={
    altura:10,
    marca:"xiaomi",
    tarjeta:{
        marca:"sandisk",
        almacenamineto:32,
    }
};
console.log(movil.tarjeta.marca)


//fechas

const ahora=new Date();
console.log(ahora);

const fecha_cadena=new Date("march 25 2023");
console.log(fecha_cadena)

const fecha_valores= new Date(2023, 3, 15)
console.log(fecha_valores)

const dia=ahora.getDate()
const mes=ahora.getMonth()+1
const anyo=ahora.getFullYear()
console.log(dia, mes, anyo)

