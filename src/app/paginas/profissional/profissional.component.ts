import { Component, OnInit, Injectable, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  cols: any = [];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'mileName', header: 'Name' },
      { field: 'mileDescription', header: 'Description' },
      { field: 'mileDuoDate', header: 'Due Date' }
    ];
  }

  getProfissionals() {
    // this.ttService.getProfissionalsByCompId(sessionStorage.getItem('compId')).subscribe(
    //   // the first argument is a function which runs on success
    //   data => { this.milestones = data;},
    //   // the second argument is a function which runs on error
    //   err => {
    //     this.ttService.checkErr(err,'error loading milestones', this.modalRef);
    //     this.alertsDismiss.push({
    //       type: 'danger',
    //       msg: err.error.errorMessage,
    //       timeout: 5000
    //     });
        
    //   },
    //   // the third argument is a function which runs on completion
    //   () => console.log('done loading milestones')
    // );
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
