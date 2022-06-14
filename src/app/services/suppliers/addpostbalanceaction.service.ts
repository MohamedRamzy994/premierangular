import { AddRebateActionModel, AddPostBalanceActionModel, ResultAddPostBalanceAction } from './../../models/suppliers';
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
export class AddpostbalanceactionService {
public addpostbalanceactionpiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}


   public AddPostBalanceAction(_addPostBalanceActionModel: AddPostBalanceActionModel): Observable<ResultAddPostBalanceAction> {
    this.addpostbalanceactionpiurl = this._apiurlService.apiUrl.concat('/api/SuppliersApi/AddPostBalanceAction');


    return this.http.post<ResultAddPostBalanceAction>(this.addpostbalanceactionpiurl, _addPostBalanceActionModel, httpOptions).
    pipe(catchError(this.handleError<ResultAddPostBalanceAction>('AddpostbalanceactionService')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddpostbalanceactionService: ${message}`);
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
