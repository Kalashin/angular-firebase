import { Component, OnInit, Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';

import { FormService } from '../../../database/services/form.service';
import { Form } from '../../../database/model/form';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {

  constructor(
    public formService: FormService,
    // @Inject(MAT_DIALOG_DATA) public message: string
    @Inject(MAT_DIALOG_DATA) public editForm: Form
    // @Inject(MAT_DIALOG_DATA) public iFormService: FormService
  ) { }

  ngOnInit() {
    this.formService.selectedForm = this.editForm;
    this.formService.getForms();
    // this.formService.getForm(this.message);
    // this.formService.selectedForm = this.editForm;
    // this.resetForm();
  }

  onSubmit(formForm: NgForm) {
    if (formForm.value.$key == null) {
      this.formService.insertForm(formForm.value);
    } else {
      this.formService.updateForm(formForm.value);
    }

    this.resetForm(formForm);
  }

  resetForm(formForm?: NgForm) {
    if (formForm != null) {
      formForm.reset();
    }
      this.formService.selectedForm = new Form();
  }


}
