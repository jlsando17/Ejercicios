public class Funciones {
    public static void main (String[] args){
       int num1=3;
       int num2=4;
       int num3=4;

       int resultado=suma(num1,num2,num3);

       System.out.println ("resultado : "+resultado);
    }

    public static int suma(int num1,int num2, int num3){
        return num1+num2+num3;
    }
}