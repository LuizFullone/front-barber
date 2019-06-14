import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuarda implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,

  ): Observable<boolean> | boolean {
    // Se o usuário estiver autenticado ele retorna true
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    //Caso a condição de cma não seja satisfeita nos redirecionamos para login
    this.router.navigate(['/login']);
    return false;
  }

}
