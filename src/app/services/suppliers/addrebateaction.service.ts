import { AddRebateActionModel } from './../../models/suppliers';
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
export class AddrebateactionService {
public addrebateactionapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}


   public AddRebateAction(_addrebateactionModel: AddRebateActionModel): Observable<ResultAddRebateAction> {
    this.addrebateactionapiurl = this._apiurlService.apiUrl.concat('/api/SuppliersApi/AddRebateAction');


    return this.http.post<ResultAddRebateAction>(this.addrebateactionapiurl, _addrebateactionModel, httpOptions).
    pipe(catchError(this.handleError<ResultAddRebateAction>('AddrebateactionService')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddrebateactionService: ${message}`);
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
