import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './app.movie';

@Pipe({
  name: 'free'
})
export class FreePipe implements PipeTransform {

  transform(movies: Movie[]) {
    return movies.filter(movie => !movie.rented);
  }

}
