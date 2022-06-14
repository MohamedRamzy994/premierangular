import { ProductBuyDiscardMainModel } from '../../models/productbuy';
import { ProductOpenningBalanceModel, ResultOpenningBalance } from '../../models/productopenningbalance';
import { ResultTransfer, TransferKindsModel } from '../../models/transferkinds';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductBuyTableModel, ProductBuyMainTableModel, ResultAddProductBuy } from '../../models/productbuy';
import { ProductSaleDiscardMainModel } from 'src/app/models/productsales';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddproductsalediscardmainService {
  public addproductsalediscardmainapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }

  public addProductSaleDiscardAddMain(_productSaleDiscardMainModel: ProductSaleDiscardMainModel): Observable<ResultOpenningBalance> {
    this.addproductsalediscardmainapiurl = this._apiurlService.apiUrl.concat('/api/ProductSalesApi/AddProductSaleDiscardMainItems');

    return this.http.post<ResultOpenningBalance>(this.addproductsalediscardmainapiurl, _productSaleDiscardMainModel, httpOptions).
      pipe(catchError(this.handleError<ResultOpenningBalance>('AddproductsalediscardmainService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddproductsalediscardmainService: ${message}`);
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