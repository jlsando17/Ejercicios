package Metodos;

import javax.swing.JOptionPane;

public class Operacion {
    //atributos
    int numero1;
    int numero2;
    int suma;
    int resta;
    int multiplicacion;
    int divicion;

    //metodos
    public void leerNumeros(){
        numero1=Integer.parseInt(JOptionPane.showInputDialog("primer numero"));
        numero2=Integer.parseInt(JOptionPane.showInputDialog("segundo numero"));
    }

    public void sumar(){
        suma=numero1+numero2;
    }
    public void restar(){
        resta=numero1-numero2;
    }
    public void multicar(){
        multiplicacion=numero1*numero2;
    }
    public void dividir(){
        divicion=numero1/numero2;
    }
    public void resultado(){
        System.out.println("la suma es " + suma);
        System.out.println("la resta es " + resta);
        System.out.println("la multiplicacion es " + multiplicacion);
        System.out.println("la division es " + divicion);
    }




}
