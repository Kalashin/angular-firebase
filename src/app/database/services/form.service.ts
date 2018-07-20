import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Form } from '../model/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formList: AngularFireList<any>;
  selectedForm: Form = new Form();

  constructor(private firebase: AngularFireDatabase) { }

    getForms() {
      return this.formList = this.firebase.list('forms');
    }

    insertForm(form: Form) {
      this.formList.push({
        nome: form.nome,
        desc: form.desc,
        endereco: form.endereco,
        numero: form.numero,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado
      });
    }

    updateForm(form: Form) {
      this.formList.update(form.$key, {
        nome: form.nome,
        desc: form.desc,
        endereco: form.endereco,
        numero: form.numero,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado
      });
    }

    deleteForm($key: string) {
      this.formList.remove($key);
    }


}
