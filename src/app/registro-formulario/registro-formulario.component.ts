import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime } from 'rxjs';
import { Cliente } from '../home/cliente.model';
import { ServicioClientesService } from '../servicio-clientes.service';

@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.css']
})
export class RegistroFormularioComponent implements OnInit {  
  titulo = 'Lista de Clientes';
  formRegistro: FormGroup;

constructor(private formBuilder: FormBuilder, private miServicio:ServicioClientesService, private router:Router){
  this.clientes=this.miServicio.clientes;
  this.buildForm();
}

ngOnInit(): void {
}

clientes:Cliente[]=[];


agregarCliente(){
  let miCliente=new Cliente(this.cuadroNombre, this.cuadroApellido, this.cuadroEmail, this.cuadroDNI, this.cuadroFechaDeNacimiento, this.cuadroTelefono, this.cuadroDireccion);
  this.miServicio.muestramensaje(miCliente.Nombre + ", tu registro fue exitoso.");
  this.miServicio.agregarServicioCliente(miCliente);

  this.router.navigate(['home'])
  

};

cuadroNombre:string="";
cuadroApellido:string="";
cuadroEmail:string="";
cuadroDNI:number=0;
cuadroFechaDeNacimiento:number=0;
cuadroTelefono:number=0;
cuadroDireccion:string="";

private buildForm() {
  this.formRegistro = this.formBuilder.group({
      nombre: ['',  [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required]],
      fechadenacimiento: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });

this.formRegistro.valid
this.formRegistro.invalid

  this.formRegistro.valueChanges
  .pipe(
    debounceTime(500)
  )
  .subscribe(value => {
    console.log(value);
  });
}

save(event: Event) {
  event.preventDefault();
  if (this.formRegistro.valid) {
    const value = this.formRegistro.value;
    console.log(value);
  }
}

}

