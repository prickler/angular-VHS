"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_component_vhsList_1 = require("./app.component.vhsList");
var app_component_rentTapes_1 = require("./app.component.rentTapes");
var app_movie_service_1 = require("./app.movie.service");
var app_rented_pipe_1 = require("./app.rented.pipe");
var app_free_pipe_1 = require("./app.free.pipe");
var app_sort_pipe_1 = require("./app.sort.pipe");
var app_filter_pipe_1 = require("./app.filter.pipe");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_in_memory_data_service_1 = require("./app.in-memory-data-service");
var appRoutes = [
    { path: 'vhsList', component: app_component_vhsList_1.VHSList },
    { path: 'rentTapes', component: app_component_rentTapes_1.RentTapes },
    {
        path: '',
        redirectTo: '/vhsList',
        pathMatch: 'full'
    },
    { path: '**', component: app_component_1.AppComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes), angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(app_in_memory_data_service_1.InMemoryDataService), forms_1.FormsModule, http_1.JsonpModule, forms_2.ReactiveFormsModule,],
        declarations: [app_component_1.AppComponent, app_component_vhsList_1.VHSList, app_component_rentTapes_1.RentTapes, app_rented_pipe_1.RentedPipe, app_free_pipe_1.FreePipe, app_sort_pipe_1.SortPipe, app_filter_pipe_1.MovieFilterPipe],
        providers: [app_movie_service_1.MovieService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map