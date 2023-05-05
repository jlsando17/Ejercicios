package MetodosParametrosArgumentos;

import javax.swing.JOptionPane;

public class Principal2 {

    public static void main(String[] args) {

        //Solicitar argumentos al usuario
        int n1=Integer.parseInt(JOptionPane.showInputDialog("numero 1"));
        int n2=Integer.parseInt(JOptionPane.showInputDialog("numero 2"));
        
        //crear objeto
        Metodos ope= new Metodos();
        

        //llamar metodos
        ope.sumar2(n1, n2);
        ope.restar2(n1, n2);
        ope.multicar2(n1, n2);
        ope.dividir2(n1, n2);
        //metodo sin argumentos
        ope.resultado2();

    }
    
}
