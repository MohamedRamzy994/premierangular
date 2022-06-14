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
@Component({
  selector: 'app-oldpurchasebill',
  templateUrl: './oldpurchasebill.component.html',
  styleUrls: ['./oldpurchasebill.component.css']
})
export class OldpurchasebillComponent implements OnInit {

  public AllProductBuyMainInvoices: ProductBuySelectMainInvoices[];

  public SelectedProductBuyMainInvoice: ProductBuySelectMainInvoices;
  public ProductStores: Stores[];
  public Suppliers: SupplierModel[];
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
    private _listsuppliersService: ListsuppliersService,
    private _notifierService: NotifierService,
    private _router: Router
  ) {

    this.AllProductBuyMainInvoices = [];
    this.SelectedProductBuyMainInvoice = new ProductBuySelectMainInvoices();
    this.SelectedProductBuyMainInvoice.InvoiceID = 0;
    this.ProductStores = [];
    this.Suppliers = [];
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
    this.getAllProductBuyMainInvoices();
    this.getAllStores();
    this.getAllSuppliers();

  }

  public getAllProductBuyMainInvoices() {

    this._listproductbuymaininvoicesService.listProductBuyMainInvoices().subscribe((_result: ResultProductBuySelectMainInvoices) => {
     if (_result.ProductBuyInvoices.length == 0 || _result.ProductBuyInvoices == null) {
      this.AllProductBuyMainInvoices = [];
     } else {
      this.AllProductBuyMainInvoices = _result.ProductBuyInvoices;
     }
    });

  }
  public GetDateFrom(event) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }


  public SelectRow(_invoicemain: ProductBuySelectMainInvoices): void {

    this.SelectedProductBuyMainInvoice = _invoicemain;

  }

  public RowSelected(_invoicemain: ProductBuySelectMainInvoices): boolean {

    if (!this.SelectedProductBuyMainInvoice) {
      return false;
    }
    return this.SelectedProductBuyMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;

  }

  public RemoveSelection(_invoicemain: ProductBuySelectMainInvoices) {

    this.SelectedProductBuyMainInvoice = new ProductBuySelectMainInvoices();

  }
  public getAllStores(): void {

    this._liststoresService.listStores().subscribe((_result: Resultstores) => {

      this.ProductStores = _result.StoresList;

    });

  }

  public getAllSuppliers(): void {

    this._listsuppliersService.ListSuppliers().subscribe((_result: ResultSuppliers) => {

      this.Suppliers = _result.SuppliersList;

    });

  }

  public goToShowPurchaseBill(): void {

    if (this.SelectedProductBuyMainInvoice.InvoiceID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');


    } else {

      this._router.navigate(['showpurchasebill', this.SelectedProductBuyMainInvoice.InvoiceID]);

    }

  }

  public GetSumTotal(From: Date, To: Date, StoreName: string, SupplierName: string): number {

    let SumTotal: number = 0;

    if (From && To && StoreName && SupplierName) {
      this.AllProductBuyMainInvoices.filter((x: ProductBuySelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.SupplierName.startsWith(SupplierName)
      )).forEach((element) => {


        SumTotal += element.Total;



      });
      return SumTotal;
    }
    else if (From && To && StoreName) {
      this.AllProductBuyMainInvoices.filter((x: ProductBuySelectMainInvoices) => (

        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.Total;



      });
      return SumTotal;
    }
    else if (From && To) {

      this.AllProductBuyMainInvoices.filter((x: ProductBuySelectMainInvoices) => (

        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.Total;



      })
      return SumTotal;
    }
    else {

      return SumTotal;
    }


  }

  public Refresh() {
    this.ngOnInit();
  }

}
