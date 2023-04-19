import { Injectable } from '@angular/core';
import { Actividad } from '../interfaces/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  listActividades: Actividad[] = [
    {cod_actividad:1, tipo_actividad: 'proyecto', fecha_inicial:'12-02-2023', fecha_final:'22-03-2023',horas_dedicadas: 8, calculo_horas: 120, horas_total: 112,descripcion:'proyecto web'},
   {cod_actividad:2, tipo_actividad: 'testing', fecha_inicial:'11-01-2023', fecha_final:'10-02-2023',horas_dedicadas: 43,calculo_horas: 100, horas_total: 57, descripcion:'pruebas unitarias'},
   {cod_actividad:3, tipo_actividad: 'testing', fecha_inicial:'11-01-2023', fecha_final:'10-02-2023',horas_dedicadas: 120,calculo_horas: 80, horas_total: +40, descripcion:'pruebas unitarias'},
   {cod_actividad:4, tipo_actividad: 'testing', fecha_inicial:'11-01-2023', fecha_final:'10-02-2023',horas_dedicadas: 8, calculo_horas: 160, horas_total: 152,descripcion:'pruebas unitarias'},
  ];

  constructor() { }
  getActividad(){
    return this.listActividades.slice();
  }

  eliminarActividad(index:number){
    this.listActividades.splice(index,1);
  }
  agregarActividad(actividad: Actividad){
    this.listActividades.unshift(actividad);
  }
}
