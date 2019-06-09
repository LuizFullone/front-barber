import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbDateStruct, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BarberService } from '../../services/barber.service';

@Component({
  selector: 'cliente-dialog',
  templateUrl: './cliente-dialog.component.html'
})
export class ClienteComponentDialog implements OnInit {
    constructor(private service: BarberService, private ngbModal: NgbActiveModal, private modal: BsModalService) {}
    @Input() clienteId: any;

    cliente: any;
    titleHeader: string;
    nome: string;
    cpf: string;
    telefone: BigInteger;
    email: string;
    usuario: string;
    senha: string;
    confirmar: string;
 
    ngOnInit() {
      this.titleHeader = 'Novo Cliente';
      if(this.clienteId != null ){        
        this.getClienteId(this.clienteId);
      }
    }

    save(){
      if(this.clienteId != null){
        this.updateCliente();
      }else{
        this.createCliente();
      }
    }

    createCliente() {
      if(this.senha==this.confirmar){
        this.service.createCliente({
          "nome": this.nome,
          "cpf": this.cpf,
          "telefone": this.telefone,
          "email": this.email,
          "usuario": this.usuario,
          "senha": this.senha,
          
        }).subscribe(
          ()=>{
            this.close();
          }
        );
      }else{
        alert("Confirme sua senha novamente, encontramos um erro !");
      }
    }

    updateCliente(){
      this.service.updateCliente(this.clienteId,{
        "nome": this.nome,
        "cpf": this.cpf,
        "telefone": this.telefone,
        "email": this.email,
        "usuario": this.usuario,
        "senha": this.senha,
        
      }).subscribe(
        ()=>{
          this.close();
        }
      );
    }

    close() {
      this.ngbModal.close('');
    }

    getClienteId(id){
      this.service.getClienteById(id).subscribe(
          data => { 
              this.cliente = data;

              this.titleHeader = 'Edit Cliente #' + this.clienteId;
              this.nome = this.cliente.nome;
              this.cpf = this.cliente.cpf;
              this.telefone = this.cliente.telefone;
              this.email = this.cliente.email;
              this.usuario = this.cliente.usuario;
              this.senha = this.cliente.senha;
              this.confirmar = this.senha;
              
              
          }
      );
  }
}