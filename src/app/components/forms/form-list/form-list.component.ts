import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';

import { Form } from '../../../database/model/form';

import { FormService } from '../../../database/services/form.service';
import { element } from 'protractor';
import { ElementSchemaRegistry } from '@angular/compiler';
import { AngularFireList } from 'angularfire2/database';
import { FormComponent } from '../form/form.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FormUpdateComponent } from '../form-update/form-update.component';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  formList: Form[];
  selectedFormList: AngularFireList<any>;
  dialogRef: any;
  public message: string;
  editForm: Form;
  // iFormService: FormService;
  isDialogOpen: boolean;

  constructor(
    private formService: FormService,
    public dialog: MatDialog) {
 }
  openDialog(form: Form) {
    this.isDialogOpen = true;
    this.formService.selectedForm = Object.assign({}, form);
    this.editForm = this.formService.selectedForm;
    // this.iFormService.selectedForm = this.editForm;
    // this.message = 'work';
    this.message = this.formService.selectedForm.$key;
    const dialogRef = this.dialog.open(FormUpdateComponent, {
      height: '80%',
      width: '80%',
      // data: this.message
      // data: this.formService.selectedForm
      data: this.editForm
      // data: this.iFormService
    }, );


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onNoClick(): void {
    close();
    this.isDialogOpen = false;
  }

  ngOnInit() {
   this.loadAllForm();
  }

  loadAllForm() {
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
