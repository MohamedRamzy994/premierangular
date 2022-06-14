import { ResultListCommisionAndPunishCanceld } from './../../models/employees';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultSuppliers } from '../../models/suppliers';
import { ResultListEmployees, ResultListDebitsToke } from '../../models/employees';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListemployeescompuncanceldService {
  public listemployeescompuncanceldapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }
  public ListEmployeesCommisionPunishCanceld(EmpID: number): Observable<ResultListCommisionAndPunishCanceld> {
    this.listemployeescompuncanceldapiurl = this._apiurlService.apiUrl
    .concat('/api/EmployeesApi/GetAllCanceldCommisionAndPunishCancled?EmpID=' + EmpID);
    return this.http.get<ResultListCommisionAndPunishCanceld>(this.listemployeescompuncanceldapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultListCommisionAndPunishCanceld>('ListemployeescompuncanceldService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListemployeescompuncanceldService: ${message}`);
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


