import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  nomeProduto: string = 'Produto Exemplo';
  precoProduto: number = 9.99;
  linkImagem: string = 'https://picsum.photos/200/';

  larguraImagem: number = 100;
  alturaImagem: number = 100;
  
  addProduto() {
    this.larguraImagem += 100;
    this.alturaImagem += 100;
    alert('Produto adicionado ao carrinho!');
  }

  promocao(){
    confirm('Deseja adicionar o produto à promoção?');
  }
}