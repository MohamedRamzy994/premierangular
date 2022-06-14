import { Stores } from '../../models/stores';
import { Resultstores } from '../../models/resultstores';
import { Injectable } from '@angular/core';
import { ApiurlService } from '../general/apiurl.service';
import { Logservice } from '../general/log.service';
import { Observable, of } from 'rxjs';
import { Result } from '../../models/result';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResultListBanks } from '../../models/bankcheck';
import { ResultListProductMoveMentReport, ResultListSupplierProductsInStoreReport } from 'src/app/models/reports';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListproductsupplierinstorereportService {

  private banksListapiurl: string;


  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) { }

  ListProductSupplierInStoreReport(_storeID: number): Observable<ResultListSupplierProductsInStoreReport> {

    this.banksListapiurl = this._apiurl.apiUrl.concat('/api/ReportsApi/SupplierProductsInStoreReport?StoreID=' + _storeID);

    return this.http.get<ResultListSupplierProductsInStoreReport>(this.banksListapiurl, httpOptions
    ).pipe(
      catchError(this.handleError<ResultListSupplierProductsInStoreReport>('ListproductsupplierinstorereportService'))
    );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListproductsupplierinstorereportService: ${message}`);
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
