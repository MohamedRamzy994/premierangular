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
import { AddActivityModel, ResultAddActivityRecord, AddNotificationModel,
   ResultAddNotificationRecord, 
   ResultListAllSalesPointsNotificationsRecords,
   AddSalesPointsNotificationModel} from 'src/app/models/notificationsactivities';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CreatesalespointsnotificationService {
public addstoreapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}

   public CreateSalesPointsNotificationRecord(_addNotificationModel: AddSalesPointsNotificationModel)
   : Observable<ResultAddActivityRecord> {
    this.addstoreapiurl = this._apiurlService.apiUrl.concat('/api/NotificationsActivitiesApi/CreateSalesPointsNotificationRecord');
    return this.http.post<ResultAddActivityRecord>(this.addstoreapiurl, _addNotificationModel , httpOptions).
    pipe(catchError(this.handleError<ResultAddActivityRecord>('CreatenotificationService')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`CreatenotificationService: ${message}`);
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
