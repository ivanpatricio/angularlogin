import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http'; // <----

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form:FormGroup;
loading = false;
  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar, private router:Router ) {
    this.form=this.fb.group({
     usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    } )
  }

  ngOnInit(): void {
  }
  ingresar(){
    const usuario=this.form.value.usuario;
    const password=this.form.value.contraseña;
   if(usuario == 'admin' && password =='admin123'){
    //direccionamos a la otra
     this.fakeloading();
   }else {
    //mostramos un mensaje de error;
      this.error();
      this.form.reset();
   }
  }
error(){
  this._snackBar.open('usuario o contraseña incorrectos','',{
    duration: 5000,
    horizontalPosition:'center',
    verticalPosition:'top',
  })
}
  fakeloading(){
    this.loading = true;
    setTimeout(()=>{
      this.router.navigate(['dashboard']);
    },1500);
  }

}
