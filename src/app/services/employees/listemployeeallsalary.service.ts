import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultSuppliers } from '../../models/suppliers';
import { ResultListEmployees, ResultListEmployeeComPunishReasons, ResultListAllEmployeeSalary } from '../../models/employees';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListemployeeallsalaryService {
  public listemployeeallsalaryapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }
  public ListEmployeeAllSalary(EmpID: number): Observable<ResultListAllEmployeeSalary> {
    this.listemployeeallsalaryapiurl = this._apiurlService.apiUrl.concat('/api/EmployeesApi/GetAllEmployeeSalary?EmpID=' + EmpID);
    return this.http.get<ResultListAllEmployeeSalary>(this.listemployeeallsalaryapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultListAllEmployeeSalary>('ListemployeeallsalaryService')));

  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListemployeeallsalaryService: ${message}`);
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


