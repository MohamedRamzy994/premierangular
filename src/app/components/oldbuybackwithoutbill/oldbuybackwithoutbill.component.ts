import { Component, OnInit } from '@angular/core';
import { ProductBuyDiscardSelectMainInvoices, ResultProductBuyDiscardSelectMainInvoices } from 'src/app/models/productbuy';
import { Stores } from 'src/app/models/stores';
import { SupplierModel, ResultSuppliers } from 'src/app/models/suppliers';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListproductbuymaininvoicesService } from 'src/app/services/productbuy/listproductbuymaininvoices.service';
import { ListstoresService } from 'src/app/services/stores/liststores.service';
import { ListproductbuydiscardmaininvoicesService } from 'src/app/services/productbuy/listproductbuydiscardmaininvoices.service';
import { ListsuppliersService } from 'src/app/services/suppliers/listsuppliers.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Resultstores } from 'src/app/models/resultstores';
import { ListproductbuydiscardnotmaininvoicesService } from 'src/app/services/productbuy/listproductbuydiscardnotmaininvoices.service';
@Component({
  selector: 'app-oldbuybackwithoutbill',
  templateUrl: './oldbuybackwithoutbill.component.html',
  styleUrls: ['./oldbuybackwithoutbill.component.css']
})
export class OldbuybackwithoutbillComponent implements OnInit {

  public AllProductBuyDiscardMainInvoices: ProductBuyDiscardSelectMainInvoices[];

  public SelectedProductBuyDiscardMainInvoice: ProductBuyDiscardSelectMainInvoices;
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
    private _listproductbuydiscardmaininvoicesService: ListproductbuydiscardnotmaininvoicesService,
    private _listsuppliersService: ListsuppliersService,
    private _notifierService: NotifierService,
    private _router: Router
  ) {

    this.AllProductBuyDiscardMainInvoices = [];
    this.SelectedProductBuyDiscardMainInvoice = new ProductBuyDiscardSelectMainInvoices();
    this.SelectedProductBuyDiscardMainInvoice.DiscardID = 0;
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
    this.getAllProductBuyDiscardMainInvoices();
    this.getAllStores();
    this.getAllSuppliers();

  }

  public getAllProductBuyDiscardMainInvoices() {

    this._listproductbuydiscardmaininvoicesService.listProductBuyDiscardMainInvoices()
    .subscribe((_result: ResultProductBuyDiscardSelectMainInvoices) => {
      if (_result.ProductBuyDiscardInvoices.length == 0 || _result.ProductBuyDiscardInvoices == null) {

        this.AllProductBuyDiscardMainInvoices = [];
      } else {
        this.AllProductBuyDiscardMainInvoices = _result.ProductBuyDiscardInvoices;

      }
    });

  }
  public GetDateFrom(event) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event) {

    this.DateTo = this.DateToObject.jsdate;
  }


  public SelectRow(_invoicemain: ProductBuyDiscardSelectMainInvoices): void {

    this.SelectedProductBuyDiscardMainInvoice = _invoicemain;

  }

  public RowSelected(_invoicemain: ProductBuyDiscardSelectMainInvoices): boolean {

    if (!this.SelectedProductBuyDiscardMainInvoice) {
      return false;
    }
    return this.SelectedProductBuyDiscardMainInvoice.DiscardID === _invoicemain.DiscardID ? true : false;

  }

  public RemoveSelection(_invoicemain: ProductBuyDiscardSelectMainInvoices) {

    this.SelectedProductBuyDiscardMainInvoice = new ProductBuyDiscardSelectMainInvoices();

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

  public goToShowOldBuyBackBill(): void {

    if (this.SelectedProductBuyDiscardMainInvoice.DiscardID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');


    } else {

      this._router.navigate(['showoldbuybackwithoutbill', this.SelectedProductBuyDiscardMainInvoice.DiscardID]);

    }

  }

  public GetSumTotal(From: number, To: number, StoreName: string, SupplierName: string): number {

    let SumTotal = 0;

    if (From && To && StoreName && SupplierName) {
      this.AllProductBuyDiscardMainInvoices.filter((x: ProductBuyDiscardSelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.SupplierName.startsWith(SupplierName)
      )).forEach((element) => {


        SumTotal += element.DiscardValue;



      });
      return SumTotal;
    } else if (From && To && StoreName) {
      this.AllProductBuyDiscardMainInvoices.filter((x: ProductBuyDiscardSelectMainInvoices) => (

        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.DiscardValue;



      });
      return SumTotal;
    } else if (From && To) {

      this.AllProductBuyDiscardMainInvoices.filter((x: ProductBuyDiscardSelectMainInvoices) => (

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
