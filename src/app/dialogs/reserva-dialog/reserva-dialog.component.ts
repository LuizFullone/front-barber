import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbDateStruct, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BarberService } from '../../services/barber.service';
import { setDayOfWeek } from 'ngx-bootstrap/chronos/units/day-of-week';
import { Console } from '@angular/core/src/console';
//import { get } from 'https';

@Component({
  selector: 'reserva-dialog',
  templateUrl: './reserva-dialog.component.html',
  styleUrls: ['./reserva-dialog.component.css']
})
export class ReservaComponentDialog implements OnInit {
  constructor(private service: BarberService, private ngbModal: NgbActiveModal) { }

  @Input() reservaId: any;


  titleHeader: any;
  data: string;
  profissionais: any;
  horas: any;
  servicos: any;
  valor: any;
  reserva: any;
  idprofReserva: any;
  horaReserva: any;
  servicoSelected: any;
  // servicosReserva: any;
  dataReserva: any;
  idclienteReserva: any;

  ngOnInit() {
    this.titleHeader = "Reserva"
    this.getProfissional();
    this.horas = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    this.data = this.now();
    this.getServicos();
    this.valor = "Selecione um servico";
    if (this.reservaId) {
      this.getReserva();
    }

  }

  getReserva() {
    this.service.getReservaById(this.reservaId).subscribe(
      data => {
        this.reserva = data;
        console.log(this.reserva);
        this.idprofReserva = this.reserva.profissional.idProfissional;
        this.horaReserva = this.reserva.hora;
        this.servicoSelected = this.reserva.servicos[0].idServico;
        this.setValor();
        this.dataReserva = this.reserva.data;
        this.idclienteReserva = this.reserva.cliente.idCliente;
      }
    );
  }

  teste() {
    console.log(this.idprofReserva);
    let data = new Date();
    console.log(data.toDateString);
  }

  setValor() {
    if (!this.servicoSelected) {
      this.valor = "Selecione um servico";
    }
    this.valor = "R$" + this.servicos[this.servicoSelected - 1].valor;
  }

  getProfissional() {
    this.service.getProfissional().subscribe(
      data => {
        this.profissionais = data;
      }
    );
  }

  getServicos() {
    this.service.getServicos().subscribe(
      data => {
        this.servicos = data;
      }
    );
  }

  save() {
    if (this.reservaId != null) {
      this.updateReserva();
    } else {
      this.createReserva();
    }
  }


  close() {
    this.ngbModal.close('');
  }

  updateReserva() {
    this.service.updateProfissional(this.reservaId, {
      "profissional": { "idProfissional": this.idprofReserva },
      "cliente": { "idCliiente": 1 },
      "data": this.dataReserva,
      "servicos": { "idServico": this.servicoSelected },
      "hora": this.horaReserva,
      "valor": ""
    }).subscribe(
      () => {
        alert("Reserva realizada com sucesso");
        this.close();
      }
    );
  }

  createReserva() {
    console.log(this.servicoSelected)
    this.service.createReserva({
      "profissional": { "idProfissional": this.idprofReserva },
      "cliente": { "idCliente": 4 },
      "data": this.dataReserva,
      "servicos": [{ "idServico": this.servicoSelected }],
      "hora": this.horaReserva,
      "valor": ""
    }).subscribe(
      () => {
        this.close();
      }
    );
  }

  delete() {
    this.service.deleteReserva(this.reservaId).subscribe(
      data => {
        console.log(data);
      }
    );
    this.close();
  }

  now(): string {
    let data = new Date();
    let ano = data.getFullYear();
    let dia: any;
    let mes: any;
    if (data.getDay() < 9) {
      dia = "0" + data.getDay();
    } else {
      dia = data.getDay();
    }
    if (data.getMonth() < 9) {
      mes = "0" + data.getMonth();
    } else {
      mes = data.getMonth();
    }

    let dataAt = ano + "-" + mes + "-" + dia;
    return dataAt;
  }
}