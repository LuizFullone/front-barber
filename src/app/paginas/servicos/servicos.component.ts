import { Component, OnInit, Injectable, TemplateRef } from '@angular/core';
import { BarberService } from '../../services/barber.service';
import {NgbDateAdapter, NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ServicosComponentDialog} from '../../dialogs/servicos-dialog/servicos-dialog.component';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  cols: any = [];
  servicos: any;
  constructor(private service: BarberService, private ngbModal: NgbModal) { }

  ngOnInit() {
    this.cols = [
      { field: 'idServico', header: 'Id'},
      { field: 'nome', header: 'Nome' },
      { field: 'valor', header: 'Valor' }
    ];
    this.getServicos();
  }

  getServicos() {
    console.log('servicos');
    this.service.getServicos().subscribe(
      data => {
         this.servicos = data;
      }
    );
  }

  show(row) {
    console.log(row);
    let modalDialog = this.ngbModal.open(ServicosComponentDialog, { size: 'lg' });
    if(row){
      modalDialog.componentInstance.servicosId = row.idServicos;
    }else{
      modalDialog.componentInstance.servicosId = null  
    }
    modalDialog.result.then(response => {
      this.getServicos();
    })
  }
}
