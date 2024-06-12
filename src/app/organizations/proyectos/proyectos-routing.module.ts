import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';

const routes: Routes = [
  {
    path: 'mis-proyectos',
    component: MisProyectosComponent
  },
  {
    path: 'nuevo-proyecto',
    component: NuevoProyectoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }