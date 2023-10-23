import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {

  @Input() nomeFilho: string = '';
  private _nome = '';
  @Input()
  set nome(nome: string) {
    this._nome = (nome && nome.trim()) || '<nome vazio>';
  }

  get nome(): string { return this._nome; }

  time = 'São Paulo'

}
