import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiurlService } from './apiurl.service';
import { Injectable } from '@angular/core';
import { Oauth } from '../../models/oauth';
import { Result } from '../../models/result';
import { Observable, of } from 'rxjs';
import { Logservice } from './log.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class OauthService {

  private oauthapiurl: string;

  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
    this.oauthapiurl = this._apiurlService.apiUrl.concat('/api/OAuthApi/Login');
  }

  public Login(_oauth: Oauth): Observable<Result> {

    return this.http.post<Result>(this.oauthapiurl, _oauth, httpOptions)
      .pipe(
        catchError(this.handleError<Result>('oauth'))
      );

  }
  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`OAuthService: ${message}`);
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
