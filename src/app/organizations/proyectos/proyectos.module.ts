import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';

@NgModule({
  declarations: [
    ProyectosComponent,
    MisProyectosComponent,
    NuevoProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ]
})
export class ProyectosModule { }
