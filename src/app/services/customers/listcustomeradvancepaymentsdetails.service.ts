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
export class ListcustomeradvancepaymentsdetailsService {
  public listcustomeradvancepaymentsdetailsapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public ListCustomerAdvancePaymentsDetails(_customerID: number): Observable< ResultCustomerMoneyDetails> {
    this.listcustomeradvancepaymentsdetailsapiurl = this._apiurlService.apiUrl
    .concat('/api/CustomersApi/GetAllCustomerMoneyDetailsAdvancePayments?CustomerID=' + _customerID );
    return this.http.get< ResultCustomerMoneyDetails>(this.listcustomeradvancepaymentsdetailsapiurl, httpOptions).
      pipe(catchError(this.handleError< ResultCustomerMoneyDetails>(' ListcustomeradvancepaymentsdetailsService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(` ListcustomeradvancepaymentsdetailsService: ${message}`);
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


