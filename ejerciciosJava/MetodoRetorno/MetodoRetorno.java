package MetodoRetorno;

public class MetodoRetorno {
    
  //la clase metodo retorno no tendra metodos, solo atributos

   //metodos
   public int sumar2(int numero1, int numero2){
       int suma=numero1+numero2;
       return suma;
   }
   public int restar2(int numero1, int numero2){
    int resta=numero1-numero2;
    return resta;
   }
   public int multicar2(int numero1, int numero2){
    int multiplicacion=numero1*numero2;
    return multiplicacion;
   }
   public int dividir2(int numero1, int numero2){
    int divicion=numero1/numero2;
    return divicion;
   }
   //se le pasan los valores de las variables locales definidas anteriormente
   public void resultado2( int resta, int multiplicacion,int divicion){
       
       System.out.println("la resta es " + resta);
       System.out.println("la multiplicacion es " + multiplicacion);
       System.out.println("la division es " + divicion);
   }




}
