import { Stores } from '../../models/stores';
import { Resultstores } from '../../models/resultstores';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ResultAddAdditionalCostEvent } from 'src/app/models/salespoints';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddbankService {
public addstoreapiurl: string ;
constructor(private _apiurlService: ApiurlService,
  private http: HttpClient,
  private _logservice: Logservice) {
}


   public AddBank(_bankName: string): Observable<ResultAddAdditionalCostEvent> {
    this.addstoreapiurl = this._apiurlService.apiUrl.concat('/api/BankCheckApi/AddBank?BankName=' + _bankName);


    return this.http.post<ResultAddAdditionalCostEvent>(this.addstoreapiurl, httpOptions).
    pipe(catchError(this.handleError<ResultAddAdditionalCostEvent>('AddbankService')));

   }


     // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddbankService: ${message}`);
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
