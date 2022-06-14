import { Resultproductgroups } from '../../models/resultproductgroups';
import { Injectable } from '@angular/core';
import { ApiurlService } from '../general/apiurl.service';
import { Logservice } from '../general/log.service';
import { Observable, of } from 'rxjs';
import { Result } from '../../models/result';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResultProductBuySelectMainInvoices } from 'src/app/models/productbuy';
import { ResultProductSaleSelectMainInvoices, ResultProductSaleInvoiceMainDetails, ResultProductSaleInvoiceItems } from 'src/app/models/productsales';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListproductsalemaininvoicemainitemsService {
  private listproductmaininvoicesapiurl: string;
  private resultList: ResultProductSaleInvoiceItems;
  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) { }
  listProductSaleMainInvoiceItems(InvoiceID: number): Observable<ResultProductSaleInvoiceItems> {

    this.listproductmaininvoicesapiurl = this._apiurl.apiUrl
    .concat('/api/ProductSalesApi/GetProductSaleInvoiceItems?InvoiceID=' + InvoiceID);

    return this.http.get<ResultProductSaleInvoiceItems>(this.listproductmaininvoicesapiurl, httpOptions
    ).pipe(
      catchError(this.handleError<ResultProductSaleInvoiceItems>('ListproductsalemaininvoicemainitemsService'))
    );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListproductsalemaininvoicemainitemsService: ${message}`);
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
