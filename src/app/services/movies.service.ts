import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseURL: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseURL = 'https://api.themoviedb.org/3/';
    this.apiKey = 'SUA_APIKey';
    this.language = 'pt-BR';
    this.region = 'BR';
   }

  getMoviesPopular(page: number): Observable<any>{
     return this.http.get(`${this.baseURL}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`)
   }

  searchMovies(searchText: string, page: number): Observable<any>{
    return this.http.get(`${this.baseURL}search/movie?api_key=${this.apiKey}&query=${searchText}&page=${page}&language=${this.language}&region=${this.region}`)
  }
}
