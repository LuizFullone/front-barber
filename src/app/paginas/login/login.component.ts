import { Component, OnInit, Injectable, TemplateRef, EventEmitter } from '@angular/core';
import { BarberService } from '../../services/barber.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mostrarMenu = new EventEmitter<boolean>();

  constructor(private service: BarberService,public router: Router) { }
  
  ngOnInit() {
    
  }

  login(){
    //depois do user
    this.mostrarMenu.emit(true);
    this.redirectLogin();
  }

  redirectLogin() {
    let url: string = '/login';
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([url]);
  }

}
