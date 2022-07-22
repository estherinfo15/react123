export class Contact{
    nombre='';
    apellidos='';
    email='';
    status=false;

    constructor(nombre,apellidos,email,status){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.email=email;
        this.status=status;
    }
}