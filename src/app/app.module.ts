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
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { Reserva2Component } from './Reserva2/Reserva2.component';
import { Reserva3Component } from './Reserva3/Reserva3.component';




@NgModule({
  declarations: [								
    AppComponent,
      NavbarComponent,
      HomeComponent,
      LoginDoctorComponent,
      ReservaComponent,
      ValidarSegurosComponent,
      FooterComponent,
      Reserva2Component,
      Reserva3Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
