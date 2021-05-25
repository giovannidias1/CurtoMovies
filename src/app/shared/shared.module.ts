import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMovieComponent } from './card-movie/card-movie.component';



@NgModule({
  declarations: [CardMovieComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardMovieComponent
  ]
})
export class SharedModule { }
