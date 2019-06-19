import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  static API_URL="https://aw-barber-api.herokuapp.com";

  mostrarMenu: boolean = false;

  usuario: any;

  administrador: boolean = false;

  constructor(private auth: AuthService){

  }

  ngOnInit(){
    this.auth.mostrarMenu.subscribe(
      mostrar => {
        this.mostrarMenu = mostrar;
        this.usuario = sessionStorage.getItem('usuario');

        let tipo = sessionStorage.getItem('tipo');
        if (tipo == 'administrador'){
          this.administrador = true;
        }

      }
    );
  }

  toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active')
  }
  
}
