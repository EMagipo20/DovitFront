import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurarPerfilComponent } from './configurar-perfil/configurar-perfil.component';

const routes: Routes = [
  {
    path: 'configurar-perfil',
    component: ConfigurarPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
