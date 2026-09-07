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
  email: string = 'usuario@exemplo.com';

  valores: number[] = [1, 2, 3, 4, 5, 6];
  numeroDigitado: string = '';
  inseririr(){
    this.valores.push(Number(this.numeroDigitado));
    console.log(this.valores);
  }

  

  // ocultarEmail(email: string): string {
  //   const [usuario, dominio] = email.split('@');
  //   const usuarioOculto = usuario[0] + '******';
  //   return `${usuarioOculto}@${dominio}`;
  // }
}
