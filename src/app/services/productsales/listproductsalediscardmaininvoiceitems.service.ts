import { Resultproductgroups } from '../../models/resultproductgroups';
import { Injectable } from '@angular/core';
import { ApiurlService } from '../general/apiurl.service';
import { Logservice } from '../general/log.service';
import { Observable, of } from 'rxjs';
import { Result } from '../../models/result';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ResultProductBuySelectMainInvoices } from 'src/app/models/productbuy';
import { ResultProductBuyInvoiceItems, ResultProductBuyDiscardSelectMainInvoicesItems } from '../../models/productbuy';
import { ResultProductSaleDiscardSelectMainInvoicesItems } from 'src/app/models/productsales';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListproductsalediscardmaininvoiceitemsService {
  private listproductbuydiscardmaininvoiceitemsapiurl: string;
  private resultList: ResultProductSaleDiscardSelectMainInvoicesItems ;

  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) { }
  listProductSaleDiscardMainInvoiceItems(DiscardID: number): Observable<ResultProductSaleDiscardSelectMainInvoicesItems> {
    this.listproductbuydiscardmaininvoiceitemsapiurl = this._apiurl.apiUrl
    .concat('/api/ProductSalesApi/GetProductSaleDiscardInvoiceItems?DiscardID=' + DiscardID);
    return this.http
    .get<ResultProductSaleDiscardSelectMainInvoicesItems>(this.listproductbuydiscardmaininvoiceitemsapiurl, httpOptions
    ).pipe(
      catchError(this.handleError<ResultProductSaleDiscardSelectMainInvoicesItems>('ListproductsalediscardmaininvoiceitemsService'))
    );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListproductsalediscardmaininvoiceitemsService: ${message}`);
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
