import { ResultSupplierMoneyDetails, ResultGetSupplierMonyActionDetails } from '../../models/suppliers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultSuppliers } from '../../models/suppliers';
import { ResultGetCustomerMonyActionDetails } from 'src/app/models/customers';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListcustomermoneyactiondetailsService {
  public listcustomermoneyactiondetailsapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public GetMoneyActionDetails(_payID: number): Observable< ResultGetCustomerMonyActionDetails> {
    this.listcustomermoneyactiondetailsapiurl = this._apiurlService.apiUrl
    .concat('/api/CustomersApi/GetCustomerMonyActionDetails?PayID=' + _payID );
    return this.http.get< ResultGetCustomerMonyActionDetails>(this.listcustomermoneyactiondetailsapiurl, httpOptions).
      pipe(catchError(this.handleError< ResultGetCustomerMonyActionDetails>(' ListcustomermoneyactiondetailsService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(` ListcustomermoneyactiondetailsService: ${message}`);
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


