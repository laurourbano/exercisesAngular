import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  produto = {
    tipo: 'filme',
    titulo: 'Psicopata Americano',
    ano: '2000'
  }

  setProduto(produto: { tipo: string, titulo: string, ano: string }) {
    this.produto = produto;
  }
}
