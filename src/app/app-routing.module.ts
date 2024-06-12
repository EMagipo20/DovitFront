import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './donor/home/home.component';
import { CerrarSesionComponent } from './donor/cerrar-sesion/cerrar-sesion.component';
import { InicioComponent } from './organizations/inicio/inicio.component';
import { LoginComponent } from './Auth/login/login.component';
import { ListarComponent } from './Auth/listar/listar.component';
import { UserComponent } from './Auth/user/user.component';
import { SidenavComponent } from './organizations/sidenav/sidenav.component';
import { MenuComponent } from './donor/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'sidenav', component: SidenavComponent},
  { path: 'menu', component: MenuComponent},
  
  // Rutas para Donante
  { path: 'home', component: HomeComponent },
  {
    path: 'donaciones',
    loadChildren: () => import('./donor/donaciones/donaciones.module').then(m => m.DonacionesModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./donor/comentarios/comentarios.module').then(m => m.ComentariosModule)
  },
  {
    path: 'gestiones',
    loadChildren: () => import('./donor/gestiones/gestiones.module').then(m => m.GestionesModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./donor/settings/settings.module').then(m => m.SettingsModule)
  },
  { path: 'cerrar-sesion', component: CerrarSesionComponent },

  // Rutas para Organización
  { path: 'inicio', component: InicioComponent },
  {
    path: 'gestiones',
    loadChildren: () => import('./organizations/gestiones/gestiones.module').then(m => m.GestionesModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./organizations/proyectos/proyectos.module').then(m => m.ProyectosModule)
  },
  {
    path: 'foros',
    loadChildren: () => import('./organizations/foros/foros.module').then(m => m.ForosModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./organizations/configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule)
  },
  { path: 'cerrar-sesion', component: CerrarSesionComponent},

  // Manejar cualquier ruta desconocida
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
