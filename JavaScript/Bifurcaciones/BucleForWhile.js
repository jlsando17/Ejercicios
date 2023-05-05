

for (let i=0;i<10;i++){
    console.log(i)
}
//recorrer una lista
let lista=[1,2,3,4,5,6];
for(let i=0;i< lista.length;i++){
    console.log(lista[i])
}
//forma dinamica
for(let valor of lista){
    console.log(valor)
}

lista.forEach(valor =>{
    console.log(valor)
})

//estructura for in
let persona={
    nombre:"JOse",
    edad:32,
    isDeveloper:true
}
for(let datos in persona){
    console.log(datos);
    console.log(persona[datos])
}

//while
let i=0;
let max =10;

while (i<max){
    console.log(i);
    i++;
}