import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from './../general/log.service';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';
import { ResultSuppliers } from '../../models/suppliers';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListsuppliersService {
  public listsuppliersapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public ListSuppliers(): Observable< ResultSuppliers> {
    this.listsuppliersapiurl = this._apiurlService.apiUrl.concat('/api/SuppliersApi/GetAllSuppliers');
    return this.http.get<ResultSuppliers>(this.listsuppliersapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultSuppliers>('ListsuppliersService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListsuppliersService: ${message}`);
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


