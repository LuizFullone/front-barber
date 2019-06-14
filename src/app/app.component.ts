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

  constructor(private auth: AuthService){

  }

  ngOnInit(){
    this.auth.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active')
  }
  
}
