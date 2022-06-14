import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultListResetStockInvoices } from '../../models/productresetstock';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListproductresetstockinvoicesService {
  public listproductresetstockinvoicesapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }
  public GeAllProductResetStockInvoices(): Observable<ResultListResetStockInvoices> {
    this.listproductresetstockinvoicesapiurl = this._apiurlService.apiUrl
    .concat('/api/ProductResetStockApi/GetAllResetStockInvoices');

    return this.http.get<ResultListResetStockInvoices>(this.listproductresetstockinvoicesapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultListResetStockInvoices>('ListproductresetstockinvoicesService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListproductresetstockinvoicesService: ${message}`);
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

