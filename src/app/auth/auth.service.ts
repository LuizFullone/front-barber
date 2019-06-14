import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public mostrarMenu = new EventEmitter<boolean>();

  usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(){
    this.usuarioAutenticado = true;
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

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
