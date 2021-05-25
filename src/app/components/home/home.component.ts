import { Movie } from './../../models/movie';
import { defaultApi } from './../../models/defaultApi';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies(1)
  }

  getMovies(page: number){
    this.moviesService.getMoviesPopular(page).subscribe((res: defaultApi<Movie[]>) => {
      this.movies = res.results;
    })
  }

  searchMovie(text: string, page = 1){
    if(text !== null && text !== '') {
      this.moviesService.searchMovies(text, page).subscribe((res: defaultApi<Movie[]>)=>{
        this.movies = res.results
      });
    }else{
      this.getMovies(1);
    }
  }

}
