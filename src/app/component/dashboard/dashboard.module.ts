import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuariosComponent } from './usuarios/crear-usuarios/crear-usuarios.component';
import { FooterComponent } from './inicio/footer/footer.component';
import { HeaderComponent } from './inicio/header/header.component';
import { ItemComponent } from './inicio/item/item.component';
import { MainComponent } from './inicio/main/main.component';
import { CrearReportesComponent } from './reportes/crear-reportes/crear-reportes.component';
import { Reporte1Component } from './reporte1/reporte1.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ReportesComponent,
    CrearUsuariosComponent,
    FooterComponent,
    HeaderComponent,
    ItemComponent,
    MainComponent,
    CrearReportesComponent,
    Reporte1Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
