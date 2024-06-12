import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarRegistroComponent } from './actualizar-registro/actualizar-registro.component';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';

const routes: Routes = [
  {
    path: 'actualizar-registro',
    component: ActualizarRegistroComponent
  },
  {
    path: 'nuevo-registro',
    component: NuevoRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionesRoutingModule { }
