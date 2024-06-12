import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisComentariosComponent } from './mis-comentarios/mis-comentarios.component';
import { NuevoComentarioComponent } from './nuevo-comentario/nuevo-comentario.component';

const routes: Routes = [
  {
    path: 'mis-comentarios',
    component: MisComentariosComponent
  },
  {
    path: 'nuevo-comentario',
    component: NuevoComentarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentariosRoutingModule { }
