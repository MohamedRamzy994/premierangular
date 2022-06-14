import { AddSupplierModel, ResultAddSupplier } from './../../models/suppliers';
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
export class AddsupplierService {
public addsuppliereapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}


   public AddSupplier(_supplier: AddSupplierModel): Observable<ResultAddSupplier> {
    this.addsuppliereapiurl = this._apiurlService.apiUrl.concat('/api/SuppliersApi/AddSupplier');


    return this.http.post<ResultAddSupplier>(this.addsuppliereapiurl, _supplier, httpOptions).
    pipe(catchError(this.handleError<ResultAddSupplier>('AddsupplierService')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddsupplierService: ${message}`);
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
