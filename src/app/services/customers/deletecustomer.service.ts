import { ResultDeletSupplier } from '../../models/suppliers';
import { AddSupplierModel, ResultAddSupplier, SupplierModel } from '../../models/suppliers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultDeletCustomer, ListCustomersModel } from 'src/app/models/customers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DeletecustomerService {
public deletecustomerapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}
   public DeleteCustomer(_customer: ListCustomersModel): Observable<ResultDeletCustomer> {
    this.deletecustomerapiurl = this._apiurlService.apiUrl.concat('/api/CustomersApi/DeleteCustomer');
    return this.http.post<ResultDeletCustomer>(this.deletecustomerapiurl, _customer, httpOptions).
    pipe(catchError(this.handleError<ResultDeletCustomer>('DeletecustomerService')));

   }

     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`DeletecustomerService: ${message}`);
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
