import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventSourceService {

  constructor() { }

  observeMessages(url: string): Observable<MessageEvent> {
    return new Observable<MessageEvent>(obs => {
      const source = new EventSource(url);

      source.addEventListener('open', (evt: MessageEvent) => {
        obs.next(evt);
      })

      source.addEventListener('message', (evt: MessageEvent) => {
        obs.next(evt);
      });

      source.addEventListener('error', (evt: MessageEvent) => {
        obs.next(evt);
        source.close()
      });

      return () => source.close()
    });
  }

}
