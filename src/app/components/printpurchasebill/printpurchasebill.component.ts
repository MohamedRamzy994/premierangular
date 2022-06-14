import { Component, OnInit } from '@angular/core';
import { ProductBuySelectMainInvoices, ResultProductBuySelectMainInvoices,
  ResultProductBuyDiscardSelectMainInvoicesItems,
   ProductBuyDiscardSelectMainInvoicesItems } from 'src/app/models/productbuy';
import { ListproductbuymaininvoicesService } from 'src/app/services/productbuy/listproductbuymaininvoices.service';
import { element } from 'protractor';
import { ProductBuyMainTableModel, ProductBuyInvoiceItems, ResultProductBuyInvoiceItems } from '../../models/productbuy';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListproductbuymaininvoiceitemsService } from '../../services/productbuy/listproductbuymaininvoiceitems.service';
// tslint:disable-next-line:max-line-length
import { ListproductbuyalldiscardmaininvoiceitemsService } from 'src/app/services/productbuy/listproductbuyalldiscardmaininvoiceitems.service';
import Printd from 'printd';
import { SettingsModel, ResultGetSystemSettings } from 'src/app/models/settings';
import { AppsettingsService } from 'src/app/services/general/appsettings.service';
import { ApiurlService } from 'src/app/services/general/apiurl.service';

@Component({
  selector: 'app-printpurchasebill',
  templateUrl: './printpurchasebill.component.html',
  styleUrls: ['./printpurchasebill.component.css']
})
export class PrintpurchasebillComponent implements OnInit {
  public appSettings: SettingsModel;

  public productBuyMainInvoices: ProductBuySelectMainInvoices;
  public InvoiceID: number;
  public productBuyMainInvoicesItems: ProductBuyInvoiceItems[];
  public productBuyDiscardMainInvoicesItems: ProductBuyDiscardSelectMainInvoicesItems[];

  constructor(
    private _listproductbuymaininvoicesService: ListproductbuymaininvoicesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _appsettingsService: AppsettingsService,
    private _apiurlService: ApiurlService,

    private _listproductbuymaininvoiceitemsService: ListproductbuymaininvoiceitemsService,
    private _listproductbuydiscardmaininvoiceitemsService: ListproductbuyalldiscardmaininvoiceitemsService
  ) {
    this.productBuyMainInvoices = new ProductBuySelectMainInvoices();
    this.productBuyMainInvoicesItems = [];
    this.productBuyDiscardMainInvoicesItems = [];
    this.appSettings = new SettingsModel();

  }
  ngOnInit() {

    this._activatedRoute.paramMap.subscribe(
      (params: Params) => {

        this.InvoiceID = params.get('InvoiceID');
      });

    this.getProductBuyMainInvoices();
    this.getProductBuyMainInvoiceItems();
    this.getProductBuyDiscardMainInvoiceItems();
    this.GetAppSettings();

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
  public getProductBuyMainInvoices() {
    this._listproductbuymaininvoicesService.listProductBuyMainInvoices().subscribe((_result: ResultProductBuySelectMainInvoices) => {


      _result.ProductBuyInvoices.forEach((_element: ProductBuySelectMainInvoices) => {

        if (_element.InvoiceID == this.InvoiceID) {

          this.productBuyMainInvoices = _element;
        }

      });



    });

  }

  public getProductBuyMainInvoiceItems() {
    this._listproductbuymaininvoiceitemsService.listProductBuyMainInvoiceItems(this.InvoiceID)
      .subscribe((_result: ResultProductBuyInvoiceItems) => {
        if (_result.ProductBuyInvoiceItems == null) {
          this.productBuyMainInvoicesItems = [];
        } else {
          this.productBuyMainInvoicesItems = _result.ProductBuyInvoiceItems;
        }
      });

  }

  public getProductBuyDiscardMainInvoiceItems() {
    this._listproductbuydiscardmaininvoiceitemsService.listProductBuyAllDiscardMainInvoiceItems(this.InvoiceID)
      .subscribe((_result: ResultProductBuyDiscardSelectMainInvoicesItems) => {
        if (_result.ProductBuyDiscardInvoiceItems == null) {
          this.productBuyDiscardMainInvoicesItems = [];

        } else {
          this.productBuyDiscardMainInvoicesItems = _result.ProductBuyDiscardInvoiceItems;

        }




      });

  }
  public PrintReportInvoice() {
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

  min-height:18cm;

}
#datefromto{
  display:none;
}

  `;

    const d: Printd = new Printd();
    d.print(document.getElementById('body-content'), cssText);


  }
}

