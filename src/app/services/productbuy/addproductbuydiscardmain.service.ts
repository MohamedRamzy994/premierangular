import { ProductBuyDiscardMainModel } from './../../models/productbuy';
import { ProductOpenningBalanceModel, ResultOpenningBalance } from '../../models/productopenningbalance';
import { ResultTransfer, TransferKindsModel } from '../../models/transferkinds';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductBuyTableModel, ProductBuyMainTableModel, ResultAddProductBuy } from '../../models/productbuy';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddproductbuydiscardmainService {
  public addproductbuydiscardmainapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }

  public addProductBuyDiscardAddMain(_productBuyDiscardMainModel: ProductBuyDiscardMainModel): Observable<ResultAddProductBuy> {
    this.addproductbuydiscardmainapiurl = this._apiurlService.apiUrl.concat('/api/ProductBuyApi/AddProductDiscardMainItems');

    return this.http.post<ResultAddProductBuy>(this.addproductbuydiscardmainapiurl, _productBuyDiscardMainModel, httpOptions).
      pipe(catchError(this.handleError<ResultAddProductBuy>('AddproductbuydiscardmainService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddproductbuydiscardmainService: ${message}`);
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