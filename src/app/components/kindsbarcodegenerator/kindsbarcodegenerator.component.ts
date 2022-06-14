import { SelectedkindsbarcodesService } from './../../services/productbarcodes/selectedkindsbarcodes.service';
import { AddproductbalancemainService } from './../../services/productopeningbalance/addproductbalancemain.service';
import { ResultOpenningBalance, ListProductOpenningBalanceModel } from './../../models/productopenningbalance';
import { AddtransferkindmainService } from './../../services/transferkinds/addtransferkindmain.service';
import { ResultTransfer, ListTransferProductModel } from './../../models/transferkinds';
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
import { ProductOpenningBalanceModel, ProductOpenningBalanceItemsModel } from '../../models/productopenningbalance';
@Component({
  selector: 'app-kindsbarcodegenerator',
  templateUrl: './kindsbarcodegenerator.component.html',
  styleUrls: ['./kindsbarcodegenerator.component.css']
})

export class KindsbarcodegeneratorComponent implements OnInit {
  public result: ResultProducts;
  public resultunits: ResultUnits;
  public resultOpenningBalance: ResultOpenningBalance;
  public ProductStores: Stores[];
  public selectedproducts: ListTransferProductModel[];
  public StoreIDFrom: number;
  public productName: string;
  public modalRef: BsModalRef;
  public p: any;
  public s: any;

  public modalService: BsModalService;
  public barcodeobject: { barcodevalue: string, barcodeheader: string, barcodefooter: string };
  public options: {
    format: string,
    lineColor: string,
    width: number,
    height: number,
    displayValue: boolean,
    fontOptions: string,
    font: string,
    textAlign: string,
    textPosition: string,
    textMargin: number,
    fontSize: number,
    background: string,
    margin: number,
    marginTop: number,
    marginBottom: number,
    marginLeft: number,
    marginRight: number
  };
  
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
    private _addproductbalancemainService: AddproductbalancemainService,
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private _selectedkindsbarcodesService: SelectedkindsbarcodesService

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
    this.barcodeobject = { barcodevalue: '', barcodeheader: '', barcodefooter: '' };
    this.options = {
      format: 'CODE128',
      lineColor: '#000000',
      width: 3,
      height: 70,
      displayValue: true,
      fontOptions: '',
      font: 'monospace',
      textAlign: 'center',
      textPosition: 'bottom',
      textMargin: 2,
      fontSize: 20,
      background: '#ffffff',
      margin: 10,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10

    };
  }

  ngOnInit() {

    this.getAllProducts();
    this.getAllStores();
  }

  getAllProducts(): void {
    this._listproductsService
      .listproducts()
      .subscribe((_result: ResultProducts) => {
        this.result = _result;
        this.result.ProductsList.forEach(element => {
          element.IsSelected = false;
        });
        if (this.result.ProductsList === null) {
          this.result = {
            Status: false,
            Message: '',
            ProductsList: [],
            SelectedProduct: new ProductBasicModel()
          };
        }
      });
  }
  public getAllStores(): void {
    this._liststoresService.listStores().subscribe((_result: Resultstores) => {
      this.ProductStores = _result.StoresList;
    });
  }

  public SelectRow(_product: ListProductModel): void {

    this.barcodeobject.barcodevalue = _product.ProductID.toString();
    this.barcodeobject.barcodefooter = _product.ProductName;
    this.barcodeobject.barcodeheader = 'PREMIER';

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

  public openCalculatorModal(template: TemplateRef<any>): void {


    this.modalRef = this.modalService.show(template);

  }



  public goToEditKind(_product: ListProductModel): void {



    this._router.navigate(['editkind', _product.ProductID]);


  }
  getAllProductsInStore(_storeID: number): ListProductModel[] {

    this._listproductsinstoreService.listproductsinstore(_storeID).subscribe((_result: ResultProducts) => {

      this.result.ProductsList = _result.ProductsList;

    });
    return this.result.ProductsList;


  }
  getAllProductUnitsById(_productID: number): ProductUnitsModel[] {

    this._listproductunitsbyidService.GetProductUnites(_productID).subscribe((_result: ResultUnits) => {

      this.resultunits.UnitsList = _result.UnitsList;

    });

    return this.resultunits.UnitsList;

  }

  getStockTotalBySelectedUnit(_product: ListProductModel, _unit: ProductUnitsModel): void {

    _product.Stock = _product.Stock * _unit.ChangeNum;
    _product.DisabledUnits = true;

  }

  public AddProductOpeningBalanceMain(_storeID: number): void {

    let _productOpenningBalanceModel: ProductOpenningBalanceModel = new ProductOpenningBalanceModel();
    // tslint:disable-next-line:prefer-const
    let _InvoiceItems: ProductOpenningBalanceItemsModel[] = new Array<ProductOpenningBalanceItemsModel>();
    this.selectedproducts.forEach((element: ListTransferProductModel) => {
      // tslint:disable-next-line:prefer-const
      let _invoiceItem: ProductOpenningBalanceItemsModel = new ProductOpenningBalanceItemsModel();

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

    _productOpenningBalanceModel = {
      UserID: this._OauthenticatedsessionServiceService.User.UserId,
      StoreID: _storeID,
      InvoiceItems: _InvoiceItems,
    };
    this._addproductbalancemainService.addProductOpenningAddMain(_productOpenningBalanceModel)
      .subscribe((_result: ResultOpenningBalance) => {

        this.resultOpenningBalance = _result;

        if (this.resultOpenningBalance.Status === true) {

          this._notifierService.notify('success', this.resultOpenningBalance.Message);
          this.ngOnInit();
          this.selectedproducts = [];
          this.getAllProductsInStore(parseInt(this.StoreFrom.nativeElement.value, 10));

        } else {
          this._notifierService.notify('error', this.resultOpenningBalance.Message);

        }

      });

  }

  public gotoprintbarcodeprivew(): void {
    if (this.selectedproducts.length === 0) {

      this._notifierService.notify('error', 'من فضلك يجب اختيار اصناف  التى تريد طباعة باركود لها ');

    } else {

      this._selectedkindsbarcodesService.SelectedProducts = this.selectedproducts;
      this._router.navigate(['printkindsbarcode']);


    }

  }
  public Refresh() {
    this.ngOnInit();
  }


}



