import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Actividad } from 'src/app/interfaces/actividad';
import { ActividadService } from 'src/app/services/actividad.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
listActividades: Actividad[] = [];

  displayedColumns: string[] = ['cod_actividad', 'tipo_actividad', 'fecha_inicial', 'fecha_final','horas_dedicadas','calculo_horas','horas_total','descripcion','acciones'];
  dataSource = new MatTableDataSource<any>;


  constructor(private actividadServices:ActividadService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.cargarActividad();
  }

  cargarActividad(){
    this.listActividades = this.actividadServices.getActividad();
    this.dataSource= new MatTableDataSource(this.listActividades )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  eliminarActividad(index:number){
    console.log(index)
    this.actividadServices.eliminarActividad(index);
    this.cargarActividad();
    this._snackBar.open('La actividad fue eliminado con exito','',{
      duration: 1500,
      horizontalPosition:'center',
      verticalPosition:'top',
    })
  }

}
