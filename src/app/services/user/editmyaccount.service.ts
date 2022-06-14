import { Result } from './../../models/result';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from './../general/apiurl.service';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Logservice } from '../general/log.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EditmyaccountService {

  private apiurl: string;

  constructor(private _apiurlService: ApiurlService,
     private http: HttpClient,
    private _logservice: Logservice) {

    this.apiurl = _apiurlService.apiUrl.concat('/api/UserApi/UpdateUserBasics');



  }

  public EditMyAccount(user: User): Observable<Result> {

    return this.http.post<Result>(this.apiurl, user, httpOptions)
      .pipe(
        catchError(this.handleError<Result>('editmyaccount'))
      );

  }

    // TODO : log messages to console
    private log(message: string) {
      this._logservice.add(`EditmyAccountService: ${message}`);
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
