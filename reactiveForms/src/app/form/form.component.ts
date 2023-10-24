import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
})
export class FormComponent {
  formularioCadastro!: FormGroup;

  constructor() {
    this.formularioCadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  onSubmit() {
    let dados = `
      Nome: ${ this.formularioCadastro.value.nome }
      Telefone: ${ this.formularioCadastro.value.telefone }
      Endereço: ${ this.formularioCadastro.value.endereco }`
    console.log(dados);
  }


}
