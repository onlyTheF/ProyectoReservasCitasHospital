import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-Reserva2',
  templateUrl: './Reserva2.component.html',
  styleUrls: ['./Reserva2.component.css']
})
export class Reserva2Component implements OnInit {

  constructor(private coockies: CookieService) { }

  ngOnInit() {
    this.coockies.get("seguro")
  }

}
