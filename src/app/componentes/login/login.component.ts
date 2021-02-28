import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { UsuarioModel } from '../../models/usuario.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario: UsuarioModel;
  constructor(private router: Router, private Auth: AuthService  ) { }
  
  ngOnInit(): void {

    
     this.usuario = new UsuarioModel();
     this.usuario.email = "fre920@hotmail.com";
     this.usuario.password= "4343ewewew";
     this.Auth.isLoggedIntest(false);
     console.log("INIT LG");
  }
  
  login() {  
  
    // this.usuario.email= "fre920@hotmail.com";
    // this.usuario.password= "4343ewewew"; 
    // this.usuario.email ="fre920@hotmail.com";
    console.log(this,this.usuario);

    this.Auth.login(this.usuario)

    .subscribe(resp => {
      console.log(resp);
      this.Auth.isLoggedIntest(true);
      this.router.navigateByUrl('/home');

    }, (err) => {
      console.log(err.error.error.message);
      
    });  

    // this.Auth.nuevoUsuario(this.usuario)
    // .subscribe(resp => {
    //   console.log(resp)
    // }, (err) => {
    //   console.log(err.error.error.message);
      
    // });  

 
  }
}
