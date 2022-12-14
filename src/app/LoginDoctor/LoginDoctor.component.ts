import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-LoginDoctor',
  templateUrl: './LoginDoctor.component.html',
  styleUrls: ['./LoginDoctor.component.css']
})
export class LoginDoctorComponent implements OnInit {
  resultado!: string;

  constructor() { }

  ngOnInit() {
  }

  formlogin = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submit(){
    if(this.formlogin.valid){
      this.resultado = "Todo funciona correctamente";
    } else{
      this.resultado = "Datos invalidos en el formulario";
    }
  }

}
