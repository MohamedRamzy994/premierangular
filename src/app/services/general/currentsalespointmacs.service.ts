import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';
import { Logservice } from './log.service';
import { Observable, of } from 'rxjs';
import { ResultGetSystemSettings, CurrentMacAddresses } from 'src/app/models/settings';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CurrentsalespointmacsService {
  private oauthapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
    this.oauthapiurl = this._apiurlService.apiUrl.concat('/api/SettingsApi/GetSalesPointMacAddress');
  }

  public GetCurrentSalesPointMacs(): Observable<CurrentMacAddresses> {
    return this.http.get<CurrentMacAddresses>(this.oauthapiurl, httpOptions)
      .pipe(
        catchError(this.handleError<CurrentMacAddresses>('CurrentsalespointmacsService'))
      );

  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`CurrentsalespointmacsService: ${message}`);
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
