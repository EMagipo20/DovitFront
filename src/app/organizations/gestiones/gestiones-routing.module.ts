import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  {
    path: 'actualizar',
    component: ActualizarComponent
  },
  {
    path: 'nuevo',
    component: NuevoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionesRoutingModule { }
