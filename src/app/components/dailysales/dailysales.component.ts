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
import { ResultProductDailySalesInvoices,
ProductDailySalesInvoices } from 'src/app/models/productsales';
import { ListproductsaleprofitmaininvoicesService } from 'src/app/services/productsales/listproductsaleprofitmaininvoices.service';
import { ListproductdailysalesinvoicesService } from 'src/app/services/productsales/listproductdailysalesinvoices.service';

@Component({
  selector: 'app-dailysales',
  templateUrl: './dailysales.component.html',
  styleUrls: ['./dailysales.component.css']
})

export class DailysalesComponent implements OnInit {
  public AllProductSaleProfitMainInvoices: ProductDailySalesInvoices[];
  public p: any;
  public SelectedProductSaleMainInvoice: ProductDailySalesInvoices;
  public ProductStores: Stores[];
  public Customers: ListCustomersModel[];
  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;
  public StoreName: string;
  public StoreID: number;
  public SupplierName: string;
  public UserName: string;
  public InvoiceID: string;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };

  constructor(
    private _listproductdailysalesinvoicesService: ListproductdailysalesinvoicesService,
    private _liststoresService: ListstoresService,
    private _listcustomersService: ListcustomersService,
    private _notifierService: NotifierService,
    private _router: Router
  ) {

    this.AllProductSaleProfitMainInvoices = [];
    this.SelectedProductSaleMainInvoice = new ProductDailySalesInvoices();
    this.SelectedProductSaleMainInvoice.InvoiceID = 0;
    this.ProductStores = [];
    this.Customers = [];
    this.UserName = '';
    this.StoreID = 0;
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

  }
  ngOnInit() {
    this.getAllProductDailySalesInvoices();
    this.getAllStores();
    this.getAllCustomers();

  }

  public getAllProductDailySalesInvoices() {

    this._listproductdailysalesinvoicesService.listProductDailySalesInvoices()
    .subscribe((_result: ResultProductDailySalesInvoices) => {
      if (_result.ProductDailySalesInvoices.length == 0 || _result.ProductDailySalesInvoices == null)  {
        this.AllProductSaleProfitMainInvoices = [];

      } else {
        this.AllProductSaleProfitMainInvoices = _result.ProductDailySalesInvoices;
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

  public GetSumTotal(From: Date, To: Date, StoreID: number): number {
    let SumTotal: number = 0;

    if (From && To && StoreID) {
      this.AllProductSaleProfitMainInvoices.filter((x: ProductDailySalesInvoices) => (
        x.StoreID == StoreID &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {

        SumTotal += element.NetPrice;

      });
      return SumTotal;
    }  else if (From && To) {

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
