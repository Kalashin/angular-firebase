import { Component, OnInit, Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material';

import { FormService } from '../../../database/services/form.service';
import { Form } from '../../../database/model/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private formService: FormService
    // @Inject(MAT_DIALOG_DATA) private FormService : any
  ) { }

  ngOnInit() {
    this.formService.getForms();
    this.resetForm();
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
