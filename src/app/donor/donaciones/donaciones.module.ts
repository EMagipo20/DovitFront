import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { DonacionesComponent } from './donaciones.component';
import { NuevaDonacionComponent } from './nueva-donacion/nueva-donacion.component';
import { MisDonacionesComponent } from './mis-donaciones/mis-donaciones.component';



@NgModule({
  declarations: [
    DonacionesComponent,
    MisDonacionesComponent,
    NuevaDonacionComponent
  ],
  imports: [
    CommonModule,
    DonacionesRoutingModule
  ]
})
export class DonacionesModule { }
