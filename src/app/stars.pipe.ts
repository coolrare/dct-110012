import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(value: number, symbol: string = '⭐'): string {
    let output = '';
    for (let index = 0; index < value; index++) {
      output += symbol;
    }
    return output;
  }

}
