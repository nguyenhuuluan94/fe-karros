import {StarRatingComponent} from './components/star-rating/star-rating.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingComponent} from './components/rating/rating.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    RatingComponent,
    StarRatingComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RatingComponent,
    StarRatingComponent,
    MovieCardComponent
  ]
})
export class SharedModule {
}
