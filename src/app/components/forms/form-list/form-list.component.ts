import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';

import { Form } from '../../../database/model/form';

import { FormService } from '../../../database/services/form.service';
import { element } from 'protractor';
import { ElementSchemaRegistry } from '@angular/compiler';
import { AngularFireList } from 'angularfire2/database';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  formList: Form[];
  selectedFormList: AngularFireList<any>;
  dialogRef: any;

  constructor(
    private formService: FormService,
    public dialog: MatDialog) {
 }
  openDialog(form: Form) {
    this.formService.selectedForm = Object.assign({}, form);
    const dialogRef = this.dialog.open(FormComponent, {
      height: '80%',
      width: '80%',
      data: this.formService.selectedForm
    }, );


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onNoClick(): void {
    close();
  }

  ngOnInit() {
    return this.formService.getForms().snapshotChanges().subscribe(item => {
      this.formList = [];

      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.formList.push(x as Form);
      });
    });
  }

  onEdit(form: Form) {
    this.formService.selectedForm = Object.assign({}, form);
  }

  onDelete($key: string) {
    if (confirm('Você tem certeza que deseja deletar ?')) {
      this.formService.deleteForm($key);
    }
  }

}
