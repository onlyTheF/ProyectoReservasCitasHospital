import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEspService {

constructor(private _http: HttpClient) { }
  apiUrl= 'http://localhost:3000/servicios'

  getallservices():Observable<any>{
    return this._http.get(`${this.apiUrl}`)
  }
}
