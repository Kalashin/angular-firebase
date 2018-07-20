import { Component, OnInit } from '@angular/core';

// Modelo
import { Form } from '../../../database/model/form';

// Service
import { FormService } from '../../../database/services/form.service';
import { element } from 'protractor';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  formList: Form[];

  constructor(
    private formService: FormService,
  ) { }

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
