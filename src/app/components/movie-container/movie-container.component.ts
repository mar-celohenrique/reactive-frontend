import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import MovieDTO from 'src/app/dtos/movie.dto';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent implements OnInit {
  @Input()
  movies: MovieDTO[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
