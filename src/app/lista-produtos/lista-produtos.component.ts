import { Component } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {
  query: string = '';

  pesquisar(){
    this.query = "";
  }

  carrinho: Produto[] = [];

  produtos: Produto[] = [
  {
    nome: 'Smart TV LED 50" 4K',
    preco: 2399.90,
    emPromocao: true,
    categoria: 'Eletrônicos',
    imagem: 'https://picsum.photos/seed/tv/300/300'
  },
  {
    nome: 'Sofá Retrátil 3 Lugares',
    preco: 1450.00,
    emPromocao: false,
    categoria: 'Móveis',
    imagem: 'https://picsum.photos/seed/sofa/300/300'
  },
  {
    nome: 'Camiseta de Algodão Básica',
    preco: 49.90,
    emPromocao: true,
    categoria: 'Roupas',
    imagem: 'https://picsum.photos/seed/roupa/300/300'
  },
  {
    nome: 'Café Torrado e Moído 500g',
    preco: 18.50,
    emPromocao: false,
    categoria: 'Alimentos',
    imagem: 'https://picsum.photos/seed/cafe/300/300'
  },
  {
    nome: 'O Senhor dos Anéis: A Sociedade do Anel',
    preco: 55.90,
    emPromocao: true,
    categoria: 'Livros',
    imagem: 'https://picsum.photos/seed/livro/300/300'
  },
  {
    nome: 'Smartphone Galaxy S23',
    preco: 4599.00,
    emPromocao: false,
    categoria: 'Eletrônicos',
    imagem: 'https://picsum.photos/seed/celular/300/300'
  },
  {
    nome: 'Mesa de Jantar com 6 Cadeiras',
    preco: 1890.00,
    emPromocao: true,
    categoria: 'Móveis',
    imagem: 'https://picsum.photos/seed/mesa/300/300'
  },
  {
    nome: 'Jaqueta Jeans Masculina',
    preco: 189.90,
    emPromocao: false,
    categoria: 'Roupas',
    imagem: 'https://picsum.photos/seed/jaqueta/300/300'
  },
  {
    nome: 'Azeite de Oliva Extra Virgem 500ml',
    preco: 32.90,
    emPromocao: true,
    categoria: 'Alimentos',
    imagem: 'https://picsum.photos/seed/azeite/300/300'
  },
  {
    nome: 'Código Limpo: Habilidades Práticas do Agile Software',
    preco: 89.90,
    emPromocao: false,
    categoria: 'Livros',
    imagem: 'https://picsum.photos/seed/codigo/300/300'
  }
];

  adicionarProduto(produto: Produto):void {
    console.log('Produto adicionado ao carrinho:', produto);
    this.carrinho.push(produto);
  }

  contemNoCarrinho(produto: Produto): boolean {
    return this.carrinho.indexOf(produto) > -1;
  }
}
