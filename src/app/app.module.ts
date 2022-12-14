import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Home/Home.component';
import { LoginDoctorComponent } from './LoginDoctor/LoginDoctor.component';
import { ReservaComponent } from './Reserva/Reserva.component';
import { ValidarSegurosComponent } from './ValidarSeguros/ValidarSeguros.component';
import { FooterComponent } from './Footer/Footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [						
    AppComponent,
      NavbarComponent,
      HomeComponent,
      LoginDoctorComponent,
      ReservaComponent,
      ValidarSegurosComponent,
      FooterComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
