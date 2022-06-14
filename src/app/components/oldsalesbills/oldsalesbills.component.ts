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
import { ResultListCustomers, ListCustomersModel } from '../../models/customers';
import { ListproductsalemaininvoicesService } from 'src/app/services/productsales/listproductsalemaininvoices.service';
import { ResultProductSaleSelectMainInvoices, ProductSaleSelectMainInvoices } from 'src/app/models/productsales';
@Component({
  selector: 'app-oldsalesbills',
  templateUrl: './oldsalesbills.component.html',
  styleUrls: ['./oldsalesbills.component.css']
})
export class OldsalesbillsComponent implements OnInit {
  public AllProductSaleMainInvoices: ProductSaleSelectMainInvoices[];
  public p: any;
  public SelectedProductSaleMainInvoice: ProductSaleSelectMainInvoices;
  public ProductStores: Stores[];
  public Customers: ListCustomersModel[];
  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;
  public StoreName: string;
  public SupplierName: string;
  public UserName: string;
  public InvoiceID: string;
  public InvoiceType: number;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };

  constructor(
    private _listproductsalemaininvoicesService: ListproductsalemaininvoicesService,
    private _liststoresService: ListstoresService,
    private _listcustomersService: ListcustomersService,
    private _notifierService: NotifierService,
    private _router: Router
  ) {

    this.AllProductSaleMainInvoices = [];
    this.SelectedProductSaleMainInvoice = new ProductSaleSelectMainInvoices();
    this.SelectedProductSaleMainInvoice.InvoiceID = 0;
    this.ProductStores = [];
    this.Customers = [];
    this.UserName = '';
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
    this.SupplierName = '';
    this.InvoiceID = '';
    this.InvoiceType = 2;

  }
  ngOnInit() {
    this.getAllProductSaleMainInvoices();
    this.getAllStores();
    this.getAllCustomers();

  }

  public getAllProductSaleMainInvoices() {

    this._listproductsalemaininvoicesService.listProductSaleMainInvoices().subscribe((_result: ResultProductSaleSelectMainInvoices) => {
      if (_result.ProductSaleInvoices.length == 0 || _result.ProductSaleInvoices == null) {
        this.AllProductSaleMainInvoices = [];
      } else {
        this.AllProductSaleMainInvoices = _result.ProductSaleInvoices;
      }
      this.AllProductSaleMainInvoices.forEach((element : ProductSaleSelectMainInvoices) => {

        if (element.InvTypeID === 1) {
          element.InvTypeName = 'نقدى';
        } else if (element.InvTypeID === 2) {
          element.InvTypeName = 'أجل';

        }

      });
    });

  }
  public GetDateFrom(event) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }


  public SelectRow(_invoicemain: ProductSaleSelectMainInvoices): void {

    this.SelectedProductSaleMainInvoice = _invoicemain;

  }

  public RowSelected(_invoicemain: ProductBuySelectMainInvoices): boolean {

    if (!this.SelectedProductSaleMainInvoice) {
      return false;
    }
    return this.SelectedProductSaleMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;

  }

  public RemoveSelection(_invoicemain: ProductBuySelectMainInvoices) {

    this.SelectedProductSaleMainInvoice = new ProductSaleSelectMainInvoices();

  }
  public getAllStores(): void {

    this._liststoresService.listStores().subscribe((_result: Resultstores) => {
      if (_result.StoresList.length == 0 || _result.StoresList == null) {
        this.Customers = [];
      } else {
        this.ProductStores = _result.StoresList;
      }

    });

  }

  public getAllCustomers(): void {

    this._listcustomersService.ListCustomers().subscribe((_result: ResultListCustomers) => {

      if (_result.CustomersList.length == 0 || _result.CustomersList == null) {
        this.Customers = [];
      } else {
        this.Customers = _result.CustomersList;
      }
    });

  }

  public goToShowPurchaseBill(): void {

    if (this.SelectedProductSaleMainInvoice.InvoiceID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');


    } else {

      this._router.navigate(['showoldsalesbill', this.SelectedProductSaleMainInvoice.InvoiceID]);

    }

  }

  public GetSumTotal(From: Date, To: Date, StoreName: string, SupplierName: string): number {

    let SumTotal: number = 0;

    if (From && To && StoreName && SupplierName) {
      this.AllProductSaleMainInvoices.filter((x: ProductSaleSelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.CustomerName.startsWith(SupplierName)
      )).forEach((element) => {


        SumTotal += element.Net;

      });
      return SumTotal;
    } else if (From && To && StoreName) {
      this.AllProductSaleMainInvoices.filter((x: ProductSaleSelectMainInvoices) => (

        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.Net;

      });
      return SumTotal;
    } else if (From && To) {

      this.AllProductSaleMainInvoices.filter((x: ProductSaleSelectMainInvoices) => (

        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.Net;



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
