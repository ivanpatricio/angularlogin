import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearReportesComponent } from './reportes/crear-reportes/crear-reportes.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuariosComponent } from './usuarios/crear-usuarios/crear-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
//rutas 
const routes: Routes = [
  {path:'', component: DashboardComponent,children:[
  {path:'',component:InicioComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'reportes',component:ReportesComponent},
  {path:'crear-usuarios',component:CrearUsuariosComponent},
  {path:'crear-reportes',component:CrearReportesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
