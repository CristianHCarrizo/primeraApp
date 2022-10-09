export class Cliente{

    constructor(Nombre:string, Apellido:string, Email:string, DNI:number, FechaDeNacimiento:number, Telefono:number, Direccion:string){
        
        this.Nombre=Nombre;
        this.Apellido=Apellido;
        this.Email=Email;
        this.DNI=DNI;
        this.FechaDeNacimiento=FechaDeNacimiento;
        this.Telefono=Telefono;
        this.Direccion=Direccion;

    }

    Nombre:string="";
    Apellido:string="";
    Email:string="";
    DNI:number=0;
    FechaDeNacimiento:number=0;
    Telefono:number=0;
    Direccion:string="";
    




}