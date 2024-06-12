import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForosComponent } from './foros.component';
import { MisPostsComponent } from './mis-posts/mis-posts.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { ForosRoutingModule } from './foros-routing.module';
import { ForosListaComponent } from './foros-lista/foros-lista.component';

@NgModule({
  declarations: [
    ForosComponent,
    ForosListaComponent,
    MisPostsComponent,
    NuevoPostComponent
  ],
  imports: [
    CommonModule,
    ForosRoutingModule
  ]
})
export class ForosModule { }
