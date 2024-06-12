import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionesComponent } from './configuraciones.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { ConfiguracionesRoutingModule } from './configuraciones-routing.module';

@NgModule({
  declarations: [
    ConfiguracionesComponent,
    MiPerfilComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionesRoutingModule
  ]
})
export class ConfiguracionesModule { }
