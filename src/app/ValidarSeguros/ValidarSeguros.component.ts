import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ValidarSeguros',
  templateUrl: './ValidarSeguros.component.html',
  styleUrls: ['./ValidarSeguros.component.css']
})
export class ValidarSegurosComponent implements OnInit {

  resultado!: string;

  constructor() { }

  ngOnInit() {
  }

  formSeguro = new FormGroup({
    seguro: new FormControl('', [Validators.required]),
  })

  submit(){
    if(this.formSeguro.valid){
      this.resultado = "Todo funciona correctamente";
    } else{
      this.resultado = "Datos invalidos en el formulario";
    }
  }

}
