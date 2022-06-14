import { ListstorebynameService } from './../../services/stores/liststorebyname.service';
import {
  ProductBuyDiscardMainModel, ProductBuyDiscardMainItemsModel, ResultAddProductBuy,
} from './../../models/productbuy';
import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  ProductBuySelectMainInvoices, ResultProductBuySelectMainInvoices,
  ResultProductBuyInvoiceItems, ProductBuyInvoiceItems
} from 'src/app/models/productbuy';
import { Stores } from 'src/app/models/stores';
import { SupplierModel, ResultSuppliers } from 'src/app/models/suppliers';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { ListproductbuymaininvoicesService } from 'src/app/services/productbuy/listproductbuymaininvoices.service';
import { ListstoresService } from 'src/app/services/stores/liststores.service';
import { ListsuppliersService } from 'src/app/services/suppliers/listsuppliers.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { Resultstores } from 'src/app/models/resultstores';
import { ListproductbuymaininvoiceitemsService } from 'src/app/services/productbuy/listproductbuymaininvoiceitems.service';
import { ListproductunitsbyidService } from 'src/app/services/transferkinds/listproductunitsbyid.service';
import { ResultUnits } from 'src/app/models/transferkinds';
import { AddproductbuydiscardmainService } from 'src/app/services/productbuy/addproductbuydiscardmain.service';
import { FormGroup } from '@angular/forms';
import { ProductUnitsModel } from 'src/app/models/products';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';

@Component({
  selector: 'app-buybackwithbill',
  templateUrl: './buybackwithbill.component.html',
  styleUrls: ['./buybackwithbill.component.css']
})
export class BuybackwithbillComponent implements OnInit {

  public AllProductBuyMainInvoices: ProductBuySelectMainInvoices[];
  public productBuyMainInvoicesItems: ProductBuyInvoiceItems[];
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
  public selectedInvoiceID: number;
  public selectedInvoiceStoreID: number;
  public modalRef: BsModalRef;
  public p: any;
  public s: any;
  public addActivityModel: AddActivityModel;

  myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'mmm d, yyyy',
  };

  constructor(
    private _listproductbuymaininvoicesService: ListproductbuymaininvoicesService,
    private _liststoresService: ListstoresService,
    private _liststorebynameService: ListstorebynameService,
    private _listsuppliersService: ListsuppliersService,
    private _listproductbuymaininvoiceitemsService: ListproductbuymaininvoiceitemsService,
    private _notifierService: NotifierService,
    private modalService: BsModalService,
    private _listproductunitsbyidService: ListproductunitsbyidService,
    private _addproductbuydiscardmainService: AddproductbuydiscardmainService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private _router: Router,
    private _createactivityService: CreateactivityService
  ) {

    this.AllProductBuyMainInvoices = [];
    this.SelectedProductBuyMainInvoice = new ProductBuySelectMainInvoices();
    this.SelectedProductBuyMainInvoice.InvoiceID = 0;
    this.productBuyMainInvoicesItems = [];
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
    this.selectedInvoiceID = 0;
    this.selectedInvoiceStoreID = 0;
    this.addActivityModel = new AddActivityModel();

  }
  ngOnInit() {
    this.getAllProductBuyMainInvoices();
    this.getAllStores();
    this.getAllSuppliers();

  }

  public getAllProductBuyMainInvoices() {

    this._listproductbuymaininvoicesService.listProductBuyMainInvoices().subscribe((_result: ResultProductBuySelectMainInvoices) => {
      if (_result.ProductBuyInvoices.length == 0 || _result.ProductBuyInvoices == null) {
        this.AllProductBuyMainInvoices = [] ;
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
    this.productBuyMainInvoicesItems = [];
    this.SelectedProductBuyMainInvoice = _invoicemain;
    this.selectedInvoiceID = this.SelectedProductBuyMainInvoice.InvoiceID;
    this._liststorebynameService.listStoreByName(this.SelectedProductBuyMainInvoice.StoreName).
    subscribe((_result: Resultstores) => {
      this.selectedInvoiceStoreID = parseInt(_result.StoresList[0].StoreID , 10);
    });
    this.getProductBuyMainInvoiceItems();
  }

  public RowSelected(_invoicemain: ProductBuySelectMainInvoices): boolean {

    if (!this.SelectedProductBuyMainInvoice) {
      return false;
    }
    return this.SelectedProductBuyMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;

  }

  public RemoveSelection(_invoicemain: ProductBuySelectMainInvoices) {

    this.SelectedProductBuyMainInvoice = new ProductBuySelectMainInvoices();
    this.productBuyMainInvoicesItems = [];

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

  public GetSumTotal(From: number, To: number, StoreName: string, SupplierName: string): number {

    let SumTotal = 0;

    if (From && To && StoreName && SupplierName) {
      this.AllProductBuyMainInvoices.filter((x: ProductBuySelectMainInvoices) => (
        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
        x.SupplierName.startsWith(SupplierName)
      )).forEach((element) => {


        SumTotal += element.Total;



      });
      return SumTotal;
    } else if (From && To && StoreName) {
      this.AllProductBuyMainInvoices.filter((x: ProductBuySelectMainInvoices) => (

        x.StoreName.startsWith(StoreName) &&
        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.Total;



      });
      return SumTotal;
    } else if (From && To) {

      this.AllProductBuyMainInvoices.filter((x: ProductBuySelectMainInvoices) => (

        new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)
      )).forEach((element) => {


        SumTotal += element.Total;



      });
      return SumTotal;
    } else {

      return SumTotal;
    }


  }

  public getProductBuyMainInvoiceItems() {
    this._listproductbuymaininvoiceitemsService.listProductBuyMainInvoiceItems(this.selectedInvoiceID)
      .subscribe((_result: ResultProductBuyInvoiceItems) => {

        _result.ProductBuyInvoiceItems.forEach(element => {
          this._listproductunitsbyidService
            .GetProductUnites(element.ProductID)
            .subscribe((_resultunits: ResultUnits) => {
              const productBuyInvoiceItem: ProductBuyInvoiceItems = {
                ProductID: element.ProductID,
                Price: element.Price,
                Num: element.Num,
                ProductName: element.ProductName,
                ProductUnits: _resultunits.UnitsList,
                Stock: element.Stock,
                UnitID: _resultunits.UnitsList[0].UnitID,
                ChangeNum: element.ChangeNum,
                DiscardNum: element.DiscardNum,
                UnitName: element.UnitName
              };

              this.productBuyMainInvoicesItems.push(productBuyInvoiceItem);
            });

        });
      });
  }

  public AddProductBuyDiscardMain(): void {


    // tslint:disable-next-line:prefer-const
    let _InvoiceItems: ProductBuyDiscardMainItemsModel[] = new Array<
      ProductBuyDiscardMainItemsModel
      >();
    this.productBuyMainInvoicesItems.forEach((element: ProductBuyInvoiceItems) => {
      // tslint:disable-next-line:prefer-const
      let _invoiceItem: ProductBuyDiscardMainItemsModel = new ProductBuyDiscardMainItemsModel();

      element.ProductUnits.forEach((unit: ProductUnitsModel) => {
        if (unit.UnitID == element.UnitID) {
          element.ChangeNum = unit.ChangeNum;
        }
      });

      _invoiceItem.UnitID = element.UnitID;
      _invoiceItem.DiscNum = element.Num;
      _invoiceItem.DiscChangeNum = element.ChangeNum;
      _invoiceItem.ProductID = element.ProductID;
      _invoiceItem.Price = element.Price;
      _invoiceItem.DiscNum_In_Max =  element.DiscardNum;
      _invoiceItem.DiscNum_In_Old =  element.DiscardNum;

      _InvoiceItems.push(_invoiceItem);
    });

    let DiscardValueTotal = 0;

    _InvoiceItems.forEach(elements => {
      DiscardValueTotal += (elements.Price * elements.DiscNum);

    });


    const productBuyMainTableModel: ProductBuyDiscardMainModel = {
      InvoiceID: this.selectedInvoiceID,
      UserID: this._OauthenticatedsessionServiceService.User.UserId,
      StoreID: this.selectedInvoiceStoreID,
      DiscardMainItems: _InvoiceItems,
      DiscardValue: DiscardValueTotal
    };

    this._addproductbuydiscardmainService
      .addProductBuyDiscardAddMain(productBuyMainTableModel)
      .subscribe((_result: ResultAddProductBuy) => {


        if (_result.Status === true) {
         this.modalRef.hide();

          this._notifierService.notify(
            'success',

            _result.Message
          );
          this.CreateActivityRecord();
          this.ngOnInit();
          this.productBuyMainInvoicesItems = [];
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
    this.addActivityModel.Type = 'فاتورة مرتجع شراء';
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
