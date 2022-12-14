import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioClientesService } from './servicio-clientes.service';
import { RegistroFormularioComponent } from './registro-formulario/registro-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IniciarSesionComponent,
    HomeComponent,
    RegistroFormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
  ],
  providers: [ServicioClientesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
