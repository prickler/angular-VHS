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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var app_movie_1 = require("./app.movie");
var app_movie_service_1 = require("./app.movie.service");
var RentedMovieDetailComponent = (function () {
    function RentedMovieDetailComponent(movieService, route, location) {
        this.movieService = movieService;
        this.route = route;
        this.location = location;
    }
    RentedMovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.movieService.getMovie(+params['id']); })
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    RentedMovieDetailComponent.prototype.save = function () {
        var _this = this;
        this.movieService.update(this.movie)
            .then(function () { return _this.goBack(); });
    };
    RentedMovieDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return RentedMovieDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", app_movie_1.Movie)
], RentedMovieDetailComponent.prototype, "movie", void 0);
RentedMovieDetailComponent = __decorate([
    core_1.Component({
        selector: 'rented-movie-detail',
        templateUrl: "./app.rented-movie-detail.component.html"
    }),
    __metadata("design:paramtypes", [app_movie_service_1.MovieService,
        router_1.ActivatedRoute,
        common_1.Location])
], RentedMovieDetailComponent);
exports.RentedMovieDetailComponent = RentedMovieDetailComponent;
//# sourceMappingURL=app.rent-movie-detail.component.js.map