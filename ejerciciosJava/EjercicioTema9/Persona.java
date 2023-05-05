package EjercicioTema9;

public class Persona {
    
    private String nombre;
    private int edad;
    private String telefono;

    public void setNombre(String nombre){
        this.nombre=nombre;
    }

    public String getNombre(){
        return nombre;
    }

    public void setEdad(int edad){
        this.edad=edad;
    }

    public int getEdad(){
        return edad;
    }

    public void setTelefono(String telefono){
        this.telefono=telefono;
    }

    public String getTelefono(){
        return telefono;
    }
}