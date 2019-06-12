import { Component, OnInit } from '@angular/core';

import { BarberService } from '../../services/barber.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservaComponentDialog } from 'src/app/dialogs/reserva-dialog/reserva-dialog.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})

export class ReservaComponent implements OnInit {
  
  data: string;
  cols: any = [];
  profissionais: any;
  horas : any;
  servicos : any;
  reservas : any;

  constructor(private service:BarberService, private ngbModal: NgbModal ) { }

  ngOnInit() {
    this.cols = [
      { field: 'idReserva', header: 'Id'},
      { field: 'nome', header: 'Funcionário' },
      { field: 'data', header: 'Dia' },
      { field: 'hora', header: 'Horário'},
      { field: 'valor', header: 'Valor total' }
    ];
    this.getReserva();
  }

  show(row) {
    console.log(row);
    let modalDialog = this.ngbModal.open(ReservaComponentDialog, { size: 'lg' });
    if(row){
      modalDialog.componentInstance.reservaId = row.idProfissional;
    }else{
      modalDialog.componentInstance.reservaId = null  
    }
    modalDialog.result.then(response => {
      this.getReserva();
    })
  }

  getReserva(){
  }

}
