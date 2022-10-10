import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { ServicioClientesService } from '../servicio-clientes.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder, private miServicio:ServicioClientesService){
    this.buildForm();
  }

  ngOnInit(): void {
  }


  private buildForm() {
    this.formLogin = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        contraseña: ['', [Validators.required]],
      });

  this.formLogin.valid
  this.formLogin.invalid

  this.formLogin.valueChanges
  .pipe(
    debounceTime(500)
  )
  .subscribe(value => {
    console.log(value);
  });
}

save(event: Event) {
  event.preventDefault();
  if (this.formLogin.valid) {
    const value = this.formLogin.value;
    console.log(value);
  }
}
login(){
  this.miServicio.muestramensaje("Su sesión ha sido iniciada con éxito");
  this.router.navigate([''])
}


}
