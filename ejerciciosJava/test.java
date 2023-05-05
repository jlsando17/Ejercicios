public class test {

    public static void main(String[] args) {
        var dia="sabado";


            switch(dia){
            case  "lunes":
            case  "martes":
            case  "miercoles":
            case  "jueves":
             case  "viernes":
           System.out.println("dia laborable");
            break;
            case  "sabado":
            case  "domingo":
            System.out.println("dia de descanso");
            break;
       default: 
         System.out.println("no es un dia de la semana");
         break;
     }
    }
    
}
