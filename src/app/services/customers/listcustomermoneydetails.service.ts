import { ResultSupplierMoneyDetails } from '../../models/suppliers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultSuppliers } from '../../models/suppliers';
import { ResultCustomerMoneyDetails } from 'src/app/models/customers';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListcustomermoneydetailsService {
  public listcustomermoneydetailsapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }

  public ListCustomerMoneyDetails(_customerID: number): Observable<ResultCustomerMoneyDetails> {
    this.listcustomermoneydetailsapiurl = this._apiurlService.apiUrl
    .concat('/api/CustomersApi/GetAllCustomerMoneyDetails?CustomerID=' + _customerID );
    return this.http.get<ResultCustomerMoneyDetails>(this.listcustomermoneydetailsapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultCustomerMoneyDetails>(' ListcustomermoneydetailsService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(` ListcustomermoneydetailsService: ${message}`);
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


