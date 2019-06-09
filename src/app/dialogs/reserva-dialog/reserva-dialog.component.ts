import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbDateStruct, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BarberService } from '../../services/barber.service';

@Component({
  selector: 'reserva-dialog',
  templateUrl: './reserva-dialog.component.html'
})
export class ReservaComponentDialog implements OnInit {
  @Input() reservaId: any;
  titleHeader:any;
  nome: string;
  
    constructor(private service: BarberService, private ngbModal: NgbModal) {}

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

  now (): string{
    let data = new Date();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let dia = data.getDate();
    let dataAt = ano + "-" + "0"+ mes +"-"+ "0"+ dia ;
    return dataAt;  
  }


}