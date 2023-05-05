package EjercicioTema9;

public class Principal  {

    public static void main(String[] args) {
        Cliente persona1= new Cliente();
        Trabajador persona2= new Trabajador();


        // Clase CLIENTE hereda de PERSONA
        persona1.setNombre("Jose Luis Sandoval");
        persona1.setEdad(30);
        persona1.setTelefono("32140573");
        persona1.setCredito(20000);
        
        System.out.println
        ("Listado de CLIENTES "+"\n" + 
        "Nombre de la persona : " + persona1.getNombre() + "\n"+
        "La edad es : " + persona1.getEdad() + " años "+ "\n"+
        "su Telefono es : " + persona1.getTelefono() +"\n" +
        "Tiene un credito de : "+ " $" + persona1.getCredito() + "\n");
     



        // Clase TRABAJADOR hereda de PERSONA
          persona2.setNombre("Cristiano Ronaldo");
          persona2.setEdad(38);
          persona2.setTelefono("7728047");
          persona2.setSalario(300000);
     
          System.out.println
          ("Listado de TRABAJADORES "+"\n" + 
          "Nombre de la persona : " + persona2.getNombre() + "\n"+
          "La edad es : " + persona2.getEdad() + " años "+ "\n"+
          "su Telefono es : " + persona2.getTelefono() +"\n" +
          "Tiene un salario de : "+ " $" + persona2.getSalario());
  }
        
}
    

