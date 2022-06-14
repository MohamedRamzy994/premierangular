import { Stores } from './../../models/stores';
import { Resultstores } from './../../models/resultstores';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';
import { Logservice } from './../general/log.service';
import { Result } from './../../models/result';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { User } from '../../models/user';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EditstoreService {

  private editestoreurl: string;

  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) { }

  public editStore(_store: Stores): Observable<Resultstores> {

    this.editestoreurl = this._apiurl.apiUrl.concat('/api/StoresApi/EditStore');

    return this.http.put<Resultstores>(this.editestoreurl, _store, httpOptions)
      .pipe(
        catchError(this.handleError<Result>('editstore'))
      );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`EditStoreService: ${message}`);
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

