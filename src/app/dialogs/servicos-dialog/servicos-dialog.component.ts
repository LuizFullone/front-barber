import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgbDateStruct, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BarberService } from '../../services/barber.service';

@Component({
  selector: 'servicos-dialog',
  templateUrl: './servicos-dialog.component.html'
})
export class ServicosComponentDialog implements OnInit {
    constructor(private service: BarberService, private ngbModal: NgbActiveModal, private modal: BsModalService) {}
    @Input() servicosId: any;

    servicos: any;
    titleHeader: string;
    nome: string;
    valor: string;
    
    ngOnInit() {
      this.titleHeader = 'Novo Serviço';
      if(this.servicosId != null ){        
        this.getServicosId(this.servicosId);
      }
    }

    save(){
      if(this.servicosId != null){
        this.updateServicos();
      }else{
        this.createProject();
      }
    }

    createProject() {
      this.service.createServicos({
        "nome": this.nome,
        "valor": this.valor
      }).subscribe(
        ()=>{
          this.close();
        }
      );
    }

    updateServicos(){
      this.service.updateServicos(this.servicosId,{
        "nome": this.nome,
        "valor": this.valor
      }).subscribe(
        ()=>{
          this.close();
        }
      );
    }

    close() {
      this.ngbModal.close('');
    }

    getServicosId(id){
      this.service.getServicosById(id).subscribe(
          data => { 
              this.servicos = data;

              this.titleHeader = 'Edit Serviço #' + this.servicosId;
              this.nome = this.servicos.nome;
              this.valor = this.servicos.valor;
              
          }
      );
  }
}