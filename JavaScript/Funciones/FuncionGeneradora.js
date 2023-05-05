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
