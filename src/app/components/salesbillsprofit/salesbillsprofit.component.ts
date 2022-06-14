import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
import {
  ResultProductSaleProfitSelectMainInvoices,
  ProductSaleProfitSelectMainInvoices,
} from 'src/app/models/productsales';
import { ListproductsaleprofitmaininvoicesService } from 'src/app/services/productsales/listproductsaleprofitmaininvoices.service';
import { ListproductdailysalesinvoicesService } from 'src/app/services/productsales/listproductdailysalesinvoices.service';
import { invoke } from 'q';
@Component({
  selector: 'app-salesbillsprofit',
  templateUrl: './salesbillsprofit.component.html',
  styleUrls: ['./salesbillsprofit.component.css']
})
export class SalesbillsprofitComponent implements OnInit {
  public AllProductSaleProfitSelectMainInvoices: ProductSaleProfitSelectMainInvoices[];
  public p: any;
  public SelectedProductSaleMainInvoice: ProductSaleProfitSelectMainInvoices;
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
    private _listproductsaleprofitmaininvoicesService: ListproductsaleprofitmaininvoicesService,
    private _liststoresService: ListstoresService,
    private _listcustomersService: ListcustomersService,
    private _notifierService: NotifierService,
    private _router: Router
  ) {

    this.AllProductSaleProfitSelectMainInvoices = [];
    this.SelectedProductSaleMainInvoice = new ProductSaleProfitSelectMainInvoices();
    this.SelectedProductSaleMainInvoice.InvoiceID = 0;
    this.ProductStores = [];
    this.Customers = [];
    this.UserName = '';
    this.InvoiceType = 2;
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
    this.getAllProductSaleProfitSelectMainInvoices();
    this.getAllStores();
    this.getAllCustomers();
  }

  public getAllProductSaleProfitSelectMainInvoices() {

    this._listproductsaleprofitmaininvoicesService.listProductSaleProfitMainInvoices()
      .subscribe((_result: ResultProductSaleProfitSelectMainInvoices) => {

        if (_result.ProductSaleProfitInvoices.length == 0 || _result.ProductSaleProfitInvoices == null) {
          this.AllProductSaleProfitSelectMainInvoices = [];
        } else {
          this.AllProductSaleProfitSelectMainInvoices = _result.ProductSaleProfitInvoices;
          this.AllProductSaleProfitSelectMainInvoices.forEach((element: ProductSaleProfitSelectMainInvoices) => {
            if (element.InvTypeID === 1) {

              element.InvTypeName = 'نقدى';

            } else if (element.InvTypeID === 2) {
              element.InvTypeName = 'أجل';
            }
          });
        }

      });

  }
  public GetDateFrom(event) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }


  public SelectRow(_invoicemain: ProductSaleProfitSelectMainInvoices): void {

    this.SelectedProductSaleMainInvoice = _invoicemain;

  }

  public RowSelected(_invoicemain: ProductBuySelectMainInvoices): boolean {

    if (!this.SelectedProductSaleMainInvoice) {
      return false;
    }
    return this.SelectedProductSaleMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;

  }

  public RemoveSelection(_invoicemain: ProductBuySelectMainInvoices) {

    this.SelectedProductSaleMainInvoice = new ProductSaleProfitSelectMainInvoices();
    this.SelectedProductSaleMainInvoice.InvoiceID = 0;

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

      this.Customers = _result.CustomersList;

    });

  }

  public goToShowPurchaseBill(): void {

    if (this.SelectedProductSaleMainInvoice.InvoiceID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');


    } else {

      this._router.navigate(['showoldsalesbill', this.SelectedProductSaleMainInvoice.InvoiceID]);

    }

  }

  public GetSumTotal(From: Date, To: Date, StoreName: string, SupplierName: string, UserName: string, InvoiceID: string): number {

    let SumTotal: number = 0;
    if (From && To && StoreName && SupplierName && UserName && InvoiceID) {
      this.AllProductSaleProfitSelectMainInvoices.filter((x: ProductSaleProfitSelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.CustomerName.startsWith(SupplierName) &&
        x.InvoiceID.toString().startsWith(InvoiceID) &&
        x.UserName.startsWith(UserName)
      )).forEach((element) => {


        SumTotal += element.Net;

      });
      return SumTotal;
    } else if (From && To && StoreName && SupplierName && InvoiceID) {
      this.AllProductSaleProfitSelectMainInvoices.filter((x: ProductSaleProfitSelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.CustomerName.startsWith(SupplierName) && x.UserName.startsWith(UserName) &&
        x.InvoiceID.toString().startsWith(InvoiceID)
      )).forEach((element) => {


        SumTotal += element.Net;

      });
      return SumTotal;
    } else if (From && To && StoreName && SupplierName && UserName) {
      this.AllProductSaleProfitSelectMainInvoices.filter((x: ProductSaleProfitSelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.CustomerName.startsWith(SupplierName) && x.UserName.startsWith(UserName)
      )).forEach((element) => {


        SumTotal += element.Net;

      });
      return SumTotal;
    }
    else if (From && To && StoreName && SupplierName) {
      this.AllProductSaleProfitSelectMainInvoices.filter((x: ProductSaleProfitSelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.CustomerName.startsWith(SupplierName)
      )).forEach((element) => {


        SumTotal += element.Net;

      });
      return SumTotal;
    } else if (From && To && StoreName) {
      this.AllProductSaleProfitSelectMainInvoices.filter((x: ProductSaleProfitSelectMainInvoices) => (

        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.Net;

      });
      return SumTotal;
    } else if (From && To && SupplierName) {
      this.AllProductSaleProfitSelectMainInvoices.filter((x: ProductSaleProfitSelectMainInvoices) => (

        x.CustomerName.startsWith(SupplierName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.Net;

      });
      return SumTotal;
    } else if (From && To && InvoiceID) {
      this.AllProductSaleProfitSelectMainInvoices.filter((x: ProductSaleProfitSelectMainInvoices) => (
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.InvoiceID.toString().startsWith(InvoiceID)
      )).forEach((element) => {


        SumTotal += element.Net;

      });
      return SumTotal;
    } else if (From && To) {

      this.AllProductSaleProfitSelectMainInvoices.filter((x: ProductSaleProfitSelectMainInvoices) => (

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
