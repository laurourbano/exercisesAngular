import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
})
export class FormComponent {

  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${ form.value.nome }
    Telefone: ${ form.value.telefone }
    Endereço: ${ form.value.endereco }`;

    //guardar dados no localStorage
    localStorage.setItem('dados', dados);
    //recuperar dados do localStorage

    console.log(dados);
  }
  localStorage = localStorage.getItem('dados');

}
