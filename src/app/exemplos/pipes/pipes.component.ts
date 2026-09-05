import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  hoje: Date = new Date();
  valor: number = 1234.56;
  mensagem: string = 'Olá, mundo!';
  salario: number = 5000;
}
