export default class MovieDTO {

  private _title: string;

  private _year: string;

  private _poster: string;


  constructor(title: string, year: string, poster: string) {
    this._title = title;
    this._year = year;
    this._poster = poster;
  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get year(): string {
    return this._year;
  }

  set year(value: string) {
    this._year = value;
  }

  get poster(): string {
    return this._poster;
  }

  set poster(value: string) {
    this._poster = value;
  }

}
