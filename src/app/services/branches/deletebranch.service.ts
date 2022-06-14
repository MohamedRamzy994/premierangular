import { Resultstores } from '../../models/resultstores';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { Result } from '../../models/result';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Stores } from '../../models/stores';
import { ResultAddAdditionalCostEvent } from '../../models/salespoints';
import { ResultAddBranch } from '../../models/branches';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeletebranchService {

  private deletestoreurl: string;

  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) {  }
  DeleteBranch(_branchID: number): Observable<ResultAddBranch> {

      this.deletestoreurl = this._apiurl.apiUrl.concat('/api/BranchesApi/DeleteBranch?BranchID=' + _branchID);

      return this.http.post<ResultAddBranch>(this.deletestoreurl , httpOptions)
      .pipe(
        catchError(this.handleError<ResultAddBranch>('DeletebranchService'))
      );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`DeletebranchService: ${message}`);
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

