package EjerciciosTema8;



public class Clase2 {
    public static void main(String[] args) {
        Clase1 persona= new Clase1();

        persona.setNombre("Jose Luis Sandoval");
        persona.setEdad(30);
        persona.setTelefono("32140573");
        


        System.out.println
        ("Nombre de la persona : " + persona.getNombre() + "\n"+
        "La edad es : " + persona.getEdad() + " años "+ "\n"+
        "su Telefono es : " + persona.getTelefono());
    }
}
