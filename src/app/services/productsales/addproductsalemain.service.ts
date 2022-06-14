import { ProductOpenningBalanceModel, ResultOpenningBalance } from '../../models/productopenningbalance';
import { ResultTransfer, TransferKindsModel } from '../../models/transferkinds';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductBuyTableModel, ProductBuyMainTableModel, ResultAddProductBuy } from '../../models/productbuy';
import { ProductSaleMainTableModel } from 'src/app/models/productsales';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddproducsalemainService {
  public addproductsalemainapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }
  public addProductSaleAddMain(_productBuyMainTableModel: ProductSaleMainTableModel): Observable<ResultAddProductBuy> {
    this.addproductsalemainapiurl = this._apiurlService.apiUrl.concat('/api/ProductSalesApi/ProductSaleAddMain');

    return this.http.post<ResultAddProductBuy>(this.addproductsalemainapiurl, _productBuyMainTableModel, httpOptions).
      pipe(catchError(this.handleError<ResultAddProductBuy>('AddproducsalemainService')));

  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddproducsalemainService: ${message}`);
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
