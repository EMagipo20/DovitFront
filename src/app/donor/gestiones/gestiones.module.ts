import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionesRoutingModule } from './gestiones-routing.module';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { ActualizarRegistroComponent } from './actualizar-registro/actualizar-registro.component';
import { GestionesComponent } from './gestiones.component';

@NgModule({
  declarations: [
    GestionesComponent,
    ActualizarRegistroComponent,
    NuevoRegistroComponent
  ],
  imports: [
    CommonModule,
    GestionesRoutingModule
  ]
})
export class GestionesModule { }