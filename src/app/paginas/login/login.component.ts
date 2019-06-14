import { Component, OnInit, Injectable, TemplateRef, EventEmitter } from '@angular/core';
import { BarberService } from '../../services/barber.service';
import { Router } from '@angular/router';
import {ClienteComponentDialog} from '../../dialogs/cliente-dialog/cliente-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;
  loginData: any;

  constructor(private service: BarberService,public router: Router,  private ngbModal: NgbModal, private auth: AuthService) { }
  
  ngOnInit() {
    
  }

  login(){
    this.service.login(this.usuario, this.senha).subscribe(
      data => {
         this.loginData = data;

         if(this.loginData == null){
           alert('Login Inválido');
         }else{
           sessionStorage.setItem('usuario', this.loginData.usuario); 
           sessionStorage.setItem('tipo', this.loginData.tipo);
           this.auth.fazerLogin();
         }

      }
    );
  }

  redirectHome() {
    this.router.navigate(['/home']);
  }

  show(row) {
    console.log(row);
    let modalDialog = this.ngbModal.open(ClienteComponentDialog, { size: 'lg' });
    modalDialog.componentInstance.clienteId = null;
    modalDialog.componentInstance.primeiro = 1;
  }

}
