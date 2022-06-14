import { ListBranchesModel } from 'src/app/models/branches';
import { Stores } from '../../models/stores';
import { Resultstores } from '../../models/resultstores';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ListBanksModel } from '../../models/bankcheck';
import { ResultAddBranch } from '../../models/branches';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EditbranchService {
  private editestoreurl: string;
  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) { }

  public EditBranch(_branch: ListBranchesModel): Observable<ResultAddBranch> {

    this.editestoreurl = this._apiurl.apiUrl.concat('/api/BranchesApi/EditBranch');

    return this.http.put<ResultAddBranch>(this.editestoreurl, _branch, httpOptions)
      .pipe(
        catchError(this.handleError<ResultAddBranch>('EditbranchService'))
      );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`EditbranchService: ${message}`);
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
