//fecha de Hoy
const fecha=new Date();
console.log("la fecha de hoy es :",fecha)

//Mi fecha de nacimiento
const Nacimiento= new Date(1991,03,20)
console.log(Nacimiento)

//hoy es mas tarde que mi fecha de nacimiento
const validacionFecha=fecha.getTime()>Nacimiento.getTime()
console.log(validacionFecha)

//variable con mi mes de nacimiento
const mesNacimiento=Nacimiento.getMonth();
console.log(mesNacimiento)

//variable con el años de nacimiento
const anyoNacimiento=Nacimiento.getFullYear()
console.log(anyoNacimiento)