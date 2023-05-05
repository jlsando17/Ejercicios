//funciones asincronas

function miAsync(){

}

//promesa
const miPromesa= new Promise ((resolve, reject) =>{
    const i= 3 * 3
    //si esta todo ok
    if(i ===6){
        resolve()
    }else {
        reject()
    }
})

//primera opcion
miPromesa
   .then(()=> console.log("every ok"))
   .catch(()=>console.log("warring"))
   .finally(()=>console.log("footer"))