import { Component, OnInit, Injectable, TemplateRef } from '@angular/core';
import { BarberService } from '../../services/barber.service';
import {NgbDateAdapter, NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfissionalComponentDialog} from '../../dialogs/profissional-dialog/profissional-dialog.component';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {
  cols: any = [];
  profissionais: any;
  constructor(private service: BarberService, private ngbModal: NgbModal) { }
  
  ngOnInit() {
    this.cols = [
      { field: 'idProfissional', header: 'Id'},
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'Cpf' },
      { field: 'email', header: 'E-mail' },
      { field: 'especializacao', header: 'Especialização' }
    ];
    this.getProfissional();
  }

  getProfissional() {
    console.log('profissional');
    this.service.getProfissional().subscribe(
      data => {
         this.profissionais = data;
      }
    );
  }

  show(row) {
    console.log("dialog");
    let modalDialog = this.ngbModal.open(ProfissionalComponentDialog, { size: 'lg' });
    if(row){
      modalDialog.componentInstance.profissionalId = row.idProfissional;
    }else{
      modalDialog.componentInstance.profissionalId = null  
    }
    modalDialog.result.then(response => {
      this.getProfissional();
    })
  }

}
