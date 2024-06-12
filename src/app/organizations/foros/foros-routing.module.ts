import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisPostsComponent } from './mis-posts/mis-posts.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { ForosListaComponent } from './foros-lista/foros-lista.component';

const routes: Routes = [
  {
    path: 'foros-lista',
    component: ForosListaComponent
  },
  {
    path: 'mis-posts',
    component: MisPostsComponent
  },
  {
    path: 'nuevo-post',
    component: NuevoPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForosRoutingModule { }
