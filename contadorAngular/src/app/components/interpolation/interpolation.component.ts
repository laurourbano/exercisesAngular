import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: [ './interpolation.component.css' ]
})
export class InterpolationComponent {
  imgURL = 'https://img.freepik.com/fotos-gratis/conceito-de-rpa-com-tela-de-toque-de-mao-embacada_23-2149311914.jpg?w=900&t=st=1697934341~exp=1697934941~hmac=d60302fe2844cd9a10ed94bfefff7c30d59807ae4281aa7f77b6a31cca005fcf';
  url = 'https://devmedia.com.br';

  valorAtual = true;

  livros: string[] = [ 'Angular', 'Java', 'Spring' ];

  mostrar() {
    this.valorAtual = !this.valorAtual;
  }
}
