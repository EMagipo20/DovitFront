import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './donor/home/home.component';
import { MenuComponent } from './donor/menu/menu.component';
import { SidenavComponent } from './organizations/sidenav/sidenav.component';
import { StructureComponent } from './organizations/structure/structure.component';
import { SublevelSidenavComponent } from './organizations/sidenav/sublevel-sidenav.component';
import { BodyComponent } from './donor/body/body.component';
import { SublevelMenuComponent } from './donor/menu/sublevel-menu.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { InicioComponent } from './organizations/inicio/inicio.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    SublevelMenuComponent,
    HomeComponent,
    InicioComponent,
    SublevelSidenavComponent,
    StructureComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent ]
})
export class AppModule { }