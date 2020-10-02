import { Component, NgZone, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, Observer, ReplaySubject, BehaviorSubject, Subscription } from "rxjs";
import { environment } from "../environments/environment";
import MovieDTO from "./dtos/movie.dto";
import { EventSourceService } from './services/event-source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  isStreamActive: boolean = false;
  movies: MovieDTO[] = [];

  private messageObservableSubscription: Subscription;

  constructor(private eventSourceService: EventSourceService) { }

  ngOnDestroy() {
    if (this.messageObservableSubscription) {
      this.messageObservableSubscription.unsubscribe();
    }
  }

  public onSearchTriggered(query: string): void {
    this.subscribeToNewSource(`${environment.api}/movies/${query}`);
  }

  private subscribeToNewSource(sourceUrl: string) {
    if (this.messageObservableSubscription) {
      this.closeEventStream();
    }

    this.isStreamActive = true;
    this.movies = [];

    this.messageObservableSubscription = this.eventSourceService.observeMessages(sourceUrl).subscribe(message => {
      switch ((message as Event).type) {
        case "error":
          this.closeEventStream();
          break;
        case "open":
          break;
        case "message":
          this.onSourceMessage(message);
          break;
        default:
          console.log("unknown event type");
      }
    });
  }

  private closeEventStream(): void {
    this.messageObservableSubscription.unsubscribe();
    this.isStreamActive = false;
  }

  private onSourceMessage(event: MessageEvent): void {
    if (event.data !== null) {
      const movie: MovieDTO = JSON.parse(event.data);
      this.movies.push(movie);
      this.movies.sort((a, b) => a.year > b.year ? 0 : 1);
    }
  }
}
