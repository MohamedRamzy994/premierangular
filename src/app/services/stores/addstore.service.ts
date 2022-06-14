import { Stores } from './../../models/stores';
import { Resultstores } from './../../models/resultstores';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from './../general/log.service';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddstoreService {
public addstoreapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}


   public AddStore(_store: Stores): Observable<Resultstores> {
    this.addstoreapiurl = this._apiurlService.apiUrl.concat('/api/StoresApi/AddStore');


    return this.http.post<Resultstores>(this.addstoreapiurl, _store, httpOptions).
    pipe(catchError(this.handleError<Resultstores>('AddStore')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddStoreService: ${message}`);
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
