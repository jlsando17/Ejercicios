package Constructor;

public class Persona {
    
    //atributos
    String nombre;
    int edad;

    //metodo constructor no se pone void en los otros si / llevan los atributos
    public Persona(String nombre, int _edad){
      
        //atributos del metodo _nombre sera el valor que recibe el constructor
        //si los voy a llamar igual que la variable le pongo this.nombre
        this.nombre= nombre;
        edad= _edad;
    }

    //otro metodo
    public void mostrarDatos(){
        System.out.print("el nombre es "+nombre+" / ");
        System.out.print("la edad "+edad);
    }
    
}
