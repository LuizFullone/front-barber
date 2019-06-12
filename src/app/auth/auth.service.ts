import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public mostrarMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario, senha){
    this.mostrarMenu.emit(true);
    this.redirectHome();
  }

  redirectHome() {
    this.router.navigate(['/home']);
  }
}
