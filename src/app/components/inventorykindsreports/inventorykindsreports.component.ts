import { Component, OnInit } from '@angular/core';
import { Resultproductgroups } from 'src/app/models/resultproductgroups';
import { ListgroupsService } from 'src/app/services/productgroups/listgroups.service';
import { ListproductsService } from 'src/app/services/products/listproducts.service';
import { ResultProducts, ProductBasicModel, ListProductModel } from 'src/app/models/products';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListproductdailysalesinvoicesService } from 'src/app/services/productsales/listproductdailysalesinvoices.service';
import { ProductBuySelectMainInvoices } from 'src/app/models/productbuy';
import { ListproductmovementreportService } from 'src/app/services/reports/listproductmovementreport.service';
import { ResultListProductMoveMentReport,
   ListSupplierProductsInStoreModel, ResultListSupplierProductsInStoreReport } from 'src/app/models/reports';
import Printd from 'printd';
import { ListstoresService } from '../../services/stores/liststores.service';
import { Resultstores } from '../../models/resultstores';
import { ListsuppliersService } from '../../services/suppliers/listsuppliers.service';
import { ResultSuppliers } from '../../models/suppliers';
import { ListproductsupplierinstorereportService } from 'src/app/services/reports/listproductsupplierinstorereport.service';
import { SettingsModel, ResultGetSystemSettings } from 'src/app/models/settings';
import { AppsettingsService } from 'src/app/services/general/appsettings.service';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
@Component({
  selector: 'app-inventorykindsreports',
  templateUrl: './inventorykindsreports.component.html',
  styleUrls: ['./inventorykindsreports.component.css']
})
export class InventorykindsreportsComponent implements OnInit {

  public resultlist: Resultproductgroups;
  public result: Resultstores;
  public resultSuppliers: ResultSuppliers;
  public groupID: number;
  public storeID: number;
  public storeName: string;
  public groupName: string;
  public supplierID: number;

  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;
  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };
  public listProductMoveMentReportModel: ListSupplierProductsInStoreModel[];
  public SelectedProductSaleMainInvoice: ListSupplierProductsInStoreModel;
  public appSettings: SettingsModel;




  constructor(
    private _listgroupsService: ListgroupsService,
    private _liststoresService: ListstoresService,
    private _appsettingsService: AppsettingsService,
    private _apiurlService: ApiurlService,

    private _listsuppliersService: ListsuppliersService,
    private _listproductsupplierinstorereportService: ListproductsupplierinstorereportService


  ) {
    this.resultlist = { Status: false, Message: '', GroupsList: [] };
    this.resultSuppliers = new ResultSuppliers ();
    this.groupID = 0;
    this.storeID = 0;
    this.supplierID = 0 ;
    this.storeName = '' ;
    this.groupName = '';
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

    this.listProductMoveMentReportModel = [];

    this.DateFrom = this.DateFromObject.jsdate;
    this.DateTo = this.DateToObject.jsdate;
  }

  ngOnInit() {
    this.GetAllGroups();
    this.getAllStores();
    this.getAllSuppliers();
    this.ListProductInventoryReport(this.storeID);
    this.GetAppSettings();

  }
  public GetAllGroups(): void {
    this._listgroupsService
      .listGroups()
      .subscribe((_resultlist: Resultproductgroups) => {
        this.resultlist = _resultlist;
        if (this.resultlist.GroupsList === null) {
          this.resultlist = { Status: false, Message: '', GroupsList: [] };

        }
      });
  }
  public getAllStores(): void {

    this._liststoresService.listStores().subscribe((_result: Resultstores) => {

      this.result = _result ;
      if (_result.StoresList === null) {

        this.result.StoresList = [] ;
      } else {
        this.result.StoresList = _result.StoresList ;
      }

    });
  }
  public getAllSuppliers(): void {

    this._listsuppliersService.ListSuppliers().subscribe((_result: ResultSuppliers) => {

      if (_result.SuppliersList === null) {

        this.resultSuppliers.SuppliersList = [] ;
      } else {
        this.resultSuppliers.SuppliersList = _result.SuppliersList ;
      }

    });
  }
  public GetDateFrom(event) {
    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {
    this.DateTo = this.DateToObject.jsdate;
  }
  public ListProductInventoryReport(_storeID: number) {

    this._listproductsupplierinstorereportService.ListProductSupplierInStoreReport(_storeID)
      .subscribe((_result: ResultListSupplierProductsInStoreReport) => {
        if (_result.ListSupplierProductsInStoreModel === null) {

          this.listProductMoveMentReportModel = [];
        } else {
          if (this.supplierID === 0) {
            this.listProductMoveMentReportModel = _result.ListSupplierProductsInStoreModel;
            console.log(this.listProductMoveMentReportModel);

          } else {
            this.listProductMoveMentReportModel = _result.ListSupplierProductsInStoreModel
            .filter((item: ListSupplierProductsInStoreModel) => item.SupplierID === this.supplierID);

          }
        }
      });
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
