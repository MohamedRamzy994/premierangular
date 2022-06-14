import { AddEmployeeComPunModel } from './../../models/employees';
import { ProductBuyDiscardMainModel } from '../../models/productbuy';
import { ProductOpenningBalanceModel, ResultOpenningBalance } from '../../models/productopenningbalance';
import { ResultTransfer, TransferKindsModel } from '../../models/transferkinds';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logservice } from '../general/log.service';
import { ApiurlService } from '../general/apiurl.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductBuyTableModel, ProductBuyMainTableModel, ResultAddProductBuy } from '../../models/productbuy';
import { AddEmployeeModel, AddEmployeeDebitsModel } from 'src/app/models/employees';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddemployeecommisionpunishService {
  public addemployeecommisionpunishspiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }
  public AddEmployeeCommisionPunish(_addEmployeeComPunModel: AddEmployeeComPunModel) {

    this.addemployeecommisionpunishspiurl = this._apiurlService.apiUrl.concat('/api/EmployeesApi/AddEmployeeCommisionPunish');

    return this.http.post(this.addemployeecommisionpunishspiurl, _addEmployeeComPunModel, httpOptions).
      pipe(catchError(this.handleError('AddemployeecommisionpunishService')));

  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddemployeecommisionpunishService: ${message}`);
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
