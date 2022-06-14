import { Resultproductgroups } from './../../models/resultproductgroups';
import { Productgroups } from './../../models/productgroups';
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
export class DeletegroupService {

  private deletegroupurl: string;

  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) {  }

  deleteGroup(_group: Productgroups): Observable<Resultproductgroups> {

      this.deletegroupurl = this._apiurl.apiUrl.concat('/api/ProductGroupsApi/DeleteGroup');

      return this.http.post<Resultproductgroups>(this.deletegroupurl , _group, httpOptions)
      .pipe(
        catchError(this.handleError<Resultproductgroups>('deletegroup'))
      );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`DeletegroupService: ${message}`);
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

