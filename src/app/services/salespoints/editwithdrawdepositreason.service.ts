import { ResultProducts, ProductBasicModel } from '../../models/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddAdditionalCostEventModel } from 'src/app/models/salespoints';
import { ListWithdrawDepositReasonModel } from '../../models/salespoints';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EditwithdrawdepositreasonService {
  public addproductbasicapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }


  public EditWithdrawDepositReason(_listWithdrawDepositReasonModel: ListWithdrawDepositReasonModel): Observable<ResultProducts> {
    this.addproductbasicapiurl = this._apiurlService.apiUrl.concat('/api/SalesPointsApi/EditWithdrawDepositReason');


    return this.http.post<ResultProducts>(this.addproductbasicapiurl, _listWithdrawDepositReasonModel, httpOptions).
      pipe(catchError(this.handleError<ResultProducts>('EditwithdrawdepositreasonService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`EditwithdrawdepositreasonService: ${message}`);
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
