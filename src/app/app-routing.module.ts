import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ContactoComponent } from './componentes/pregunta/pregunta.component';
import { HomeComponent } from './componentes/home/home.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { MetricasComponent } from './componentes/metricas/metricas.component';
import { MensajebotComponent } from './componentes/mensajebot/mensajebot.component';
import { LoginComponent } from './componentes/login/login.component';

import { PrecioComponent   } from './componentes/precio/precio.component';
import { OrdenesComponent } from './componentes/ordenes/ordenes.component';
import { BoletaOrdenComponent } from './componentes/boleta-orden/boleta-orden.component';
import { RecuperarUsuarioComponent } from './componentes/recuperar-usuario/recuperar-usuario.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'metricas', component: MetricasComponent},
  {path: 'mensajesbot', component: MensajebotComponent},
  {path: 'login', component: LoginComponent},
  {path: 'precio', component: PrecioComponent},
  {path: 'ordenes', component: OrdenesComponent},
  {path: 'boletaorden', component: BoletaOrdenComponent},
  {path: 'recuperarusuario', component: RecuperarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
