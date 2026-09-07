import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'somarArray',
  pure:false
})
export class SomarArrayPipe implements PipeTransform {
// [1, 2, 3, 4, 5] => 15
  transform(array: number[]): number {
    
    let soma = 0;
    for (let n of array) {
      soma += n;
    }
    return soma;

  }

}
