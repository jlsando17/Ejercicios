//operaciones aritmeticas

let a =3.5;
let b=4.8;
console.log(a+b)
console.log(a-b)
console.log((Math.round(a-b)*100/100))
console.log(a/b)


//convertir number a string
console.log(typeof a)
let newA=a.toString();
console.log(typeof newA)


//seleccionar cuantos decimales
let f=a/b
console.log(f)
g= f.toFixed(3)
console.log(g)
console.log(typeof g)

//obtener cifras significativas
h=13312.2312
console.log(h.toPrecision(7))