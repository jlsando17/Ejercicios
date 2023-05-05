//funcion que sin parametros que siempre devuelve true
function verdad (){
    return true
}
verdad();
console.log(verdad())

//Funcion asincronica que utilice setTimeout 
//y pase por consola un "Hola soy una promesa" 5 segundos despues de haberse ejecutado


//promesa
const miPromesa= new Promise ((resolve, reject) =>{
    setTimeout(function(){
        console.log("temporizador")
    },5000)
})
miPromesa
   .then(()=> console.log("every ok"))
   .catch(()=>console.log("warring"))
   .finally(()=>console.log("footer"))

   //funcion generaqdora de indices automaticos
//funciones generadoras
//funciones generadoras
function* generaId(){
    let id=0;
    while(true){
        id++
        //espera hasta ser llamada
         if(id===4){
             return id
         }
         yield id 

    }
}

const gen =generaId();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)