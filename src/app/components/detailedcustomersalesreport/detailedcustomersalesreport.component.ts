import { Component, OnInit } from '@angular/core';
import { ListsuppliersService } from 'src/app/services/suppliers/listsuppliers.service';
import { ResultSuppliers, SupplierModel } from 'src/app/models/suppliers';
import { Resultproductgroups } from 'src/app/models/resultproductgroups';
import { ListgroupsService } from 'src/app/services/productgroups/listgroups.service';
import { ListproductsService } from 'src/app/services/products/listproducts.service';
import { ResultProducts, ProductBasicModel, ListProductModel } from 'src/app/models/products';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListproductdailysalesinvoicesService } from 'src/app/services/productsales/listproductdailysalesinvoices.service';
import { ProductBuySelectMainInvoices, ResultProductBuySelectMainInvoices } from 'src/app/models/productbuy';
import { ListproductmovementreportService } from 'src/app/services/reports/listproductmovementreport.service';
import {
  ResultListProductMoveMentReport,
  ListSupplierProductsInStoreModel, ResultListSupplierProductsInStoreReport,
  ResultProductBuySelectTotalCommunicationReport,
  ProductBuySelectTotalCommunicationReportModel,
  ResultCustomerSelectTotalCommunicationReport,
  CustomerSelectTotalCommunicationReportModel
} from 'src/app/models/reports';
import Printd from 'printd';
import { ListstoresService } from '../../services/stores/liststores.service';
import { Resultstores } from '../../models/resultstores';
import { ListproductsupplierinstorereportService } from 'src/app/services/reports/listproductsupplierinstorereport.service';
import { ListproductbuymaininvoicesService } from 'src/app/services/productbuy/listproductbuymaininvoices.service';
import { ListproducttotalcommunicationreportService } from 'src/app/services/reports/listproducttotalcommunicationreport.service';
import { ListemployeesService } from '../../services/employees/listemployees.service';
import { ResultListEmployees, ListEmployeesModel } from '../../models/employees';
import { ProductSaleSelectMainInvoices, ResultProductSaleSelectMainInvoices } from 'src/app/models/productsales';
import { ListproductsalemaininvoicesService } from 'src/app/services/productsales/listproductsalemaininvoices.service';
import { ListcustomersService } from '../../services/customers/listcustomers.service';
import { ResultListCustomers, ListCustomersModel } from '../../models/customers';
import { ListcustomertotalcommunicationreportService } from 'src/app/services/reports/listcustomertotalcommunicationreport.service';
import { SettingsModel, ResultGetSystemSettings } from 'src/app/models/settings';
import { AppsettingsService } from 'src/app/services/general/appsettings.service';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
@Component({
  selector: 'app-detailedcustomersalesreport',
  templateUrl: './detailedcustomersalesreport.component.html',
  styleUrls: ['./detailedcustomersalesreport.component.css']
})
export class DetailedcustomersalesreportComponent implements OnInit {
  public resultlist: Resultproductgroups;
  public result: Resultstores;
  public resultEmployees: ResultListCustomers;
  public groupID: number;
  public storeID: number;
  public storeName: string;
  public supplierName: string;
  public employeeID: number;
  public listProductMoveMentReportModel: ProductBuySelectMainInvoices[];
  public productBuySelectTotalCommunicationReportModel: CustomerSelectTotalCommunicationReportModel;
  public SelectedProductSaleMainInvoice: ListSupplierProductsInStoreModel;
  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;
  public AllProductSaleMainInvoices: ProductSaleSelectMainInvoices[];
  public appSettings: SettingsModel;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };
  constructor(
    private _listcustomersService: ListcustomersService,
    private _listgroupsService: ListgroupsService,
    private _liststoresService: ListstoresService,
    private _appsettingsService: AppsettingsService,
    private _apiurlService: ApiurlService,
    private _listproductbuymaininvoicesService: ListproductbuymaininvoicesService,
    private _listproductsalemaininvoicesService: ListproductsalemaininvoicesService,
    private _listcustomertotalcommunicationreportService: ListcustomertotalcommunicationreportService,

  ) {
    this.listProductMoveMentReportModel = [];
    this.productBuySelectTotalCommunicationReportModel = new CustomerSelectTotalCommunicationReportModel();
    this.AllProductSaleMainInvoices = [];

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
    this.resultEmployees = new ResultListCustomers();
    this.groupID = 0;
    this.storeID = 0;
    this.employeeID = 0;
    this.storeName = '';
    this.supplierName = '';

  }

  ngOnInit() {
    this.GetAppSettings();

    this.getAllEmployees();
    // this.ListProductInventoryReport(this.supplierID);
    this.getAllProductSaleMainInvoices(this.employeeID);

  }
  public getAllProductSaleMainInvoices(_employeeID: number) {

    this._listproductsalemaininvoicesService.listProductSaleMainInvoices().subscribe((_result: ResultProductSaleSelectMainInvoices) => {
      if (_result.ProductSaleInvoices === null) {


        this.AllProductSaleMainInvoices = [];

      } else {
        if (_employeeID === 0) {
          this.AllProductSaleMainInvoices = _result.ProductSaleInvoices;
          this.AllProductSaleMainInvoices.forEach((element: ProductSaleSelectMainInvoices) => {

            if (element.InvTypeID === 1) {
              element.InvTypeName = 'نقدى';
            } else if (element.InvTypeID === 2) {
              element.InvTypeName = 'أجل';

            }

          });
          this.productBuySelectTotalCommunicationReportModel =
                    {SaleNumber: 0, DiscardNumber: 0, SalePrice: 0, SaleQuntity: 0, DiscardPrice: 0, DiscardQuantity: 0 };
        } else {
          this._listcustomersService.ListCustomers().subscribe((_resultemp: ResultListCustomers) => {
            this.supplierName =
              _resultemp.CustomersList.filter((value: ListCustomersModel) => value.CustomerID == _employeeID)[0].CustomerName;
            this.AllProductSaleMainInvoices =
              _result.ProductSaleInvoices
                .filter((value: ProductSaleSelectMainInvoices) => value.CustomerName === this.supplierName);

            this.AllProductSaleMainInvoices.forEach((element: ProductSaleSelectMainInvoices) => {

              if (element.InvTypeID === 1) {
                element.InvTypeName = 'نقدى';
              } else if (element.InvTypeID === 2) {
                element.InvTypeName = 'أجل';

              }

            });
          });

          this.ListProductTotalCommunicationReport(_employeeID);
        }

      }


    });

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
  public getAllEmployees(): void {

    this._listcustomersService.ListCustomers().subscribe((_result: ResultListCustomers) => {

      if (_result.CustomersList === null) {

        this.resultEmployees.CustomersList = [];
      } else {
        this.resultEmployees.CustomersList = _result.CustomersList;
      }

    });
  }
  public GetDateFrom(event) {
    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {
    this.DateTo = this.DateToObject.jsdate;
  }
  // public ListProductInventoryReport(_supplierID: number): void {
  //   this._listproductbuymaininvoicesService.listProductBuyMainInvoices()
  //     .subscribe((_result: ResultProductBuySelectMainInvoices) => {
  //       if (_result.ProductBuyInvoices === null) {

  //         this.listProductMoveMentReportModel = [];
  //       } else {
  //         if (this.supplierID === 0) {
  //           this.listProductMoveMentReportModel = _result.ProductBuyInvoices;
  //           this.productBuySelectTotalCommunicationReportModel =
  //           { BuyNumber: 0, DiscardNumber: 0, BuyPrice: 0, BuyQuntity: 0, DiscardPrice: 0, DiscardQuantity: 0 };
  //         } else {
  //           this._listsuppliersService.ListSuppliers().subscribe((_resultsupp: ResultSuppliers) => {
  //             this.supplierName =
  //             _resultsupp.SuppliersList.filter((value: SupplierModel) => value.SupplierID == _supplierID)[0].SupplierName;
  //             this.listProductMoveMentReportModel =
  //              _result.ProductBuyInvoices.filter((value: ProductBuySelectMainInvoices) => value.SupplierName === this.supplierName);
  //           }

  //           )
  //         }
  //       }
  //     });

  //   this.ListProductTotalCommunicationReport(_supplierID);
  // }

  public ListProductTotalCommunicationReport(_supplierID: number): void {
    this._listcustomertotalcommunicationreportService.ListCustomerTotalCommunicationReport(_supplierID)
      .subscribe((_result: ResultCustomerSelectTotalCommunicationReport) => {
        console.log(_result);
        if (_result.CustomerSelectTotalCommunicationReportModel === null) {

          this.productBuySelectTotalCommunicationReportModel = new CustomerSelectTotalCommunicationReportModel();
        } else {
          this.productBuySelectTotalCommunicationReportModel = _result.CustomerSelectTotalCommunicationReportModel[0];
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
