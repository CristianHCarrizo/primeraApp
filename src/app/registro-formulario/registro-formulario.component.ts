import { Component, OnInit } from '@angular/core';
import { Cliente } from '../home/cliente.model';
import { ServicioClientesService } from '../servicio-clientes.service';

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.css']
})
export class RegistroFormularioComponent implements OnInit {  titulo = 'Lista de Clientes';

constructor(private miServicio:ServicioClientesService){
  this.clientes=this.miServicio.clientes;
}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

clientes:Cliente[]=[];


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

