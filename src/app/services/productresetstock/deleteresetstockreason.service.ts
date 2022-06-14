import { ResultProducts, ProductBasicModel } from '../../models/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddAdditionalCostEventModel, ResultAddAdditionalCostEvent } from 'src/app/models/salespoints';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DeleteresetstockreasonService {
  public addproductbasicapiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }

  public DeleteResetStockReason(_reasonID: number): Observable<ResultAddAdditionalCostEvent> {
    this.addproductbasicapiurl = this._apiurlService.apiUrl
    .concat('/api/ProductResetStockApi/DeleteResetStockReason?ReasonID=' + _reasonID );


    return this.http.post<ResultAddAdditionalCostEvent>(this.addproductbasicapiurl, httpOptions).
      pipe(catchError(this.handleError<ResultAddAdditionalCostEvent>('DeleteresetstockreasonService')));

  }


  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`DeleteresetstockreasonService: ${message}`);
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
