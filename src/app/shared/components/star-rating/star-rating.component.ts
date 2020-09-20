import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})

export class StarRatingComponent implements OnInit {
  originStars = 0;
  roundedStars = 0;
  numberOfHalfStar = 0;

  @Input() set stars(stars) {
    this.originStars = stars;
    this.roundedStars = Math.floor(stars);
    const decimal = stars - Math.floor(stars);
    if (decimal !== 0) {
      this.numberOfHalfStar = 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  counter(i: number) {
    return new Array(i);
  }
}
