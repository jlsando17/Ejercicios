package Metodos;

public class Principal {
    public static void main(String[] args) {
        
        //Creacion del objeto op
        Operacion op=new Operacion();
         
        //llamar a los metodos
        op.leerNumeros();
        op.sumar();
        op.restar();
        op.multicar();
        op.dividir();
        op.resultado();
    }
}
