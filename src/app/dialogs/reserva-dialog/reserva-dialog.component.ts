import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbDateStruct, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BarberService } from '../../services/barber.service';
//import { get } from 'https';

@Component({
  selector: 'reserva-dialog',
  templateUrl: './reserva-dialog.component.html'
})
export class ReservaComponentDialog implements OnInit {
  @Input() reservaId: any;
  titleHeader:any;
  nome: string;
  
    constructor(private service: BarberService, private ngbModal: NgbActiveModal) {}

    data: string;
    profissionais: any;
    horas : any;
    servicos : any;

    ngOnInit() {
      this.titleHeader = "Reserva"
      this.getProfissional();
      this.horas = [9,10,11,12,13,14,15,16,17,18,19,20];
      this.data = this.now();
      console.log(this.data);
      this.getServicos();
  }

  getProfissional(){
    this.service.getProfissional().subscribe(
      data => {
         this.profissionais = data;
         console.log(data)
      }
    );
  }

  getServicos(){
    this.service.getServicos().subscribe(
      data => {
        this.servicos = data;
        console.log(data);
      }
    );
  }

  now(): string{
    let data = new Date();
    let ano = data.getFullYear();
    console.log(data);
    let dia: any;
    let mes: any;
    if (data.getDay() < 9 ) {
      dia = "0" + data.getDay(); 
    } else {
      dia = data.getDay();
    }
    console.log(data.getDay()); 
    if (data.getMonth() < 9 ) {
      mes = "0" + data.getMonth();
    } else {
      mes = data.getMonth();
    }

    let dataAt = ano + "-" + mes +"-"+ dia;
    return dataAt;  
  }

  close(){
      this.ngbModal.close('');
  }


}