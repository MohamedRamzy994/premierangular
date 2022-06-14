import { Stores } from '../../models/stores';
import { Resultstores } from '../../models/resultstores';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ResultAddAdditionalCostEvent } from 'src/app/models/salespoints';
import { AddBranchModel, ResultAddBranch } from '../../models/branches';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UpdateactivityService {
public addstoreapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}
   public UpdateActivityRecord(ID: number, Read: boolean): Observable<ResultAddActivityRecord> {
    this.addstoreapiurl = this._apiurlService.apiUrl
    .concat('/api/NotificationsActivitiesApi/UpdateActivityRecord?ID=' + ID + '&Read=' + Read );
    return this.http.post<ResultAddActivityRecord>(this.addstoreapiurl , httpOptions).
    pipe(catchError(this.handleError<ResultAddActivityRecord>('UpdateactivityService')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`UpdateactivityService: ${message}`);
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
