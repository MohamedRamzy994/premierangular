import { AddCheckRebateActionModel, ResultAddCheckRebateAction } from './../../models/suppliers';
import { AddRebateActionModel } from '../../models/suppliers';
import { AddSupplierModel, ResultAddSupplier, ResultAddRebateAction } from '../../models/suppliers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddCustomerCheckRebateActionModel } from 'src/app/models/customers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddcustomercheckrebateactionService {
public addcustomercheckrebateactionapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}
   public AddCustomerCheckRebateAction(_addCustomerCheckRebateActionModel: AddCustomerCheckRebateActionModel):
    Observable<ResultAddCheckRebateAction> {
    this.addcustomercheckrebateactionapiurl = this._apiurlService.apiUrl.concat('/api/CustomersApi/AddCustomerCheckRebateAction');

    return this.http.post<ResultAddCheckRebateAction>
    (this.addcustomercheckrebateactionapiurl, _addCustomerCheckRebateActionModel, httpOptions).
    pipe(catchError(this.handleError<ResultAddCheckRebateAction>('AddcustomercheckrebateactionService')));

   }

     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddcustomercheckrebateactionService: ${message}`);
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
