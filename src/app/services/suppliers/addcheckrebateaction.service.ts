import { AddCheckRebateActionModel, ResultAddCheckRebateAction } from './../../models/suppliers';
import { AddRebateActionModel } from '../../models/suppliers';
import { AddSupplierModel, ResultAddSupplier, ResultAddRebateAction } from '../../models/suppliers';
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
export class AddcheckrebateactionService {
public addcheckrebateactionapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}


   public AddCheckRebateAction(_addCheckRebateActionModel: AddCheckRebateActionModel): Observable<ResultAddCheckRebateAction> {
    this.addcheckrebateactionapiurl = this._apiurlService.apiUrl.concat('/api/SuppliersApi/AddCheckRebateAction');


    return this.http.post<ResultAddCheckRebateAction>(this.addcheckrebateactionapiurl, _addCheckRebateActionModel, httpOptions).
    pipe(catchError(this.handleError<ResultAddCheckRebateAction>('AddcheckrebateactionService')));

   }

     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddcheckrebateactionService: ${message}`);
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
