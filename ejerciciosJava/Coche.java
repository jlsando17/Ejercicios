public class Coche {
    int puertas;

    public static void main(String[] args){

        Coche miCoche = new Coche();

        miCoche.puertas= 0;
        System.out.println("La cantidad de puertas inicial es : "+ miCoche.puertas);
        
        miCoche.puertas ++;
        System.out.println("INCREMENTADNO UNA PUERTA ");
        System.out.println("La cantidad de puertas es : "+ miCoche.puertas);
    }
}
