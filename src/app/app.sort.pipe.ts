import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './app.movie';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Promise<Array<string>>, args: string): Promise<Array<string>> {
    Promise.resolve(array).then(array =>
      array.sort((a: any, b: any) => {
        if (a[args] < b[args]) {
          return -1;
        } else if (a[args] > b[args]) {
          return 1;
        } else {
          return 0;
        }
      })
    )
    return array;
  }
}


