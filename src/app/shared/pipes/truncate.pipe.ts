import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, argument?: string): unknown {
    let threshold: number = argument ? Number(argument) : 151;
    if (value.length > threshold) {
      return value.split('').slice(0, threshold).join('') + '...';
    }
    return value;
  }
}
