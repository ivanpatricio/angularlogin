import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {

    form: FormGroup;
  constructor(private fb: FormBuilder, 
        private usuarioService: UsuarioService, private router:Router, private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }
  agregarUsuario(){
    const user: Usuario={
      usuario: this.form.value.usuario,
      nombre: this.form.value.usuario,
      apellido: this.form.value.usuario,
      telefono: this.form.value.usuario,

    }
    this.usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('El usuario fue agregado con exito','',{
      duration: 1500,
      horizontalPosition:'center',
      verticalPosition:'top',
    })
    
  }
}
