import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
})
export class PowerToX implements PipeTransform {
  transform(value: number, x: number = 1): unknown {
    return Math.pow(value, x);
  }
}
