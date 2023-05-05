package MetodoRetorno;

import javax.swing.JOptionPane;

public class Principal {
    

    public static void main(String[] args) {

        //Solicitar argumentos al usuario
        int n1=Integer.parseInt(JOptionPane.showInputDialog("numero 1"));
        int n2=Integer.parseInt(JOptionPane.showInputDialog("numero 2"));
        
        //crear objeto
        MetodoRetorno ope= new MetodoRetorno();
        

        //forma 1. llamar directamente / se debe eliminar el argumento del metodo resultado2 en la clase
        //MetodoRetorno
        System.out.println("la suma es "+ ope.sumar2(n1,n2));

        //forma 2. crear variables para guardar el resultado del llamado de los  metodos
        int rest=ope.restar2(n1, n2);
        int mul=ope.multicar2(n1, n2);
        int div=ope.dividir2(n1, n2);
        
        //metodo 
        ope.resultado2(rest, mul, div);

    }
    
}
