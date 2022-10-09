import { Component} from '@angular/core';
import { Cliente } from './cliente.model';
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


}
