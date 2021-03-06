import { Component, OnInit } from '@angular/core';

import { BarberService } from '../../services/barber.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservaComponentDialog } from 'src/app/dialogs/reserva-dialog/reserva-dialog.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['../profissional/profissional.component.css']
})

export class ReservaComponent implements OnInit {
  
  data: string;
  cols: any = [];
  profissionais: any;
  horas : any;
  servicos : any;
  reservas : any;
  idProf: any;
  usuario: any;

  constructor(private service:BarberService, private ngbModal: NgbModal ) { }

  ngOnInit() {
    this.cols = [
      { field: 'idReserva', header: 'Id'},
      { field: 'profissional', header: 'Funcionário' },
      { field: 'cliente', header: 'Cliente'},
      { field: 'data', header: 'Dia' },
      { field: 'hora', header: 'Horário'},
      { field: 'valorTotal', header: 'Valor total' }
    ];
    let tipo = sessionStorage.getItem('tipo');
    if (tipo == 'administrador'){
      this.getReserva();
    }
    else if (tipo == 'profissional'){
      this.getByNomeProfissional();
    }
    else if (tipo == 'cliente'){
      this.getByNomeCliente();
    }
   
  }

  show(row) {
    console.log(row);
    let modalDialog = this.ngbModal.open(ReservaComponentDialog, { size: 'lg' });
    if(row){
      modalDialog.componentInstance.reservaId = row.idReserva;
    }else{
      modalDialog.componentInstance.reservaId = null  
    }
    modalDialog.result.then(response => {

    let tipo = sessionStorage.getItem('tipo');
    
    if (tipo == 'administrador'){
      this.getReserva();
    }
    else if (tipo == 'profissional'){
      this.getByNomeProfissional();
    }
    else if (tipo == 'cliente'){
      this.getByNomeCliente();
    }
    });
  }

  getReserva() {
    this.service.getReservas().subscribe(
      data => {
         this.reservas = data;
         console.log(data[0]);
         let cont = 0;
         for(let reserva of this.reservas){
           this.reservas[cont].profissional=reserva.profissional.nome;
           this.reservas[cont].cliente = reserva.cliente.nome;
           cont++;
         }
         console.log(data[0]);
         
      }
    );
  }

  getByNomeProfissional(){
    this.usuario = sessionStorage.getItem('usuario');

    this.service.getByNomeProfissional(this.usuario).subscribe(
      data => {
         this.reservas = data;
         let cont = 0;
         for(let reserva of this.reservas){
           this.reservas[cont].profissional= reserva.profissional.nome;
           this.reservas[cont].cliente = reserva.cliente.nome;
           cont++;
         }
       
         
      }
    );
  }
  
  getByNomeCliente(){
    this.usuario = sessionStorage.getItem('usuario');

    this.service.getByNomeCliente(this.usuario).subscribe(
      data => {
         this.reservas = data;
         let cont = 0;
         for(let reserva of this.reservas){
           this.reservas[cont].profissional= reserva.profissional.nome;
           this.reservas[cont].cliente = reserva.cliente.nome;
           cont++;
         }
       
         
      }
    );
    
  }
}
