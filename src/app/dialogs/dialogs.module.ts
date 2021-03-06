import { ProfissionalComponentDialog } from './profissional-dialog/profissional-dialog.component';
import { ServicosComponentDialog } from './servicos-dialog/servicos-dialog.component';
// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/** third party */
import {TableModule} from 'primeng/table';
import { ModalModule, AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerModule } from 'primeng/spinner';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {GrowlModule} from 'primeng/growl';
import { ClienteComponentDialog } from './cliente-dialog/cliente-dialog.component';
import { ReservaComponentDialog } from './reserva-dialog/reserva-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    SpinnerModule,
    DataViewModule,
    PanelModule,
    GrowlModule,
    AlertModule.forRoot()
  ],
  
  declarations: [
    ProfissionalComponentDialog,
    ServicosComponentDialog,
    ClienteComponentDialog,
    ReservaComponentDialog
  ],
  
  exports: [],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  entryComponents: [ 
    ProfissionalComponentDialog, 
    ServicosComponentDialog, 
    ClienteComponentDialog,
    ReservaComponentDialog
  ]
})
export class DialogsModule { }
