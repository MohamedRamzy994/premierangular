import { ResultListResetStockItems } from './../../models/productresetstock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultListOpeningBalanceItems } from '../../models/productopenningbalance';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListproductresetstockinvoiceitemsService {
  public listproductresetstockinvoiceitemsapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public GeAllProductResetStockInvoiceItems(invoiceID: number): Observable<ResultListResetStockItems> {
    this.listproductresetstockinvoiceitemsapiurl = this._apiurlService.apiUrl
    .concat('/api/ProductResetStockApi/GetProductResetStockInvoiceItems?InvoiceID=' + invoiceID);

    return this.http.get<ResultListResetStockItems>(this.listproductresetstockinvoiceitemsapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultListResetStockItems>('ListproductresetstockinvoiceitemsService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListproductresetstockinvoiceitemsService: ${message}`);
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


