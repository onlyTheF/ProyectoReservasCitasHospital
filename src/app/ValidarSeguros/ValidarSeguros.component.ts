import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/User.service';
import { User } from 'src/app/Models/user'
import { ForwardRefHandling } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ValidarSeguros',
  templateUrl: './ValidarSeguros.component.html',
  styleUrls: ['./ValidarSeguros.component.css']
})
export class ValidarSegurosComponent implements OnInit {

  segurocode!:any
  resultado!: string;

  user: User[] = [];
  coleccion: User[] = [];

  constructor(private userService:UserService, private cookies: CookieService, private router: Router) { }

  ngOnInit() {
  }

  formSeguro = new FormGroup({
    seguro: new FormControl('', [Validators.required]),
  })

  getoneUser(valor: Event){
    var seguroB =  (valor.target as HTMLInputElement).value.trim();
    this.userService.getOneUser(seguroB).subscribe((res) => {
      this.user = res.data;
    })
    this.segurocode = seguroB;
  }


  submit(){
    if(this.formSeguro.valid){
      if (typeof this.user == "object") {
        this.cookies.set("seguro", this.segurocode)
        this.router.navigate(['Reserva']);
      }else{
        this.resultado = "No se encontro ningun seguro";
      }
    } else{
      this.resultado = "Datos invalidos en el formulario";
    }
  }

}
