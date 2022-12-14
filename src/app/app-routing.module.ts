import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { LoginDoctorComponent } from './LoginDoctor/LoginDoctor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservaComponent } from './Reserva/Reserva.component';
import { Reserva2Component } from './Reserva2/Reserva2.component';
import { Reserva3Component } from './Reserva3/Reserva3.component';
import { ValidarSegurosComponent } from './ValidarSeguros/ValidarSeguros.component';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "Login", component: LoginDoctorComponent },
  { path: "Reserva", component: ReservaComponent },
  { path: "Reserva2", component: Reserva2Component },
  { path: "Reserva3", component: Reserva3Component },
  { path: "Validar", component: ValidarSegurosComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
