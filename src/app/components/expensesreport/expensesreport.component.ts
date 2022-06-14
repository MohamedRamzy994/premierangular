import { ListSelectAdditionalCostEventToReport, ListSupplierProductsInStoreModel, ListGivedMoneyToReport } from './../../models/reports';
import { Component, OnInit } from '@angular/core';
import { ListwithdrawdepositreasonsService } from 'src/app/services/salespoints/listwithdrawdepositreasons.service';
import { ResultWithdrawDepositReason, ListWithdrawDepositReasonModel,
   ResultListSalesPoints, ListSalesPointsModel } from 'src/app/models/salespoints';
import { ListGetStartBalanceModel } from '../../models/salespoints';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListadditionalcosteventtoreportService } from '../../services/reports/listadditionalcosteventtoreport.service';
import { ResultListAdditionalCostEventToReport } from 'src/app/models/reports';
import Printd from 'printd';
import { ListwithdrawdepositeventtoreportService } from 'src/app/services/reports/listwithdrawdepositeventtoreport.service';
import { ListgivedmoneytoreportService } from '../../services/reports/listgivedmoneytoreport.service';
import { ResultListGivedMoneyToReport } from '../../models/reports';
import { SettingsModel, ResultGetSystemSettings } from 'src/app/models/settings';
import { AppsettingsService } from 'src/app/services/general/appsettings.service';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
@Component({
  selector: 'app-expensesreport',
  templateUrl: './expensesreport.component.html',
  styleUrls: ['./expensesreport.component.css']
})
export class ExpensesreportComponent implements OnInit {
  public WithdrawDepositReasonList: ListWithdrawDepositReasonModel[];
  public listSelectAdditionalCostEventToReport: ListGivedMoneyToReport[];
  public SelectedProductSaleMainInvoice: ListSupplierProductsInStoreModel;
  public listSalesPointsModel: ListSalesPointsModel [];
  public SalesPoint: string;
  public ReasonName: string;
  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;
  myOptions: INgxMyDpOptions = {
    dateFormat: 'mmm d, yyyy',
  };
  public appSettings: SettingsModel;

  constructor(

   private _listgivedmoneytoreportService: ListgivedmoneytoreportService,
   private _appsettingsService: AppsettingsService,
   private _apiurlService: ApiurlService


  ) {
    this.WithdrawDepositReasonList = [];
    this.listSalesPointsModel = [] ;
    this.listSelectAdditionalCostEventToReport = [] ;
    this.DateFromObject = {
      'date': {
        'year': 2000,
        'month': 1,
        'day': 1
      },
      'jsdate': '2000-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2018'
    };
    this.DateToObject = {
      'date': {
        'year': 2030,
        'month': 1,
        'day': 1
      },
      'jsdate': '2030-01-01T22:00:00.000Z',
      'formatted': 'Jan 1, 2030'
    };


    this.DateFrom = this.DateFromObject.jsdate;
    this.DateTo = this.DateToObject.jsdate;

    this.SalesPoint = '';
    this.ReasonName = '' ;
  }

  ngOnInit() {
    this.GetAppSettings();

    this.WithdrawDepositEventToReport();
  }
  public GetAppSettings(): void {

    this._appsettingsService.AppSettings().subscribe((_result: ResultGetSystemSettings) => {

      if (_result.Status === true) {
        this.appSettings = _result.SettingsModel[0];
        this.appSettings.Logo = this._apiurlService.apiUrl + this.appSettings.Logo;

      } else {

        this.appSettings = {
          ShopName: 'ماركـت شوت',
          WorkType: 'التجارة والحسابات والمبيعات',
          Address: 'الدراسات - المنصورة - الدقهلية - مصر ',
          Logo: '/bag.png',
          Background: '/bag.png'
        };
      }
    });
  }
  /**
   * AdditionalCostEventToReport
   */
  public WithdrawDepositEventToReport() {
    this._listgivedmoneytoreportService.GivedMoneyToReport()
    .subscribe((_result: ResultListGivedMoneyToReport) => {

      if (_result.ListGivedMoneyToReport.length == 0 || _result.ListGivedMoneyToReport == null) {
        this.listSelectAdditionalCostEventToReport = [];
      } else {

        this.listSelectAdditionalCostEventToReport = _result.ListGivedMoneyToReport;
      }

    });
  }

