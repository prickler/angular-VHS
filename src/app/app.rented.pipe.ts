import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './app.movie';

@Pipe({
  name: 'rented'
})
export class RentedPipe implements PipeTransform {

  transform(movies: Movie[]) {
    return movies.filter(movie => movie.rented);
  }

}
