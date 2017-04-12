import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {  Location  }  from  '@angular/common';

import { Movie } from './app.movie';
import { MovieService } from './app.movie.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.rentTapes.html',
  styleUrls: ['./vhsList.css']
})

export class RentTapes implements OnInit {
  movies: Movie[] = [];
  selectedMovie: Movie;

  constructor(
    private router: Router,
    private movieService: MovieService,
    private location: Location
  ) { }

  getMovies(): void {
    this.movieService
      .getMovies()
      .then(movies => this.movies = movies);
  }

  return(movie: Movie): void {
    movie.rented = !movie.rented;
    this.movieService.update(movie).then(() => {
      this.movies = this.movies.filter(h => h !== movie);
      if (this.selectedMovie === movie) { this.selectedMovie = null; }
    });
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
  
}