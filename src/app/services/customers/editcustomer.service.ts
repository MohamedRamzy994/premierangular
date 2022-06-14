import { AddSupplierModel, ResultAddSupplier } from '../../models/suppliers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddCustomerModel, ResultAddCustomer } from 'src/app/models/customers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EditcustomerService {
public editcustomerapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}

   public EditCustomer(_customer: AddCustomerModel): Observable<ResultAddCustomer> {
    this.editcustomerapiurl = this._apiurlService.apiUrl.concat('/api/CustomersApi/EditCustomer');


    return this.http.post<ResultAddCustomer>(this.editcustomerapiurl, _customer, httpOptions).
    pipe(catchError(this.handleError<ResultAddCustomer>('EditcustomerService')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`EditcustomerService: ${message}`);
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