  public GetDateFrom(event) {
    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {
    this.DateTo = this.DateToObject.jsdate;
  }


  public SelectRow(_invoicemain: ListSupplierProductsInStoreModel): void {
    this.SelectedProductSaleMainInvoice = _invoicemain;
  }
  public RowSelected(_invoicemain: ListSupplierProductsInStoreModel): boolean {
    if (!this.SelectedProductSaleMainInvoice) {
      return false;
    }
    return this.SelectedProductSaleMainInvoice.ProductID === _invoicemain.ProductID ? true : false;

  }

  public RemoveSelection(_invoicemain: ListSupplierProductsInStoreModel) {
    this.SelectedProductSaleMainInvoice = new ListSupplierProductsInStoreModel();

  }
  public PrintSupplierMoneyDetails() {
    const cssText = `
    article, aside , details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
      display: block;
    }
    .container {
      width:100%;
      direction: rtl;

    }
    .col-md-1 {
      width:10%;
      float:right;

    }

    .col-md-2 {
      width:20%;
      float:right;

    }
    .col-md-4 {
      width:33%;
      float:right;

    }

    .col-md-8 {
      width:50%;
      float:right;
      margin-left:8%;
    }
    .col-md-6 {
      width:50%;
      float:right;

    }
    .text-left {
      text-align: left;
    }
    .text-right {
      text-align: right;
    }
    .text-center {
      text-align: center;
    }
    .row{
      width: 100%;

    }
    .panel-heading .row{
      width: 100%;

    }
    .panel-body .row{
      width: 100%;
      margin-bottom: 35px;
    }
    .printbrand {
      padding:31px 5px;
      background-color:#fff;
      border:1px solid #000;
       width:100%;
       text-align: center;
       border-radius: 5px;
    }
    .label {
      display: inline;
      font-weight: bold;
      line-height: 1;
      color: black;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: .25em;
      padding:5px;

    }
    .label-default{
      background-color: #f2f2f2 !important;
      -webkit-print-color-adjust: exact;
      padding:5px;

    }
    .userlogo {
      height: 70px;
      width: 70px;
    }
    .img-thumbnail {
      display: inline-block;
      max-width: 100%;
      height: auto;
      padding:10px;
      line-height: 1.42857143;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: all .2s ease-in-out;
    }
    img {
      vertical-align: middle;
    }
     .spacetoprint{
       height:1.5cm;
       width:100%;
     }
    .form-group {
      margin-bottom: 5px;
    }
    h3 {
      width:80%;
      font-size: 25px;
      font-family: sans-serif;
      border: black solid 1px;
      padding:5px;
      margin-right:15%;
      background-color: #f2f2f2 !important;
      -webkit-print-color-adjust: exact;

    }
    hr{
      width:100%;
      height:0px;
      border: 1px solid #000;
    }
    h1{
      font-size: 18px;

    }
    .table-responsive {
      min-height: .01%;
      overflow-x: auto;
  }
  .table-bordered {
    border: 1px solid #ddd;
    box-shadow: 0 0 black;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
table {
  background-color: transparent;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
table thead {
  background-color: #f2f2f2 !important;
  -webkit-print-color-adjust: exact;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th,
 .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td,
  .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table > thead > tr > th, .table > tbody > tr > th,
 .table > tfoot > tr > th, .table > thead > tr > td,
 .table > tbody > tr > td, .table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
.btn {
  display: none;
}
.fixheight{

  height:17cm;

}
#datefromto{
  display:none;
}

  `;

    const d: Printd = new Printd();
    d.print(document.getElementById('body-content'), cssText);


  }


}
