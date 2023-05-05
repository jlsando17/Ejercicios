let lista=[1,2,3,4,5,6,7,8,9];

for(let i=0;i<lista.length;i++)
{
    if(lista[i]===3){
       continue;
    }
    if(lista[i]>7){
        break;
    }
    console.log(lista[i])
}

//bucle emergencia no recomendado por buenas practicas
let unidades=1
let decenas=0

bucleDecenas: while(true){
    bucleUnidades:while(true){
        console.log(`decenas:${decenas}, unidades:${unidades}`)
        unidades++
        if(unidades===11){
            unidades=1
            break bucleUnidades
        }
        if(decenas ===2 && unidades===6){
            break bucleDecenas
        }
    }
    decenas++
}
console.log("finish")
