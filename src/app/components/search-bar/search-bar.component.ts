import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output()
  onSearchValueEmit: EventEmitter<string> = new EventEmitter();

  public initialView: boolean = true;
  public searchBarInput: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onKeyPressInSearchBar(): void {
    if (this.searchBarInput.trim() === '' || this.searchBarInput.trim().length < 3) {
      return;
    }
    this.initialView = false;
    this.onSearchValueEmit.emit(this.searchBarInput);
  }
}
