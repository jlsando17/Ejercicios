package EjerciciosTema4;

public class SwichEstacion {
    
    public static void main(String[] args) {
    
    var estacion="invierno";

     switch(estacion){
        case  "otoño":
        case  "invierno":
        case  "verano":
        case  "primavera":
         System.out.println(estacion);
         break;
         default: 
         System.out.println("NO INGRESO UNA ESTACION DEL AÑO VALIDA / VERIFIQUE");
        }
    }
}