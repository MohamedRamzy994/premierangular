import { ResultProductUnits } from './../../models/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from './../general/log.service';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';
import { ResultUnits } from '../../models/transferkinds';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListproductunitsbyidService {
  public listproductunitsapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public GetProductUnites(_productID: number): Observable<ResultUnits> {
    this.listproductunitsapiurl = this._apiurlService.apiUrl.concat('/api/TransferKindsApi/GetProductUnites?ProductID=' + _productID);

    return this.http.get<ResultUnits>(this.listproductunitsapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultUnits>('ListproductunitsbyidService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListproductunitsbyidService: ${message}`);
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
