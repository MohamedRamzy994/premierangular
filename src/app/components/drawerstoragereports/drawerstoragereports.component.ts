import { Component, OnInit } from '@angular/core';
import { ListGetStartBalanceModel, ResultListGetStartBalance,
   ListSalesPointsModel, ResultListSalesPoints } from 'src/app/models/salespoints';
import { ListgetstartbalanceService } from '../../services/salespoints/listgetstartbalance.service';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'app-drawerstoragereports',
  templateUrl: './drawerstoragereports.component.html',
  styleUrls: ['./drawerstoragereports.component.css']
})
export class DrawerstoragereportsComponent implements OnInit {

  public listGetStartBalanceModel: ListGetStartBalanceModel;
  public listSalesPointsModel: ListSalesPointsModel [];
  public SalesPointID: number;
  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;
  myOptions: INgxMyDpOptions = {
    dateFormat: 'mmm d, yyyy',
  };


  constructor(
    private  _listgetstartbalanceService: ListgetstartbalanceService ,
   private _listsalespointsService: ListsalespointsService ,

  ) {

    this.listGetStartBalanceModel = new ListGetStartBalanceModel ();
    this.listSalesPointsModel = [] ;
    this.SalesPointID = 0 ;


  }

  ngOnInit() {
    
    this.DateFromObject = {
      'date': {
        'year': 2000,
        'month': 1,
        'day': 1
      },
      'jsdate': '2000-01-01T22:00:00.000Z'
    };
    this.DateToObject = {
      'date': {
        'year': 2030,
        'month': 1,
        'day': 1
      },
      'jsdate': '2030-01-01T22:00:00.000Z'
    };


    this.DateFrom = this.DateFromObject.jsdate;
    this.DateTo = this.DateToObject.jsdate;

    this.GetAllSalesPoints();
    this.GetStartBalance(this.SalesPointID , this.DateFrom  , this.DateTo);
    }
    public GetDateFrom(event) {

      this.DateFrom = this.DateFromObject.jsdate;
    }
    public GetDateTo(event) {
  
      this.DateTo = this.DateToObject.jsdate;
    }

  /**
   * GetStartBalance
   */
  public GetStartBalance(salesPointID: number , dateFrom: Date , dateTo: Date): void {
    if (salesPointID == 0) {
      this.listGetStartBalanceModel = {

          CustomerPayed: 0 ,
          TransferToThis: 0 ,
          Deposit: 0 ,
          Withdraw: 0 ,
          TransferFromThis: 0 ,
          SupplierPayed: 0 ,
          CustomerRetrieve: 0 ,
          Salary: 0 ,
          EmpDebits: 0 ,
          CustomerTanzelCancel: 0 ,
          SupplierTanzelCancel: 0 ,
          CustomerRetrieveCancel: 0 ,
          Balance: 0 ,
          AddCost: 0 ,
          EmpGivedMoney: 0 ,
          EmpPayedDebitDirect: 0
    };
    } else {
      this._listgetstartbalanceService.GetStartBalance(salesPointID , this.DateFrom , this.DateTo)
      .subscribe((_result: ResultListGetStartBalance) => {
        if (_result.Status == true) {
          this.listGetStartBalanceModel = _result.ListGetStartBalance[0];

        } else {

          this.listGetStartBalanceModel = {

            CustomerPayed: 0 ,
            TransferToThis: 0 ,
            Deposit: 0 ,
            Withdraw: 0 ,
            TransferFromThis: 0 ,
            SupplierPayed: 0 ,
            CustomerRetrieve: 0 ,
            Salary: 0 ,
            EmpDebits: 0 ,
            CustomerTanzelCancel: 0 ,
            SupplierTanzelCancel: 0 ,
            CustomerRetrieveCancel: 0 ,
            Balance: 0 ,
            AddCost: 0 ,
            EmpGivedMoney: 0 ,
            EmpPayedDebitDirect: 0
      };
        }
      });
    }

  }

  public GetAllSalesPoints(): void {

    this._listsalespointsService.ListAllSalesPoints().subscribe((result: ResultListSalesPoints) => {

      this.listSalesPointsModel = result.SalesPointsList ;
    });
  }
  public Refresh() {
    this.ngOnInit();
  }
}
