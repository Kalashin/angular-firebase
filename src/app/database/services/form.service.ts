import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Form } from '../model/form';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  formList: AngularFireList<any>;
  selectedForm: Form = new Form();

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private firebase: AngularFireDatabase) { }

    changeMessage(message: string) {
      this.messageSource.next(message);
    }

    getForms() {
      return this.formList = this.firebase.list('forms');
    }

    getForm(message: string) {
      return this.formList = this.firebase.list('forms/' + message);
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
