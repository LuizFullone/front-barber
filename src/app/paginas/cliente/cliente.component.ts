import { Component, OnInit, Injectable, TemplateRef } from '@angular/core';
import { BarberService } from '../../services/barber.service';
import {NgbDateAdapter, NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ClienteComponentDialog} from '../../dialogs/cliente-dialog/cliente-dialog.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cols: any = [];
  clientes: any;
  constructor(private service: BarberService, private ngbModal: NgbModal) { }
  
  ngOnInit() {
    this.cols = [
      { field: 'idCliente', header: 'Id'},
      { field: 'nome', header: 'Nome' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'cpf', header: 'Cpf' },
      { field: 'email', header: 'E-mail' },
    ];
    this.getCliente();
  }

  getCliente() {
    console.log('cliente');
    this.service.getCliente().subscribe(
      data => {
         this.clientes = data;
      }
    );
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
      this.getCliente();
    })
  }

}