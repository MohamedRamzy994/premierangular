import { HttpClient } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadsettingsimageService {
  public uploademployeeimageapiurl: string;
  constructor(private _apiurlService: ApiurlService, private http: HttpClient, private _logservice: Logservice) {
  }
  public UploadSettingsImage(file: FormData) {
    this.uploademployeeimageapiurl = this._apiurlService.apiUrl.concat('/api/SettingsApi/UploadSettingsImage');
    return this.http.post(this.uploademployeeimageapiurl, file).
      pipe(catchError(this.handleError('UploadsettingsimageService')));
  }
  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`UploadsettingsimageService: ${message}`);
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
