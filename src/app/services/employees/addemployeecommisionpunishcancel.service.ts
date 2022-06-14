import { AddEmployeeComPunModel} from './../../models/employees';
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
import { AddEmployeeModel, AddEmployeeDebitsModel, AddEmployeeCancelCommisionAndPunishModel } from 'src/app/models/employees';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AddemployeecommisionpunishcancelService {
  public addemployeecommisionpunishcancelpiurl: string;
  constructor(private _apiurlService: ApiurlService,
    private http: HttpClient,
    private _logservice: Logservice) {
  }
  public AddEmployeeCancelCommisionAndPunish(_addemployeecommisionpunishcancelService: AddEmployeeCancelCommisionAndPunishModel) {

    this.addemployeecommisionpunishcancelpiurl = this._apiurlService.apiUrl
    .concat('/api/EmployeesApi/AddEmployeeCancelCommisionAndPunish');

    return this.http.post(this.addemployeecommisionpunishcancelpiurl, _addemployeecommisionpunishcancelService, httpOptions).
      pipe(catchError(this.handleError('AddemployeecommisionpunishcancelService')));

  }

  // TODO : log messages to console
  private log(message: string) {
    this._logservice.add(`AddemployeecommisionpunishcancelService: ${message}`);
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
