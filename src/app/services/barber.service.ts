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
    return this.http.get(AppComponent.API_URL + '/profissional', { headers: this.getOptions() } );
  }

  createProfissional(body) {
    return this.http.post(AppComponent.API_URL + '/profissional', body, { headers: this.getOptions() } );
  }

  getProfissionalById(id){
    return this.http.get(AppComponent.API_URL + '/profissional/'+id, { headers: this.getOptions() } );
  }

  updateProfissional(id,body){
    return this.http.put(AppComponent.API_URL + '/profissional/'+id,body, { headers: this.getOptions() } );
  }
}