import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionesRoutingModule } from './gestiones-routing.module';
import { GestionesComponent } from './gestiones.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ActualizarComponent } from './actualizar/actualizar.component';

@NgModule({
  declarations: [
    GestionesComponent,
    NuevoComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    GestionesRoutingModule
  ]
})
export class GestionesModule { }
