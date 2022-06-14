import { AddCheckRebateActionModel,
   ResultAddCheckRebateAction, AddSupplierCancelMoneyAction,
   ResultAddCancelMoneyAction } from '../../models/suppliers';
import { AddRebateActionModel } from '../../models/suppliers';
import { AddSupplierModel, ResultAddSupplier,
   ResultAddRebateAction } from '../../models/suppliers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddCustomerCancelMoneyAction } from 'src/app/models/customers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddcustomercancelmoneyactionService {
public addcustomercancelmoneyactionapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}


   public AddCustomerCancelMoneyAction(_addCustomerCancelMoneyAction: AddCustomerCancelMoneyAction):
    Observable<ResultAddCancelMoneyAction> {
    this.addcustomercancelmoneyactionapiurl = this._apiurlService.apiUrl.concat('/api/CustomersApi/AddCustomerCancelMoneyAction');


    return this.http.post<ResultAddCancelMoneyAction>(this.addcustomercancelmoneyactionapiurl, _addCustomerCancelMoneyAction, httpOptions).
    pipe(catchError(this.handleError<ResultAddCancelMoneyAction>('AddcustomercancelmoneyactionService')));

   }

     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddcustomercancelmoneyactionService: ${message}`);
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
