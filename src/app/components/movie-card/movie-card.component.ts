import { Component, OnInit, Input } from '@angular/core';
import MovieDTO from 'src/app/dtos/movie.dto';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie: MovieDTO;

  constructor() { }

  ngOnInit(): void {
  }

  public getMoviePosterSource(movie: MovieDTO): string {
    return `url(${movie.poster && movie.poster !== 'N/A' ? movie.poster : '/assets/unavaliable_poster.png'})`;
  }
}
