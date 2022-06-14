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
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-salesmanaccountstate',
  templateUrl: './salesmanaccountstate.component.html',
  styleUrls: ['./salesmanaccountstate.component.css']
})
export class SalesmanaccountstateComponent implements OnInit {
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
  public UserName: string;
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
    private _router: Router
  ) {

    this.AllProductSaleProfitMainInvoices = [];
    this.SelectedProductSaleMainInvoice = new ProductDailySalesInvoices();
    this.SelectedProductSaleMainInvoice.InvoiceID = 0;
    this.ProductStores = [];
    this.Employees = [];
    this.UserName = '';
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
    this.EmpID = 0;
    this.SupplierName = '';
    this.InvoiceID = '';

  }
  ngOnInit() {

    this.getAllStores();
    this.getAllEmployees();
    this.getSaleManSalesInvoices(this.EmpID);

  }

  public getSaleManSalesInvoices(empID: number) {
    this._listsalemansalesinvoicesService.listSaleManSalesInvoices(empID)
    .subscribe((_result: ResultProductDailySalesInvoices) => {
      if (_result.Status === true) {
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
      if (_result.StoresList.length == 0 || _result.StoresList == null) {
        this.ProductStores = [];
      } else {

        this.ProductStores = _result.StoresList;
      }
    });

  }

  public getAllEmployees(): void {

    this._listemployeesService.ListEmployees().subscribe((_result: ResultListEmployees) => {
      if (_result.EmployeesList.length == 0 || _result.EmployeesList == null) {
        this.Employees = [];
      } else {

        this.Employees = _result.EmployeesList;
      }
      

    });

  }

  public goToPrintSaleManAccountState(): void {
      this._router.navigate(['printsalesmanaccountstate', this.EmpID]);
  }

  public GetSumTotal(From: Date, To: Date): number {
    let SumTotal: number = 0;
     if (From && To) {

      this.AllProductSaleProfitMainInvoices.filter((x: ProductDailySalesInvoices) => (

        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.NetPrice;



      });
      return SumTotal;
    } else {

      return SumTotal;
    }

  }


 public Refresh() {
    this.ngOnInit();
  }
}
