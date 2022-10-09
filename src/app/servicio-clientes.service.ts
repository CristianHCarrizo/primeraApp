import { Injectable } from '@angular/core';
import { Cliente } from './home/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioClientesService {

  clientes:Cliente[]=[];

  agregarServicioCliente(Cliente:Cliente){

    this.clientes.push(Cliente);
  }

  constructor() { }

      muestramensaje(mensaje: string){

      alert(mensaje);

    
  }


}
