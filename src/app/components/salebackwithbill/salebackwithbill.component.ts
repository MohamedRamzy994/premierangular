import { ListstorebynameService } from './../../services/stores/liststorebyname.service';
import {
  ProductBuyDiscardMainModel, ProductBuyDiscardMainItemsModel, ResultAddProductBuy,
} from './../../models/productbuy';
import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  ProductBuyInvoiceItems
} from 'src/app/models/productbuy';
import { Stores } from 'src/app/models/stores';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListstoresService } from 'src/app/services/stores/liststores.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Resultstores } from 'src/app/models/resultstores';
import { ListproductunitsbyidService } from 'src/app/services/transferkinds/listproductunitsbyid.service';
import { ResultUnits } from 'src/app/models/transferkinds';
import { AddproductbuydiscardmainService } from 'src/app/services/productbuy/addproductbuydiscardmain.service';
import { ProductUnitsModel } from 'src/app/models/products';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
import { ListproductsalemaininvoicesService } from 'src/app/services/productsales/listproductsalemaininvoices.service';
import { ListCustomersModel } from 'src/app/models/customers';
import { ResultListCustomers } from '../../models/customers';
import { ListcustomersService } from '../../services/customers/listcustomers.service';
import { ListproductsalemaininvoicemainitemsService } from 'src/app/services/productsales/listproductsalemaininvoicemainitems.service';
import { ResultProductSaleSelectMainInvoices,
  ProductSaleSelectMainInvoices,  ProductSaleInvoiceItems,
  ResultProductSaleInvoiceItems,
  ProductSaleDiscardMainItemsModel,
  ProductSaleDiscardMainModel} from 'src/app/models/productsales';
import { AddproductsalediscardmainService } from 'src/app/services/productsales/addproductsalediscardmain.service';
import { ResultOpenningBalance } from 'src/app/models/productopenningbalance';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';

