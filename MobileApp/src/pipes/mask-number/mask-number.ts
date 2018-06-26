import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskNumber',
})
export class MaskNumberPipe implements PipeTransform {
  transform(value: any, ...args) {
    let mask = '';
    let number = value.toString();
    let len = value.toString().length;

    for (let i = 0; i < number.length; i++) {
      console.log(i);
      if (i < len - 4) {
        mask = mask + 'X'
      } else {
        mask = mask + number[i];
      }
    }
    return mask;
  }
}
