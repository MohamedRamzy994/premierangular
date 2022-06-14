import { Injectable } from '@angular/core';
import { ApiurlService } from '../general/apiurl.service';
import { Logservice } from '../general/log.service';
import { Observable, of } from 'rxjs';
import { ResultListSalesPoints } from 'src/app/models/salespoints';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GetsalespointbalanceService {


  private salespointslistapiurl: string;


  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) { }

 public GetSalesPointBalance(salesPointID: number): Observable<ResultListSalesPoints> {

    this.salespointslistapiurl = this._apiurl.apiUrl.concat('/api/SalesPointsApi/GetSalesPointBalance?SalesPointID=' + salesPointID);

    return this.http.get<ResultListSalesPoints>(this.salespointslistapiurl, httpOptions
    ).pipe(
      catchError(this.handleError<ResultListSalesPoints>('GetSalesPointBalance'))
    );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`GetSalesPointBalance: ${message}`);
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