@Component({
  selector: 'app-salebackwithbill',
  templateUrl: './salebackwithbill.component.html',
  styleUrls: ['./salebackwithbill.component.css']
})
export class SalebackwithbillComponent implements OnInit {
  public p: any;
  public AllProductSaleMainInvoices: ProductSaleSelectMainInvoices[];
  public productSaleMainInvoicesItems: ProductSaleInvoiceItems[];
  public SelectedProductBuyMainInvoice: ProductSaleSelectMainInvoices;
  public ProductStores: Stores[];
  public Customers: ListCustomersModel[];
  public DateFrom: Date;
  public DateTo: Date;
  public DateToObject: any;
  public DateFromObject: any;
  public StoreName: string;
  public CustomerName: string;
  public UserName: string;
  public InvoiceID: string;
  public selectedInvoiceID: number;
  public selectedInvoiceStoreID: number;
  public GetMoneyBack: boolean;
  public SupplierName: string;
  public InvoiceType: number;
  public modalRef: BsModalRef;
  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };
  public addActivityModel: AddActivityModel;

  constructor(
    private _listproductsalemaininvoicesService: ListproductsalemaininvoicesService,
    private _liststoresService: ListstoresService,
    private _liststorebynameService: ListstorebynameService,
    private _listcustomersService: ListcustomersService,
    private _listproductsalemaininvoicemainitemsService: ListproductsalemaininvoicemainitemsService,
    private _notifierService: NotifierService,
    private _listproductunitsbyidService: ListproductunitsbyidService,
    private _addproductsalediscardmainService: AddproductsalediscardmainService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private modalService: BsModalService,
    private _createactivityService: CreateactivityService,

    private _router: Router
  ) {

    this.AllProductSaleMainInvoices = [];
    this.SelectedProductBuyMainInvoice = new ProductSaleSelectMainInvoices();
    this.SelectedProductBuyMainInvoice.InvoiceID = 0;
    this.productSaleMainInvoicesItems = [];
    this.ProductStores = [];
    this.Customers = [];
    this.UserName = '';
    this.GetMoneyBack = false;
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

    this.addActivityModel = new AddActivityModel();

    this.DateFrom = this.DateFromObject.jsdate;
    this.DateTo = this.DateToObject.jsdate;
    this.StoreName = '';
    this.CustomerName = '';
    this.InvoiceID = '';
    this.selectedInvoiceID = 0;
    this.selectedInvoiceStoreID = 0;
    this.SupplierName = '';
    this.InvoiceID = '';
  }
  ngOnInit() {
    this.getAllProductSaleMainInvoices();
    this.getAllStores();
    this.getAllCustomers();

  }

  public getAllProductSaleMainInvoices() {

    this._listproductsalemaininvoicesService.listProductSaleMainInvoices()
    .subscribe((_result: ResultProductSaleSelectMainInvoices) => {
      if ( _result.ProductSaleInvoices.length == 0 || _result.ProductSaleInvoices == null ) {
        this.AllProductSaleMainInvoices = [];
      } else {
        this.AllProductSaleMainInvoices = _result.ProductSaleInvoices;
      }
    });

  }
  public GetDateFrom(event: any) {

    this.DateFrom = this.DateFromObject.jsdate;
  }
  public GetDateTo(event: any) {

    this.DateTo = this.DateToObject.jsdate;
  }


  public SelectRow(_invoicemain: ProductSaleSelectMainInvoices): void {
    this.productSaleMainInvoicesItems = [];
    this.SelectedProductBuyMainInvoice = _invoicemain;
    this.selectedInvoiceID = this.SelectedProductBuyMainInvoice.InvoiceID;
    this._liststorebynameService.listStoreByName(this.SelectedProductBuyMainInvoice.StoreName).
    subscribe((_result: Resultstores) => {
      this.selectedInvoiceStoreID = parseInt(_result.StoresList[0].StoreID , 10);
    });
    this.getProductSaleMainInvoiceItems();
  }

  public RowSelected(_invoicemain: ProductSaleSelectMainInvoices): boolean {

    if (!this.SelectedProductBuyMainInvoice) {
      return false;
    }
    return this.SelectedProductBuyMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;

  }

  public RemoveSelection(_invoicemain: ProductSaleSelectMainInvoices) {

    this.SelectedProductBuyMainInvoice = new ProductSaleSelectMainInvoices();
    this.productSaleMainInvoicesItems = [];

  }
  public getAllStores(): void {

    this._liststoresService.listStores().subscribe((_result: Resultstores) => {
      if ( _result.StoresList.length == 0 || _result.StoresList == null ) {
        this.ProductStores = [];
      } else {
        this.ProductStores = _result.StoresList;
      }
    });

  }

  public getAllCustomers(): void {

    this._listcustomersService.ListCustomers().subscribe((_result: ResultListCustomers) => {
      if ( _result.CustomersList.length == 0 || _result.CustomersList == null ) {
        this.Customers = [];
      } else {
        this.Customers = _result.CustomersList;
      }
    });

  }

  public goToShowPurchaseBill(): void {

    if (this.SelectedProductBuyMainInvoice.InvoiceID === 0) {

      this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');


    } else {

      this._router.navigate(['showpurchasebill', this.SelectedProductBuyMainInvoice.InvoiceID]);

    }

  }

  public GetSumTotal(From: number, To: number, StoreName: string, CustomerName: string): number {

    let SumTotal = 0;

    if (From && To && StoreName && CustomerName) {
      this.AllProductSaleMainInvoices.filter((x: ProductSaleSelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.CustomerName.startsWith(CustomerName)
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

  public getProductSaleMainInvoiceItems() {
    this._listproductsalemaininvoicemainitemsService.listProductSaleMainInvoiceItems(this.selectedInvoiceID)
      .subscribe((_result: ResultProductSaleInvoiceItems) => {

        _result.ProductSaleInvoiceItems.forEach(element => {
          this._listproductunitsbyidService
            .GetProductUnites(element.ProductID)
            .subscribe((_resultunits: ResultUnits) => {
              const productSaleInvoiceItem: ProductSaleInvoiceItems = {
                ProductID: element.ProductID,
                Price: element.Price,
                TotalDisc: element.TotalDisc,
                NetPrice: element.NetPrice,
                Num: element.Num,
                ProductName: element.ProductName,
                ProductUnits: _resultunits.UnitsList,
                Stock: element.Stock,
                UnitID: _resultunits.UnitsList[0].UnitID,
                ChangeNum: element.ChangeNum,
                DiscardNum: element.DiscardNum,
                UnitName: element.UnitName
              };

              this.productSaleMainInvoicesItems.push(productSaleInvoiceItem);
            });

        });
      });
  }

  public AddProductSaleDiscardMain(): void {


    // tslint:disable-next-line:prefer-const
    let _InvoiceItems: ProductSaleDiscardMainItemsModel[] = new Array<
      ProductSaleDiscardMainItemsModel
      >();
    this.productSaleMainInvoicesItems.forEach((element: ProductSaleInvoiceItems) => {
      // tslint:disable-next-line:prefer-const
      let _invoiceItem: ProductSaleDiscardMainItemsModel = new ProductSaleDiscardMainItemsModel();

      element.ProductUnits.forEach((unit: ProductUnitsModel) => {
        if (unit.UnitID === element.UnitID) {
          element.ChangeNum = unit.ChangeNum;
        }
      });

      _invoiceItem.UnitID = element.UnitID;
      _invoiceItem.DiscNum = element.DiscardNum;
      _invoiceItem.DiscChangeNum = element.ChangeNum;
      _invoiceItem.ProductID = element.ProductID;
      _invoiceItem.Price = element.NetPrice;
      _invoiceItem.DiscNum_In_Max =  element.DiscardNum;
      _invoiceItem.DiscNum_In_Old =  element.DiscardNum;
      _invoiceItem.SequanceID =  element.SequanceID;
      _InvoiceItems.push(_invoiceItem);
    });

    let DiscardValueTotal = 0;

    _InvoiceItems.forEach(element => {
      DiscardValueTotal += element.DiscNum * element.Price;

    });


    const productSaleMainTableModel: ProductSaleDiscardMainModel = {
      InvoiceID: this.selectedInvoiceID,
      UserID: this._OauthenticatedsessionServiceService.User.UserId,
      StoreID: this.selectedInvoiceStoreID,
      DiscardSaleMainItems: _InvoiceItems,
      DiscardValue: DiscardValueTotal,
      ThisSalesPointID: 3,
      DefaultSalesPointID: 1,
      GetMoneyBack: this.GetMoneyBack
    };

    this._addproductsalediscardmainService
      .addProductSaleDiscardAddMain(productSaleMainTableModel)
      .subscribe((_result: ResultOpenningBalance) => {


        if (_result.Status === true) {
          this.modalRef.hide();
          this._notifierService.notify(
            'success',

            _result.Message
          );
          this.CreateActivityRecord();

          this.ngOnInit();
          this.productSaleMainInvoicesItems = [];
          this.RemoveSelection(this.SelectedProductBuyMainInvoice);
        } else {
          this.modalRef.hide();

          this._notifierService.notify(
            'error',
            _result.Message
          );
        }
      });
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public CreateActivityRecord() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = 'فاتورة مرتجع بيع';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId ;
    this.addActivityModel.POS = 1;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
  this._notifierService.notify(
    'success',
    _resultactivity.Message
  );
});
  }
  public Refresh() {
    this.ngOnInit();
  }
}
