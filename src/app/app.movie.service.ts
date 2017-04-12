import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './app.movie';

@Injectable()
export class MovieService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private moviesUrl = 'api/movies';  // URL to web api

  constructor(private http: Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
               .toPromise()
               .then(response => response.json().data as Movie[])
               .catch(this.handleError);
  }

  getMovie(id: number): Promise<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Movie)
      .catch(this.handleError);
  }

  create(movie: Movie): Promise<Movie> {
    return this.http
      .post(this.moviesUrl, JSON.stringify(movie), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Movie)
      .catch(this.handleError);
  }

  update(movie: Movie): Promise<Movie> {
    const url = `${this.moviesUrl}/${movie.id}`;
    return this.http
      .put(url, JSON.stringify(movie), {headers: this.headers})
      .toPromise()
      .then(() => movie)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}




