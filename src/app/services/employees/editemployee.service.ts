import { AddSupplierModel, ResultAddSupplier } from '../../models/suppliers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddEmployeeModel, ResultAddEmployee } from 'src/app/models/employees';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EditemployeeService {
public editemployeeapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}


   public EditEmployee(_employee: AddEmployeeModel): Observable<ResultAddEmployee> {
    this.editemployeeapiurl = this._apiurlService.apiUrl.concat('/api/EmployeesApi/EditEmployee?EmpID=' + _employee.EmpID);

    return this.http.post<ResultAddEmployee>(this.editemployeeapiurl, _employee, httpOptions).
    pipe(catchError(this.handleError<ResultAddEmployee>('EditemployeeService')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`EditemployeeService: ${message}`);
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
