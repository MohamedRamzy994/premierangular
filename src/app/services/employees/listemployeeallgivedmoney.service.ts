import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultSuppliers } from '../../models/suppliers';
import { ResultListEmployees, ResultListEmployeeComPunishReasons,
   ResultListAllEmployeeSalary, ResultListAllEmployeeGivedMoney } from '../../models/employees';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListemployeeallgivedmoneyService {
  public listemployeeallgivedmoneyapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }
  public ListEmployeeAllGivedMoney(EmpID: number): Observable<ResultListAllEmployeeGivedMoney> {
    this.listemployeeallgivedmoneyapiurl = this._apiurlService.apiUrl.concat('/api/EmployeesApi/GetAllGivedMoney?EmpID=' + EmpID);
    return this.http.get<ResultListAllEmployeeGivedMoney>(this.listemployeeallgivedmoneyapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultListAllEmployeeGivedMoney>('ListemployeeallgivedmoneyService')));
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`ListemployeeallgivedmoneyService: ${message}`);
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


