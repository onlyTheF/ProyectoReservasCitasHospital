import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ServiciosEspService } from '../Services/ServiciosEsp.service';



@Component({
  selector: 'app-Reserva',
  templateUrl: './Reserva.component.html',
  styleUrls: ['./Reserva.component.css']
})
export class ReservaComponent implements OnInit {
  especialidades:any;

  constructor(private cookies: CookieService, private espservice: ServiciosEspService) { }
  ngOnInit() {
    var a = this.cookies.get("seguro");
    console.log(a);
    this.getall();
  }

  getall(){
    this.espservice.getallservices().subscribe((res)=>{
      this.especialidades = res.data;
    })
  }

  seleccionServicio(servicioselect: string, idesp: number){
    console.log(servicioselect, idesp);
  }
}
