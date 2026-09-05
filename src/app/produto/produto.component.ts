import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  nomeProduto: string = 'Produto Exemplo';
  precoProduto: number = 9.99;
  linkImagem: string = 'https://picsum.photos/100';

  larguraImagem: number = 50;
  alturaImagem: number = 80;
  
  addProduto() {
    this.larguraImagem += 100;
    this.alturaImagem += 100;
    alert('Produto adicionado ao carrinho!');
  }

  promocao(){
    confirm('Deseja adicionar o produto à promoção?');
  }
}