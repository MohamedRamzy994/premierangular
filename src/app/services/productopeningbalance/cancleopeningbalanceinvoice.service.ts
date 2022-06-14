import { ProductOpenningBalanceModel, ResultOpenningBalance, ProductOpenningCancleInvoiceModel } from '../../models/productopenningbalance';
import { ResultTransfer, TransferKindsModel } from '../../models/transferkinds';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CancleopeningbalanceinvoiceService {
  public addproductopeningbalanceapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public CancleOpeningBalanceInvoice(_productOpenningBalanceModel: ProductOpenningCancleInvoiceModel): Observable<ResultOpenningBalance> {
    this.addproductopeningbalanceapiurl = this._apiurlService.apiUrl.concat('/api/OpeningBalanceApi/ProductOpenningCancleInvoice');

    return this.http.post<ResultOpenningBalance>(this.addproductopeningbalanceapiurl, _productOpenningBalanceModel, httpOptions).
      pipe(catchError(this.handleError<ResultOpenningBalance>('CancleopeningbalanceinvoiceService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`CancleopeningbalanceinvoiceService: ${message}`);
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
