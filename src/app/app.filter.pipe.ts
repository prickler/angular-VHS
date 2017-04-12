import  {  Pipe,  PipeTransform  }  from  '@angular/core'
import  { Movie }  from  './app.movie';

@Pipe({
        name:  'filter'
})

export  class  MovieFilterPipe  implements  PipeTransform  {
        transform(value: Movie[],  filterBy:  string):  Movie[]  {
                filterBy  =  filterBy  ?  filterBy.toLocaleLowerCase()  :  null;
                return  filterBy  ?  value.filter((movie: Movie)  =>
            movie.name.toLocaleLowerCase().indexOf(filterBy)  !==  -1)  :  value;
        }
} 
