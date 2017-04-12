import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VHSList } from './app.component.vhsList';
import { RentTapes } from './app.component.rentTapes';
import { MovieService } from './app.movie.service';
import { RentedPipe } from './app.rented.pipe';
import { FreePipe } from './app.free.pipe';
import { SortPipe } from './app.sort.pipe';
import { MovieFilterPipe } from './app.filter.pipe';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app.in-memory-data-service';

const appRoutes: Routes = [
  { path: 'vhsList', component: VHSList },
  { path: 'rentTapes', component: RentTapes },
  {
    path: '',
    redirectTo: '/vhsList',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), InMemoryWebApiModule.forRoot(InMemoryDataService), FormsModule, JsonpModule,  ReactiveFormsModule,],
  declarations: [AppComponent, VHSList, RentTapes, RentedPipe, FreePipe, SortPipe, MovieFilterPipe],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
