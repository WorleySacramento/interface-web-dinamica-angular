import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  @Input() produto!: Produto;
  @Output() addToCart = new EventEmitter<Produto>();


  nomeProduto: string = 'Produto Exemplo';
  precoProduto: number = 9.99;
  linkImagem: string = 'https://picsum.photos/200/';

  
  addProduto() {
    alert('Produto adicionado ao carrinho!');
    this.addToCart.emit(this.produto);
  }

  // promocao(){
  //   confirm('Deseja adicionar o produto à promoção?');
  // }
}