import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.models';


@Component({
  selector: 'app-recuperar-usuario',
  templateUrl: './recuperar-usuario.component.html',
  styleUrls: ['./recuperar-usuario.component.css']
})
export class RecuperarUsuarioComponent implements OnInit {

  
  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {   
    this.usuario = new UsuarioModel();
    this.usuario.email= "fre920";
  }
  
  onSubmit( form: NgForm) {
    
  if (form.invalid) {
    return;
  }

    console.log("Dio al boton");
    console.log(this.usuario);
    console.log(form)

  }


}
