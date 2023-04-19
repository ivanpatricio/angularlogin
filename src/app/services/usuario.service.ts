import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import {LoginI} from '../../app/modelo/login.interface';
import {ResponseI}from '../../app/modelo/response.interface'
import { HttpClient, HttpHandler, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario:"jperez", nombre: 'Juan', apellido:'Perez', telefono: '09887654'},
    {usuario:"iconejo", nombre: 'Ivan', apellido:'Conejo', telefono: '0934234234'},

  ];
url: string ="http://apiservicios.ecuasolmovsa.com:3009/api/";
  constructor(private http:HttpClient){

   }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice(index,1);
  }
  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
