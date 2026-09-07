import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarEmail'
})
export class OcultarEmailPipe implements PipeTransform {

  transform(value: string): string {
    return this.ocultarEmail(value);
  }
  ocultarEmail(email: string): string {
    const [usuario, dominio] = email.split('@');
    const usuarioOculto = usuario[0] + '******';
    return `${usuarioOculto}@${dominio}`;
  }

}
