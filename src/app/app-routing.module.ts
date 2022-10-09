import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroFormularioComponent } from './registro-formulario/registro-formulario.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'iniciarsesion', component: IniciarSesionComponent},
  {path: 'registro', component: RegistroFormularioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
