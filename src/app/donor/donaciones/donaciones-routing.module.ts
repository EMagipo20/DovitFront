import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisDonacionesComponent } from './mis-donaciones/mis-donaciones.component';
import { NuevaDonacionComponent } from './nueva-donacion/nueva-donacion.component';

const routes: Routes = [
  {
    path: 'mis-donaciones',
    component: MisDonacionesComponent
  },
  {
    path: 'nueva-donacion',
    component: NuevaDonacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionesRoutingModule { }
