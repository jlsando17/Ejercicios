const logger= require('./logger')

logger.info("message info")
logger.warn("advertencia")
logger.debug("debug")
logger.error("error")

const miFuncion=val=> {
    if (typeof val ==="number"){
    return 2* val
    }
    throw new Error("no es un numero")
}

//console.log(miFuncion("2f"))
const numero="3e"
try{
   const multi=miFuncion(numero)
   console.log(multi)
} catch(e){
   console.error("Error")
   console.error(`tipo de error ${e}`)
}finally{
    console.log("se ejecuta siempre")
}