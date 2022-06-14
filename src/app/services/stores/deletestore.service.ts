import { Resultstores } from './../../models/resultstores';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from './../general/log.service';
import { Result } from './../../models/result';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Stores } from '../../models/stores';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeletestoreService {

  private deletestoreurl: string;

  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) {  }

  deleteStore(_store: Stores): Observable<Resultstores> {

      this.deletestoreurl = this._apiurl.apiUrl.concat('/api/StoresApi/DeleteStore');

      return this.http.post<Resultstores>(this.deletestoreurl , _store, httpOptions)
      .pipe(
        catchError(this.handleError<Result>('deletestore'))
      );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`DeletestoreService: ${message}`);
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

