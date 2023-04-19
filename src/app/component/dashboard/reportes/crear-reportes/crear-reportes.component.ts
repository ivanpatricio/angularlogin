import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/interfaces/actividad';
import { ActividadService } from 'src/app/services/actividad.service';

@Component({
  selector: 'app-crear-reportes',
  templateUrl: './crear-reportes.component.html',
  styleUrls: ['./crear-reportes.component.css']
})
export class CrearReportesComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, 
        private actividadService: ActividadService, private router:Router, private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      tipo_actividad: ['', Validators.required],
    cod_actividad: ['', Validators.required],
    fecha_inicial: ['', Validators.required],
    fecha_final: ['', Validators.required],
    horas_dedicadas:['', Validators.required],
    descripcion: ['', Validators.required],
    Estado:['', Validators.required],
    calculo_horas:['', Validators.required],
    horas_total:['', Validators.required],
    });
  }
  ngOnInit(): void {

  }
  agregarActividad(){
    const user: Actividad={
      tipo_actividad: this.form.value.tipo_actividad,
      cod_actividad: this.form.value. cod_actividad,
      fecha_inicial: this.form.value. fecha_inicial,
      fecha_final: this.form.value. fecha_final,
      horas_dedicadas: this.form.value.horas_dedicadas,
      descripcion: this.form.value.descripcion,
      calculo_horas:this.form.value.calculo_horas,
      horas_total: this.form.value.horas_total,
    }
    this.actividadService.agregarActividad(user);
    this.router.navigate(['/dashboard/reportes'])

    this._snackBar.open('La actvidad fue agregada con exito','',{
      duration: 1500,
      horizontalPosition:'center',
      verticalPosition:'top',
    })
    
    }
  }


