import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';
import { Logservice } from './log.service';
import { Observable, of } from 'rxjs';
import { ResultGetSystemSettings } from 'src/app/models/settings';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AppsettingsService {
  private oauthapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
    this.oauthapiurl = this._apiurlService.apiUrl.concat('/api/SettingsApi/GetSystemSettings');
  }

  public AppSettings(): Observable<ResultGetSystemSettings> {
    return this.http.get<ResultGetSystemSettings>(this.oauthapiurl, httpOptions)
      .pipe(
        catchError(this.handleError<ResultGetSystemSettings>('AppsettingsService'))
      );

  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AppsettingsService: ${message}`);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      // TODO : send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO : better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
