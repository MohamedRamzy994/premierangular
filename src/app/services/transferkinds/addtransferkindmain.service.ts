import { ResultTransfer, TransferKindsModel } from './../../models/transferkinds';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from './../general/log.service';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddtransferkindmainService {
  public addtransferkindmainapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public addTransferKindMain(_transferKindsModel: TransferKindsModel): Observable<ResultTransfer> {
    this.addtransferkindmainapiurl = this._apiurlService.apiUrl.concat('/api/TransferKindsApi/AddTransferStock');

    return this.http.post<ResultTransfer>(this.addtransferkindmainapiurl, _transferKindsModel, httpOptions).
      pipe(catchError(this.handleError<ResultTransfer>('AddtransferkindmainService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddtransferkindmainService: ${message}`);
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
