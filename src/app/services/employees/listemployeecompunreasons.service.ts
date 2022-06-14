import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultSuppliers } from '../../models/suppliers';
import { ResultListEmployees, ResultListEmployeeComPunishReasons } from '../../models/employees';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListemployeecompunreasonsService {
  public listemployeecompunreasonsapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }
  public ListEmployeeComPunReasons(): Observable<ResultListEmployeeComPunishReasons> {
    this.listemployeecompunreasonsapiurl = this._apiurlService.apiUrl.concat('/api/EmployeeComPunReason/GetAllEmployeeComPunReason');
    return this.http.get<ResultListEmployeeComPunishReasons>(this.listemployeecompunreasonsapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultListEmployeeComPunishReasons>('ListemployeecompunreasonsService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListemployeecompunreasonsService: ${message}`);
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


