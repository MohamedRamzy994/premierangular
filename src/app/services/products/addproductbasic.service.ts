import { ResultProducts, ProductBasicModel } from './../../models/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from './../general/log.service';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddproductbasicService {
  public addproductbasicapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public AddProductBasic(_productbasic: ProductBasicModel): Observable<ResultProducts> {
    this.addproductbasicapiurl = this._apiurlService.apiUrl.concat('/api/ProductsApi/AddProductBaisc');


    return this.http.post<ResultProducts>(this.addproductbasicapiurl, _productbasic, httpOptions).
      pipe(catchError(this.handleError<ResultProducts>('AddProductBasic')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddProductBasicService: ${message}`);
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
