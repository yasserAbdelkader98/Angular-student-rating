import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert',
})
export class StringConvertPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.replace('-', ' ');
  }
}
