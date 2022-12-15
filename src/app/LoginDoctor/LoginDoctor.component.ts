import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../Services/Login.service';



@Component({
  selector: 'app-LoginDoctor',
  templateUrl: './LoginDoctor.component.html',
  styleUrls: ['./LoginDoctor.component.css']
})
export class LoginDoctorComponent implements OnInit {
  resultado!: string;
  id!:number;

  constructor(protected cookies:CookieService, private loginServices: LoginService) { }

  ngOnInit() {
  }

  formlogin = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submit(){
    if(this.formlogin.valid){
    } else{
      this.resultado = "Datos invalidos en el formulario";
    }
  }

}
