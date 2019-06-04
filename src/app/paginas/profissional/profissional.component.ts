import { Component, OnInit, Injectable, TemplateRef } from '@angular/core';
import { BarberService } from '../../services/barber.service';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {
  cols: any = [];
  profissionais: any;
  constructor(private service: BarberService) { }
  
  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'email', header: 'EMAIL' },
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

  showDialog(row) {
  //   console.log('rowData: ', row);
  //   let modalDialog = this.ngbModal.open(ProfissionalDialogComponent);
  //   if(row != null){
  //     modalDialog.componentInstance.mileId = row.mileId;
  //     modalDialog.componentInstance.projectId = row.projectId;
  //   }
  //   modalDialog.componentInstance.tree = false;
  //   modalDialog.result.then(resolve => {if (resolve === 'node update') this.getProfissionals();});
   }
}
