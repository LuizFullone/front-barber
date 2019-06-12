import { Component } from '@angular/core';
import { LoginComponent } from './paginas/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  static API_URL="http://localhost:8080";

  mostrarMenu: boolean = false;

  constructor(private login: LoginComponent){

  }

  ngOnInit(){
    this.login.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active')
  }
  
}
