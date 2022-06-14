import { ResultProducts, ProductBasicModel } from './../../models/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from './../general/log.service';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';
import { ProductsUnitsSupplierModel, ResultProductUnits } from '../../models/products';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EditproductunitsService {
  public editproductunitsapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public EditProductunits(_productunits: ProductsUnitsSupplierModel): Observable<ResultProductUnits> {
    this.editproductunitsapiurl = this._apiurlService.apiUrl.concat('/api/ProductsApi/EditProductUnits');


    return this.http.post<ResultProductUnits>(this.editproductunitsapiurl, _productunits, httpOptions).
      pipe(catchError(this.handleError<ResultProductUnits>('EditproductunitsService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`EditproductunitsService: ${message}`);
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


