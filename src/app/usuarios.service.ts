import{Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword} from '@angular/fire/auth';

@Injectable({
    providedIn:'root'
})
export class UsuariosService{
    constructor(private auth: Auth){
    }
}

function register(arg0: { email: any; password: any; }, any: any) {
    throw new Error('Function not implemented.');
}
