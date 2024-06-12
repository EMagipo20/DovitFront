import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ConfigurarPerfilComponent } from './configurar-perfil/configurar-perfil.component';


@NgModule({
  declarations: [
    SettingsComponent,
    ConfigurarPerfilComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
