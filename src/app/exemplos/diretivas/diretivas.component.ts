import { Component } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  estaLigado: boolean = false;
  counter: number = 0;
  listaDeCompras: string[] = ['Arroz', 'Feijão', 'Macarrão',
    'Carne', 'Frango', 'Ovos', 'Leite', 'Pão', 'Queijo', 'Manteiga'];

  toggle() {
    this.estaLigado = !this.estaLigado;
  }

  incrementar() {
    this.counter++;
  }

  alunos: Aluno[] =[
    { nome: 'João', email: 'joao@email.com', media: 8.5 },
    { nome: 'Maria', email: 'maria@email.com', media: 9.0 },
    { nome: 'Pedro', email: 'pedro@email.com', media: 7.5 },
    { nome: 'Ana', email: 'ana@email.com', media: 8.0 },
    { nome: 'Carlos', email: 'carlos@email.com', media: 8.5 }
  ]

  alertar(aluno: Aluno) {
    alert(`Aluno: ${aluno.nome}\nEmail: ${aluno.email}\nMédia: ${aluno.media}`);
  }

}

