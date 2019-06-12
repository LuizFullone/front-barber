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

  constructor(private service: BarberService,public router: Router,  private ngbModal: NgbModal, private auth: AuthService) { }
  
  ngOnInit() {
    
  }

  login(){
    console.log(this.usuario)
    console.log(this.senha)
    
    this.auth.fazerLogin(this.usuario, this.senha);
  }

  redirectHome() {
    this.router.navigate(['/home']);
  }

  show(row) {
    console.log(row);
    let modalDialog = this.ngbModal.open(ClienteComponentDialog, { size: 'lg' });
    if(row){
      modalDialog.componentInstance.clienteId = row.idCliente;
    }else{
      modalDialog.componentInstance.clienteId = null  
    }
    modalDialog.result.then(response => {
      this.redirectHome();
    })
  }

}
