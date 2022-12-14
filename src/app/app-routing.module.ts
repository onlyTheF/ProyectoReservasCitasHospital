import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { LoginDoctorComponent } from './LoginDoctor/LoginDoctor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservaComponent } from './Reserva/Reserva.component';
import { ValidarSegurosComponent } from './ValidarSeguros/ValidarSeguros.component';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "Login", component: LoginDoctorComponent },
  { path: "Reserva", component: ReservaComponent },
  { path: "Validar", component: ValidarSegurosComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
