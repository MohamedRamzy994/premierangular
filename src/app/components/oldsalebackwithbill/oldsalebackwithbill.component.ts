import { Component, OnInit } from '@angular/core';
import { Stores } from 'src/app/models/stores';
import { ProductBuyDiscardSelectMainInvoices, ResultProductBuyDiscardSelectMainInvoices } from 'src/app/models/productbuy';
import { SupplierModel, ResultSuppliers } from 'src/app/models/suppliers';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListproductbuymaininvoicesService } from 'src/app/services/productbuy/listproductbuymaininvoices.service';
import { ListstoresService } from 'src/app/services/stores/liststores.service';
import { ListproductbuydiscardmaininvoicesService } from 'src/app/services/productbuy/listproductbuydiscardmaininvoices.service';
import { ListsuppliersService } from 'src/app/services/suppliers/listsuppliers.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Resultstores } from 'src/app/models/resultstores';
import { ListcustomersService } from 'src/app/services/customers/listcustomers.service';
import { ResultListCustomers, ListCustomersModel } from '../../models/customers';
import { ListproductsalediscardmaininvoicesService } from 'src/app/services/productsales/listproductsalediscardmaininvoices.service';
import { ResultProductSaleDiscardSelectMainInvoices,
  ProductSaleDiscardSelectMainInvoices } from 'src/app/models/productsales';

@Component({
  selector: 'app-oldsalebackwithbill',
  templateUrl: './oldsalebackwithbill.component.html',
  styleUrls: ['./oldsalebackwithbill.component.css']
})
export class OldsalebackwithbillComponent implements OnInit {

  public AllProductSaleDiscardMainInvoices: ProductSaleDiscardSelectMainInvoices[];

  public SelectedProductSaleDiscardMainInvoice: ProductSaleDiscardSelectMainInvoices;
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
  public p: any;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };

  constructor(
    private _listproductbuymaininvoicesService: ListproductbuymaininvoicesService,
    private _liststoresService: ListstoresService,
    private _listproductsalediscardmaininvoicesService: ListproductsalediscardmaininvoicesService,
    private _listcustomersService: ListcustomersService,
    private _notifierService: NotifierService,
    private _router: Router
  ) {

    this.AllProductSaleDiscardMainInvoices = [];
    this.SelectedProductSaleDiscardMainInvoice = new ProductSaleDiscardSelectMainInvoices();
    this.SelectedProductSaleDiscardMainInvoice.DiscardID = 0;
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

  }
  ngOnInit() {
    this.getAllProductSaleDiscardMainInvoices();
    this.getAllStores();
    this.getAllCustomers();

  }

  public getAllProductSaleDiscardMainInvoices() {

    this._listproductsalediscardmaininvoicesService.listProductSaleDiscardMainInvoices()
    .subscribe((_result: ResultProductSaleDiscardSelectMainInvoices) => {
      if (_result.ProductSaleDiscardInvoices.length == 0 || _result.ProductSaleDiscardInvoices == null) {
        this.AllProductSaleDiscardMainInvoices = [];
      } else {
        this.AllProductSaleDiscardMainInvoices = _result.ProductSaleDiscardInvoices;
      }
    });

  }
  public GetDateFrom(event) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }


  public SelectRow(_invoicemain: ProductSaleDiscardSelectMainInvoices): void {

    this.SelectedProductSaleDiscardMainInvoice = _invoicemain;

  }

  public RowSelected(_invoicemain: ProductBuyDiscardSelectMainInvoices): boolean {

    if (!this.SelectedProductSaleDiscardMainInvoice) {
      return false;
    }
    return this.SelectedProductSaleDiscardMainInvoice.DiscardID === _invoicemain.DiscardID ? true : false;

  }

  public RemoveSelection(_invoicemain: ProductBuyDiscardSelectMainInvoices) {

    this.SelectedProductSaleDiscardMainInvoice = new ProductSaleDiscardSelectMainInvoices();
    this.SelectedProductSaleDiscardMainInvoice.DiscardID = 0;


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

  public goToShowOldSaleBackBill(): void {

    if (this.SelectedProductSaleDiscardMainInvoice.DiscardID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');


    } else {

      this._router.navigate(['showoldsalebackwithbill', this.SelectedProductSaleDiscardMainInvoice.DiscardID]);

    }

  }

  public GetSumTotal(From: number, To: number, StoreName: string, SupplierName: string): number {

    let SumTotal = 0;

    if (From && To && StoreName && SupplierName) {
      this.AllProductSaleDiscardMainInvoices.filter((x: ProductSaleDiscardSelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.CustomerName.startsWith(SupplierName)
      )).forEach((element) => {


        SumTotal += element.DiscardValue;



      });
      return SumTotal;
    } else if (From && To && StoreName) {
      this.AllProductSaleDiscardMainInvoices.filter((x: ProductSaleDiscardSelectMainInvoices) => (

        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.DiscardValue;



      });
      return SumTotal;
    } else if (From && To) {

      this.AllProductSaleDiscardMainInvoices.filter((x: ProductSaleDiscardSelectMainInvoices) => (

        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.DiscardValue;



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
