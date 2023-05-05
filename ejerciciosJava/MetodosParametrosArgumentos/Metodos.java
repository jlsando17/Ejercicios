package MetodosParametrosArgumentos;

public class Metodos {
    
    //atributos
    int numero1;
    int numero2;
    int suma;
    int resta;
    int multiplicacion;
    int divicion;

    //metodos
    public void sumar2(int numero1, int numero2){
        suma=numero1+numero2;
    }
    public void restar2(int numero1, int numero2){
        resta=numero1-numero2;
    }
    public void multicar2(int numero1, int numero2){
        multiplicacion=numero1*numero2;
    }
    public void dividir2(int numero1, int numero2){
        divicion=numero1/numero2;
    }
    public void resultado2(){
        System.out.println("la suma es " + suma);
        System.out.println("la resta es " + resta);
        System.out.println("la multiplicacion es " + multiplicacion);
        System.out.println("la division es " + divicion);
    }




}
