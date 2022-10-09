import { Component} from '@angular/core';
import { Cliente } from '../home/cliente.model';
import { ServicioClientesService } from '../servicio-clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  titulo = 'Lista de Clientes';

  constructor(private miServicio:ServicioClientesService){
    this.clientes=this.miServicio.clientes;
  }

  clientes:Cliente[]=[];

    //new Cliente("Cristian", "Carrizo", "criiscar@gmail.com", 37642782, 14041995, 3835690739, "Catamarca"),
//];

  agregarCliente(){
    let miCliente=new Cliente(this.cuadroNombre, this.cuadroApellido, this.cuadroEmail, this.cuadroDNI, this.cuadroFechaDeNacimiento, this.cuadroTelefono, this.cuadroDireccion);
    this.miServicio.muestramensaje(miCliente.Nombre + ", tu registro fue exitoso.");
    this.miServicio.agregarServicioCliente(miCliente);
    

  };

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroEmail:string="";
  cuadroDNI:number=0;
  cuadroFechaDeNacimiento:number=0;
  cuadroTelefono:number=0;
  cuadroDireccion:string="";


}
