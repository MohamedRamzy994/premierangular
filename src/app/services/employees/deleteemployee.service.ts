import { ResultDeletEmployee } from './../../models/employees';
import { ResultDeletSupplier } from '../../models/suppliers';
import { AddSupplierModel, ResultAddSupplier, SupplierModel } from '../../models/suppliers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ListEmployeesModel } from 'src/app/models/employees';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DeleteemployeeService {
public deleteemployeeapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}
   public DeleteEmployee(_supplier: ListEmployeesModel): Observable<ResultDeletEmployee> {
    this.deleteemployeeapiurl = this._apiurlService.apiUrl.concat('/api/EmployeesApi/DeleteEmployee');


    return this.http.post<ResultDeletEmployee>(this.deleteemployeeapiurl, _supplier, httpOptions).
    pipe(catchError(this.handleError<ResultDeletEmployee>('DeleteemployeeService')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`DeleteemployeeService: ${message}`);
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
