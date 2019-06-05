import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbDateStruct, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BarberService } from '../../services/barber.service';

@Component({
  selector: 'profissional-dialog',
  templateUrl: './profissional-dialog.component.html'
})
export class ProfissionalComponentDialog implements OnInit {
    constructor(private service: BarberService, private ngbModal: NgbActiveModal, private modal: BsModalService) {}
    @Input() profissionalId: any;

    profissional: any;
    titleHeader: string;
    nome: string;
    cpf: string;
    email: string;
    usuario: string;
    senha: string;
    confirmar: string;
    especializacao: string;
    ngOnInit() {
      this.titleHeader = 'Novo Projeto'
    }

    save(){
      if(this.profissionalId != null){
        this.updateProfissional();
      }else{
        this.createProject();
      }
    }

    createProject() {
      this.close();
      this.service.createProfissional({
        "nome": this.nome,
        "cpf": this.cpf,
        "email": this.email,
        "usuario": this.usuario,
        "senha": this.senha,
        "especializacao": this.especializacao
      }).subscribe(
      );
    }

    updateProfissional(){

    }

    close() {
      this.ngbModal.close('');
    }

    getProfissionalId(id){
      this.service.getProfissionalById(id).subscribe(
          data => { 
              this.profissional = data;

              this.titleHeader = 'Edit Profissional #' + this.profissionalId;
              this.nome = this.profissional.nome;
              this.email = this.profissional.email;
              this.usuario = this.profissional.usuario;
              this.senha = this.profissional.senha;
              this.cpf = this.profissional.cpf;
              this.especializacao = this.profissional.especializacao;
          }
      );
  }
}