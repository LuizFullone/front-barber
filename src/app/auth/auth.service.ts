import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public mostrarMenu = new EventEmitter<boolean>();

  login;

  constructor(private router: Router) { }

  fazerLogin(){
    this.mostrarMenu.emit(true);
    this.redirectHome();
  }

  redirectHome() {
    this.router.navigate(['/home']);
  }

  mostrar(){
    this.mostrarMenu.emit(true);
    this.redirectHome();
  }
}
