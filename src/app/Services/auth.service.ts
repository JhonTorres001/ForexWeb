import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.models';
import { data } from '../componentes/mensajebot/datasource';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private url ='https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyA1QXFNNJIhgPWbc7SCCU6CUq8eHcYQL2Q';
   //  INICAR SESION
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  //REGISTRAR

  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  constructor(private http: HttpClient, private router: Router ) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  isLoggedIntest(val: boolean) {
    this.loggedIn.next(val);
    console.log(this.loggedIn.asObservable());
  }

  logout(){

    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  login( usuario: UsuarioModel ){

    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    
    return this.http.post(
       `${ this.url }/accounts:signInWithPassword?key=${ this.apikey}`,
        authData
    );

  }

  nuevoUsuario( usuario: UsuarioModel ){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    
    console.log(authData);

    return this.http.post(
       `${ this.url }/accounts:signUp?key=${ this.apikey}`,
        authData
    );
  }


}
