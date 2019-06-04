import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class BarberService {

  httpHeaders = new HttpHeaders
  constructor(private http: HttpClient, public router: Router) {
  }

  checkErr(err, message, modal) {
    if (err.url == null) {
      if (modal != undefined || modal != null) {
        modal.hide();
      }
      sessionStorage.clear();
      this.router.navigateByUrl('/login');
    }
  }

  getOptions() {
    return {
      'Content-Type' : 'application/json',
      'Authorization' : 'Basic ' + sessionStorage.getItem('base64Credential') 
    };
  }
 
}