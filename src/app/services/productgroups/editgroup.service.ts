import { Resultproductgroups } from './../../models/resultproductgroups';
import { Stores } from './../../models/stores';
import { Resultstores } from './../../models/resultstores';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';
import { Logservice } from './../general/log.service';
import { Result } from './../../models/result';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from '../../../../node_modules/rxjs';
import { User } from '../../models/user';
import { catchError, map, tap } from 'rxjs/operators';
import { Productgroups } from '../../models/productgroups';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EditgroupService {

  private editegroupurl: string;

  constructor(
    private http: HttpClient,
    private _apiurl: ApiurlService,
    private _logservice: Logservice
  ) { }

  public editGroup(_group: Productgroups): Observable<Resultproductgroups> {

    this.editegroupurl = this._apiurl.apiUrl.concat('/api/ProductGroupsApi/EditGroup');

    return this.http.put<Resultproductgroups>(this.editegroupurl, _group, httpOptions)
      .pipe(
        catchError(this.handleError<Resultproductgroups>('editgroup'))
      );
  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`EditGroupService: ${message}`);
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

