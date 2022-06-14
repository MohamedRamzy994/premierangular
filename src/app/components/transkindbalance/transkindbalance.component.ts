import { AddtransferkindmainService } from './../../services/transferkinds/addtransferkindmain.service';
import { TransferKindsModel, ResultTransfer, ListTransferProductModel } from './../../models/transferkinds';
import { ProductUnitsModel } from './../../models/products';
import { ResultUnits } from './../../models/transferkinds';
import { ListproductunitsbyidService } from './../../services/transferkinds/listproductunitsbyid.service';
import { ListproductsService } from './../../services/products/listproducts.service';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import {
  ResultProducts,
  ProductBasicModel,
  ListProductModel
} from '../../models/products';
import { ListstoresService } from '../../services/stores/liststores.service';
import { Stores } from '../../models/stores';
import { Resultstores } from '../../models/resultstores';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { ListproductsinstoreService } from '../../services/products/listproductsinstore.service';
import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import { ListTransferKindInvoiceItemModel } from '../../models/transferkinds';

@Component({
  selector: 'app-transkindbalance',
  templateUrl: './transkindbalance.component.html',
  styleUrls: ['./transkindbalance.component.css']
})
export class TranskindbalanceComponent implements OnInit {
  public result: ResultProducts;
  public resultunits: ResultUnits;
  public resulttransfer: ResultTransfer;
  public ProductStores: Stores[];
  public selectedproducts: ListTransferProductModel[];
  public StoreIDFrom: number;
  public StoreIDTo: number;
  public productName: string;
  public modalRef: BsModalRef;
  public modalService: BsModalService;
  public p: any;
  public s: any;

  @ViewChild('StoreFromRef') StoreFrom: ElementRef;
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
  constructor(
    private _listproductsService: ListproductsService,
    private _liststoresService: ListstoresService,
    private _notifierService: NotifierService,
    private _modalService: BsModalService,
    private _listproductsinstoreService: ListproductsinstoreService,
    private _router: Router,
    private _listproductunitsbyidService: ListproductunitsbyidService,
    private _addtransferkindmainService: AddtransferkindmainService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,



  ) {
    this.result = {
      Status: false,
      Message: '',
      ProductsList: [],
      SelectedProduct: new ProductBasicModel()
    };
    this.resultunits = new ResultUnits();
    this.selectedproducts = [];
    this.productName = '';
    this.modalService = _modalService;
    this.StoreIDFrom = 0;
    this.StoreIDTo = 0;
  }

  ngOnInit() {
    this.getAllProducts();
    this.getAllStores();
  }

  getAllProducts(): void {
    this._listproductsService
      .listproducts()
      .subscribe((_result: ResultProducts) => {
        if (_result.ProductsList == null || _result.ProductsList.length === 0) {
          this.result = {
            Status: false,
            Message: '',
            ProductsList: [],
            SelectedProduct: new ProductBasicModel()
          };
        } else {
          this.result = _result;

          this.result.ProductsList.forEach(element => {
            element.IsSelected = false;
          });

        }

      });
  }


  public getAllStores(): void {
    this._liststoresService.listStores().subscribe((_result: Resultstores) => {
      if (_result.StoresList.length === 0 || _result.StoresList == null) {

      this.ProductStores = [];
      } else {

      this.ProductStores = _result.StoresList;

      }
    });
  }


  public SelectRow(_product: ListProductModel): void {
    this._listproductunitsbyidService.GetProductUnites(_product.ProductID).subscribe((_result: ResultUnits) => {
      const transferkindinstance: ListTransferProductModel = {
        ProductID: _product.ProductID,
        ProductCode: _product.ProductCode,
        PrintBarcode: _product.PrintBarcode,
        Price: _product.Price,
        P_Price: _product.P_Price,
        Num: 1,
        ProductName: _product.ProductName,
        ProductUnits: _result.UnitsList,
        Stock: _product.Stock,
        StopBuy: _product.StopBuy,
        StopSale: _product.StopSale,
        CatID: _product.CatID,
        CatName: _product.CatName,
        DisabledUnits: _product.DisabledUnits,
        Discount: _product.Discount,
        IsSelected: _product.IsSelected,
        MinLimit: _product.MinLimit,
        MinSalePrice: _product.MinSalePrice,
        UnitID: _result.UnitsList[0].UnitID
      };
      _product.IsSelected = !_product.IsSelected;


      this.selectedproducts.push(transferkindinstance);
    });

  }

