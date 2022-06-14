import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { ListProductOpenningBalanceInvoicesModel, ListProductOpenningBalanceInvoiceItemsModel, ResultListOpeningBalance, ResultListOpeningBalanceItems } from '../../models/productopenningbalance';
import { ListproductopenningbalanceinvoicesService } from '../../services/productopeningbalance/listproductopenningbalanceinvoices.service';
import { ActivatedRoute, Router } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { ListproductopenningbalanceinvoiceitemsService } from '../../services/productopeningbalance/listproductopenningbalanceinvoiceitems.service';
import { ResultListTransfer, ListTransferKindModel, ResultListTransferItems } from '../../models/transferkinds';
import Printd from 'printd';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
import { AppsettingsService } from 'src/app/services/general/appsettings.service';
import { SettingsModel, ResultGetSystemSettings } from 'src/app/models/settings';

@Component({
  selector: 'app-printopeningbalancekindbill',
  templateUrl: './printopeningbalancekindbill.component.html',
  styleUrls: ['./printopeningbalancekindbill.component.css']
})
export class PrintopeningbalancekindbillComponent implements OnInit {
  public appSettings: SettingsModel;

  public SelectedInvoice: ListProductOpenningBalanceInvoicesModel;
  public SelectedInvoiceID: string;
  public SelectedInvoiceItems: ListProductOpenningBalanceInvoiceItemsModel[];
  constructor(
    private _apiurlService: ApiurlService,
    private _appsettingsService: AppsettingsService,
    private _listproductopenningbalanceinvoicesService: ListproductopenningbalanceinvoicesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _listproductopenningbalanceinvoiceitemsService: ListproductopenningbalanceinvoiceitemsService


  ) {

    this.SelectedInvoice = new ListProductOpenningBalanceInvoicesModel();
    this.SelectedInvoiceItems = new Array<ListProductOpenningBalanceInvoiceItemsModel>();


  }

  ngOnInit() {
    this.appSettings = new SettingsModel();
    this._activatedRoute.paramMap.subscribe(params => {

      this.SelectedInvoiceID = params.get('InvoiceId');

    });
    this.GetAppSettings();

    this.getSelectedInvoiceDetails();
    this.getSelectedInvoiceItemsDetails();

  }
/**
   * GetAppSettings
   */
  public GetAppSettings(): void {

    this._appsettingsService.AppSettings().subscribe((_result: ResultGetSystemSettings) => {

      if (_result.Status == true) {
        this.appSettings =  _result.SettingsModel[0];
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

  public getSelectedInvoiceDetails(): void {

    this._listproductopenningbalanceinvoicesService.GeAllProductOpenningBalanceInvoices()
      .subscribe((_result: ResultListOpeningBalance) => {
        _result.InvoicesList.forEach((element: ListProductOpenningBalanceInvoicesModel) => {

          if (element.InvoiceID === parseInt(this.SelectedInvoiceID, 10)) {

            this.SelectedInvoice = element;

          }


        });


      });

  }
  public getSelectedInvoiceItemsDetails(): void {

    this._listproductopenningbalanceinvoiceitemsService.GeAllProducOpeningtBalancInvoiceItems(parseInt(this.SelectedInvoiceID, 10))
      .subscribe((_result: ResultListOpeningBalanceItems) => {
        this.SelectedInvoiceItems = _result.InvoiceItemsList;

      });

  }


  public PrintReportInvoice() {
    const cssText = `
    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
      display: block;
    }
    .container {
      width:100%;
      direction: rtl;

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
      width:57%;
      float:right;

    }
    .col-md-5 {
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
      width:70%;
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

  `;

    const d: Printd = new Printd();
    d.print(document.getElementById('body-content'), cssText);


  }


}

