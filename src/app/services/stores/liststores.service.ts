import { Stores } from './../../models/stores';
import { Resultstores } from './../../models/resultstores';
import { Injectable } from '@angular/core';
import { ApiurlService } from '../general/apiurl.service';
import { Logservice } from '../general/log.service';
import { Observable, of } from 'rxjs';
import { Result } from '../../models/result';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListstoresService {

  private storeListapiurl: string;
  private storesList: Resultstores;


  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) { }

  listStores(): Observable<Resultstores> {

    this.storeListapiurl = this._apiurl.apiUrl.concat('/api/StoresApi/GetAllStores');

    return this.http.get<Resultstores>(this.storeListapiurl, httpOptions
    ).pipe(
      catchError(this.handleError<Result>('storelist'))
    );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`StoresListService: ${message}`);
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
