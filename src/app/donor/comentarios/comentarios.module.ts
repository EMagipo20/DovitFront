import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { ComentariosComponent } from './comentarios.component';
import { NuevoComentarioComponent } from './nuevo-comentario/nuevo-comentario.component';
import { MisComentariosComponent } from './mis-comentarios/mis-comentarios.component';

@NgModule({
  declarations: [
    ComentariosComponent,
    MisComentariosComponent,
    NuevoComentarioComponent
  ],
  imports: [
    CommonModule,
    ComentariosRoutingModule
  ]
})
export class ComentariosModule { }