  public DeleteKind(_product: ListTransferProductModel): void {
    this.selectedproducts.splice(
      this.selectedproducts.lastIndexOf(_product),
      1
    );

    this.result.ProductsList.forEach((elementin) => {

      if (elementin.ProductID === _product.ProductID && elementin.IsSelected === true) {

        elementin.IsSelected = false;

      }
    });

  }
  public DeleteKinds(): void {
    if (this.selectedproducts.length === 0) {
      this._notifierService.notify('error', '    لم يتم اضافة أصناف للفاتورة  يمكنك اضافة اصناف للفاتورة الان ');
    this.modalRef.hide();
      return;
    }
    this.selectedproducts.forEach(element => {
      element.IsSelected = false;
      element.DisabledUnits = false;

      this.getAllProductsInStore(parseInt(this.StoreFrom.nativeElement.value, 10)).forEach(elementstock => {



        element.Stock = elementstock.Stock;



      });


    });

    this.selectedproducts.splice(0);
    this._notifierService.notify('success', ' تم تفريغ الفاتورة بنجاح يمكنك اضافة اصناف للفاتورة الان ');
    this.modalRef.hide();
  }


  public openDeleteModal(template: TemplateRef<any>): void {


    this.modalRef = this.modalService.show(template);

  }
  public openSaveModal(template: TemplateRef<any>): void {


    this.modalRef = this.modalService.show(template);

  }

  public openCalculatorModal(template: TemplateRef<any>): void {


    this.modalRef = this.modalService.show(template);

  }



  public goToEditKind(_product: ListProductModel): void {



    this._router.navigate(['editkind', _product.ProductID]);


  }

  getAllProductsInStore(_storeID: number): ListProductModel[] {
    this._listproductsinstoreService
      .listproductsinstore(_storeID)
      .subscribe((_result: ResultProducts) => {
        if (_result.ProductsList.length === 0 || _result.ProductsList == null) {
          this.result.ProductsList  = [];
          } else {
            this.result.ProductsList = _result.ProductsList;
          }
      });
    return this.result.ProductsList;
  }
  getAllProductUnitsById(_productID: number): ProductUnitsModel[] {
    this._listproductunitsbyidService
      .GetProductUnites(_productID)
      .subscribe((_result: ResultUnits) => {
        if (_result.UnitsList.length === 0 || _result.UnitsList == null) {
          this.resultunits.UnitsList  = [];
          } else {
        this.resultunits.UnitsList = _result.UnitsList;
          }
      });

    return this.resultunits.UnitsList;
  }

  getStockTotalBySelectedUnit(_product: ListProductModel, _unit: ProductUnitsModel): void {

    _product.Stock = _product.Stock * _unit.ChangeNum;
    _product.DisabledUnits = true;

  }

  public AddTransferKindsMain(storeIDFrom: number, storeIDTo: number): void {


    if (storeIDFrom === storeIDTo) {

      this._notifierService.notify('error', 'من فضلك لا يمكن نقل هذه الاصناف الى نفس المخزن');

    } else {

      let _transferKindsModel: TransferKindsModel = new TransferKindsModel();
      // tslint:disable-next-line:prefer-const
      let _InvoiceItems: ListTransferKindInvoiceItemModel[] = new Array<ListTransferKindInvoiceItemModel>();
      this.selectedproducts.forEach((element: ListTransferProductModel) => {
      // tslint:disable-next-line:prefer-const
        let _invoiceItem: ListTransferKindInvoiceItemModel = new ListTransferKindInvoiceItemModel();

        element.ProductUnits.forEach((unit: ProductUnitsModel) => {


          if (unit.UnitID === element.UnitID) {


            element.ChangeNum = unit.ChangeNum;


          }

        });

        _invoiceItem.UnitID = element.UnitID;
        _invoiceItem.Num = element.Num;
        _invoiceItem.ChangeNum = element.ChangeNum;
        _invoiceItem.ProductID = element.ProductID;

        _InvoiceItems.push(_invoiceItem);
      });

      _transferKindsModel = {
        UserID: this._OauthenticatedsessionServiceService.User.UserId,
        StoreIDFrom: storeIDFrom,
        StoreIDTo: storeIDTo,
        InvoiceItems: _InvoiceItems
      };
      this._addtransferkindmainService.addTransferKindMain(_transferKindsModel).subscribe((_result: ResultTransfer) => {

        this.resulttransfer = _result;

        if (this.resulttransfer.Status === true) {
          this.modalRef.hide();
          this._notifierService.notify('success', this.resulttransfer.Message);
          this.ngOnInit();

          this.selectedproducts = [];
          this.getAllProductsInStore(parseInt(this.StoreFrom.nativeElement.value, 10));

        } else {
          this._notifierService.notify('error', this.resulttransfer.Message);

        }

      });

    }
  }
  public Refresh() {
    this.ngOnInit();
  }

}
