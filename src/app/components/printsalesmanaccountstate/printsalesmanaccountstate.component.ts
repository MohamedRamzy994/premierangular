import { Component, OnInit, OnChanges } from '@angular/core';
import { ListproductbuymaininvoicesService } from 'src/app/services/productbuy/listproductbuymaininvoices.service';
import { ResultProductBuySelectMainInvoices } from 'src/app/models/productbuy';
import { ProductBuySelectMainInvoices } from './../../models/productbuy';
import { Stores } from 'src/app/models/stores';
import { ListstoresService } from 'src/app/services/stores/liststores.service';
import { Resultstores } from 'src/app/models/resultstores';
import { SupplierModel, ResultSuppliers } from 'src/app/models/suppliers';
import { ListsuppliersService } from 'src/app/services/suppliers/listsuppliers.service';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { NotifierService } from 'angular-notifier';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { element } from 'protractor';
import { ListcustomersService } from '../../services/customers/listcustomers.service';
import { ListproductsalemaininvoicesService } from 'src/app/services/productsales/listproductsalemaininvoices.service';
import { ResultProductDailySalesInvoices,
ProductDailySalesInvoices } from 'src/app/models/productsales';
import { ListproductsaleprofitmaininvoicesService } from 'src/app/services/productsales/listproductsaleprofitmaininvoices.service';
import { ListproductdailysalesinvoicesService } from 'src/app/services/productsales/listproductdailysalesinvoices.service';
import { ListsalemansalesinvoicesService } from 'src/app/services/productsales/listsalemansalesinvoices.service';
import { ListemployeesService } from '../../services/employees/listemployees.service';
import { ResultListEmployees, ListEmployeesModel } from '../../models/employees';
import { CustomerTotalCommunicationSummaryModel } from 'src/app/models/customers';
import Printd from 'printd';

@Component({
  selector: 'app-printsalesmanaccountstate',
  templateUrl: './printsalesmanaccountstate.component.html',
  styleUrls: ['./printsalesmanaccountstate.component.css']
})
export class PrintsalesmanaccountstateComponent implements OnInit {
  public AllProductSaleProfitMainInvoices: ProductDailySalesInvoices[];
  public p: any;
  public SelectedProductSaleMainInvoice: ProductDailySalesInvoices;
  public ProductStores: Stores[];
  public Employees: ListEmployeesModel[];
  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;
  public StoreName: string;
  public SupplierName: string;
  public EmpName: string;
  public InvoiceID: string;
  public EmpID: number;
  public customerTotalCommunicationSummaryModel: CustomerTotalCommunicationSummaryModel;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };
  constructor(
    private _listsalemansalesinvoicesService: ListsalemansalesinvoicesService,
    private _liststoresService: ListstoresService,
    private _listemployeesService: ListemployeesService,
    private _notifierService: NotifierService,
    private _router: Router,
    private _activeroute: ActivatedRoute
    ) {

    this.AllProductSaleProfitMainInvoices = [];
    this.SelectedProductSaleMainInvoice = new ProductDailySalesInvoices();
    this.SelectedProductSaleMainInvoice.InvoiceID = 0;
    this.ProductStores = [];
    this.Employees = [];
    this.EmpName = '';
    this.customerTotalCommunicationSummaryModel = {TotalCommunication: 0 , CompletedCommunication: 0 , RestCommunication: 0};
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
    this.StoreName = '';
    this._activeroute.paramMap.subscribe(
      (params: Params) => {

        this.EmpID = params.get('EmpID');

      });
    this.SupplierName = '';
    this.InvoiceID = '';

  }
  ngOnInit() {

    this.getAllStores();
    this.getAllEmployees();
    this.getSaleManSalesInvoices(this.EmpID);
    this.getEmpName();

  }

  public getSaleManSalesInvoices(empID: number) {
    this._listsalemansalesinvoicesService.listSaleManSalesInvoices(empID)
    .subscribe((_result: ResultProductDailySalesInvoices) => {
      if (_result.Status === true) {
        console.log( _result.ProductDailySalesInvoices);
        this.AllProductSaleProfitMainInvoices = _result.ProductDailySalesInvoices;
        this.customerTotalCommunicationSummaryModel = _result.CustomerTotalCommunicationSummary;
      } else {

        this.AllProductSaleProfitMainInvoices = [];
        this.customerTotalCommunicationSummaryModel = {TotalCommunication: 0 , CompletedCommunication: 0 , RestCommunication: 0};

      }
       });

  }
  public GetDateFrom(event) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }


  public SelectRow(_invoicemain: ProductDailySalesInvoices): void {

    this.SelectedProductSaleMainInvoice = _invoicemain;

  }

  public RowSelected(_invoicemain: ProductBuySelectMainInvoices): boolean {

    if (!this.SelectedProductSaleMainInvoice) {
      return false;
    }
    return this.SelectedProductSaleMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;

  }

  public RemoveSelection(_invoicemain: ProductBuySelectMainInvoices) {

    this.SelectedProductSaleMainInvoice = new ProductDailySalesInvoices();

  }
  public getAllStores(): void {

    this._liststoresService.listStores().subscribe((_result: Resultstores) => {

      this.ProductStores = _result.StoresList;

    });

  }

  public getAllEmployees(): void {

    this._listemployeesService.ListEmployees().subscribe((_result: ResultListEmployees) => {

      this.Employees = _result.EmployeesList;

    });

  }

  /**
   * getEmpName
   */
  public getEmpName() {
    this._listemployeesService.ListEmployees().subscribe((_result: ResultListEmployees) => {

      this.EmpName = _result.EmployeesList.filter(x=>x.EmpID == this.EmpID)[0].EmpName;

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
      width:33.33%;
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

  min-height:17cm;

}
#datefromto{
  display:none;
}

  `;
    const d: Printd = new Printd();
    d.print(document.getElementById('body-content'), cssText);


  }


}

