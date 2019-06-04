import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from "../app.component";

@Injectable()
export class BarberService {

  httpHeaders = new HttpHeaders
  constructor(private http: HttpClient) {
  }

  getOptions() {
    return {
      'Content-Type' : 'application/json',
      'Authorization' : 'Basic ' + sessionStorage.getItem('base64Credential') 
    };
  }

  getProfissional() {
    console.log("chegou")
    return this.http.get(AppComponent.API_URL + '/profissional', );
  }
 
}