import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  estaLigado: boolean = false;
  counter: number = 0;

  toggle(){
    this.estaLigado = !this.estaLigado;
  }

  incrementar(){
    this.counter++;
  }
}
