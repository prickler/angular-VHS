"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_movie_1 = require("./app.movie");
var app_movie_service_1 = require("./app.movie.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var VHSList = (function () {
    function VHSList(router, movieService, location) {
        this.router = router;
        this.movieService = movieService;
        this.location = location;
        this.movies = [];
        this.selectedMovie = new app_movie_1.Movie;
        this.model = new app_movie_1.Movie();
        this.sortType = 'id';
    }
    VHSList.prototype.getMovies = function () {
        var _this = this;
        this.movieService
            .getMovies()
            .then(function (movies) { return _this.movies = movies; });
    };
    VHSList.prototype.onSubmit = function () {
        this.model.rented = false;
        this.movieService.create(this.model);
        this.ngOnInit();
        ;
    };
    VHSList.prototype.newMovie = function () {
        this.model = new app_movie_1.Movie();
    };
    VHSList.prototype.add = function (name, director, date, cover, rented, personName, personSurname, dateOfRent) {
        var _this = this;
        var tempMovie = new app_movie_1.Movie();
        tempMovie.name = name.trim();
        tempMovie.director = director.trim();
        tempMovie.date = date.trim();
        tempMovie.cover = cover.trim();
        tempMovie.rented = false;
        tempMovie.personName = personName.trim();
        tempMovie.personSurname = personSurname.trim();
        tempMovie.dateOfRent = dateOfRent.trim();
        this.movieService.create(tempMovie)
            .then(function (movie) {
            _this.movies.push(movie);
            _this.selectedMovie = null;
        });
    };
    VHSList.prototype.rent = function (movie) {
        var _this = this;
        movie.rented = !movie.rented;
        this.movieService.update(movie).then(function () {
            _this.movies = _this.movies.filter(function (h) { return h !== movie; });
            if (_this.selectedMovie === movie) {
                _this.selectedMovie = null;
            }
        });
    };
    VHSList.prototype.ngOnInit = function () {
        this.getMovies();
    };
    VHSList.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    VHSList.prototype.sortBy = function (criteria) {
        this.sortType = criteria;
    };
    return VHSList;
}());
VHSList = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.vhsList.html',
        styleUrls: ['./vhsList.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        app_movie_service_1.MovieService,
        common_1.Location])
], VHSList);
exports.VHSList = VHSList;
//# sourceMappingURL=app.component.vhsList.js.map