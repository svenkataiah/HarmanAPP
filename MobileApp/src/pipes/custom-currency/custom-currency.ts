import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: any, ...args) {
    var x = value;
    x = x.toString();
    var afterPoint = '';
    if (x.indexOf('.') > 0) {
      afterPoint = x.substring(x.indexOf('.'), x.length);
      if (afterPoint && afterPoint.length >= 1) {
        afterPoint = (afterPoint + '00').substr(0, 3);
      }
    } else {
      afterPoint = '.00';
    }
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')
      lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    console.log(res);
    if (res.toString().search(".") == -1) {
      console.log('₹' + res + '.00')
      return '₹' + res + '.00';

    } else {
      console.log('₹' + res)
      return '₹' + res;
    }


  }
}
