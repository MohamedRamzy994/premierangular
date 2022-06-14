import { ProductBuyDiscardMainNotSpecifiedItemsModel } from './../../models/productbuy';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ResultProducts, ProductBasicModel, ListProductModel, ProductUnitsModel } from 'src/app/models/products';
import { ResultUnits, ListTransferProductModel } from 'src/app/models/transferkinds';
import { ResultAddProductBuy, ProductBuyMainTableModel, ProductBuyTableModel,
  ProductBuyDiscardMainNotSpecifiedModel } from 'src/app/models/productbuy';
import { Stores } from 'src/app/models/stores';
import { SupplierModel, ResultSuppliers } from 'src/app/models/suppliers';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ListSalesPointsModel, ResultListSalesPoints } from 'src/app/models/salespoints';
import { ListproductsService } from 'src/app/services/products/listproducts.service';
import { ListstoresService } from 'src/app/services/stores/liststores.service';
import { NotifierService } from 'angular-notifier';
import { ListproductsinstoreService } from 'src/app/services/products/listproductsinstore.service';
import { Router } from '@angular/router';
import { ListproductunitsbyidService } from 'src/app/services/transferkinds/listproductunitsbyid.service';
import { AddproductbalancemainService } from 'src/app/services/productopeningbalance/addproductbalancemain.service';
import { OauthenticatedsessionService } from 'src/app/services/general/Oauthenticatedsession.Service';
import { ListsuppliersService } from 'src/app/services/suppliers/listsuppliers.service';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { AddproducbuymainService } from 'src/app/services/productbuy/addproductbuymain.service';
import { Resultstores } from 'src/app/models/resultstores';
import { FormGroup } from '@angular/forms';
import { AddproductbuydiscardmainnotspecifiedService } from '../../services/productbuy/addproductbuydiscardmainnotspecififed.service';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';

@Component({
  selector: 'app-buybackwithoutbill',
  templateUrl: './buybackwithoutbill.component.html',
  styleUrls: ['./buybackwithoutbill.component.css']
})
export class BuybackwithoutbillComponent implements OnInit {
  public result: ResultProducts;
  public resultunits: ResultUnits;
  public resultaddproductbuy: ResultAddProductBuy;
  public ProductStores: Stores[];
  public Suppliers: SupplierModel[];
  public selectedproducts: ListTransferProductModel[];
  public productName: string;
  public modalRef: BsModalRef;
  public modalService: BsModalService;
  public activeSalesPoints: ListSalesPointsModel[];
  public addProductBuyMain: ProductBuyMainTableModel;
  public p: any;
  public s: any;
  public addActivityModel: AddActivityModel;
  public addProductBuySettings: {
    PayedMoneyEnabled: boolean ,
    SalesPointEnabled: boolean ,
    DefaultPaid: boolean ,
  };
  @ViewChild('StoreFromRef')
  StoreFrom: ElementRef;
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
    private _listsuppliersService: ListsuppliersService,
    private _listsalespointsService: ListsalespointsService,
    private _addproducbuymainService: AddproducbuymainService,
    private _createactivityService: CreateactivityService,

    private _addproductbuydiscardmainnotspecifiedService: AddproductbuydiscardmainnotspecifiedService
  ) {
    this.result = {
      Status: false,
      Message: '',
      ProductsList: [],
      SelectedProduct: new ProductBasicModel()
    };
    this.productName = '';
    this.selectedproducts = [];
    this.modalService = _modalService;
    this.Suppliers = [];
    this.activeSalesPoints = [];
    this.addProductBuyMain = new ProductBuyMainTableModel();
    this.addProductBuyMain.StoreID = 0;
    this.addProductBuyMain.DiscountCash = 0 ;
    this.addProductBuySettings = {PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true};
    this.addActivityModel = new AddActivityModel();
  }

  ngOnInit() {
    this.getAllProducts();
    this.getAllStores();
    this.getAllSuppliers();
    this.getAllActiveSalesPoints();
  }

  getAllProducts(): void {
    this._listproductsService
      .listproducts()
      .subscribe((_result: ResultProducts) => {
        if (_result.ProductsList == null || _result.ProductsList.length == 0) {
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
 
  public SelectRow(_product: ListProductModel): void {
    this._listproductunitsbyidService
      .GetProductUnites(_product.ProductID)
      .subscribe((_result: ResultUnits) => {
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

  public getAllStores(): void {
    this._liststoresService.listStores().subscribe((_result: Resultstores) => {
      if (_result.StoresList.length == 0 || _result.StoresList == null) {

      this.ProductStores = [];
      } else {

      this.ProductStores = _result.StoresList;

      }
    });
  }


  public getAllSuppliers(): void {
    this._listsuppliersService
      .ListSuppliers()
      .subscribe((_result: ResultSuppliers) => {
        if (_result.SuppliersList.length == 0 || _result.SuppliersList == null) {
          this.Suppliers = [];
          } else {
            this.Suppliers = _result.SuppliersList;
          }
      });
  }

  public DeleteKind(_product: ListTransferProductModel): void {
    this.selectedproducts.splice(
      this.selectedproducts.lastIndexOf(_product),
      1
    );

    this.result.ProductsList.forEach(elementin => {
      if (
        elementin.ProductID === _product.ProductID &&
        elementin.IsSelected === true
      ) {
        elementin.IsSelected = false;
      }
    });
  }
  public DeleteKinds(): void {
    this.selectedproducts.forEach(element => {
      element.IsSelected = false;
      element.DisabledUnits = false;

      this.getAllProductsInStore(
        parseInt(this.StoreFrom.nativeElement.value, 10)
      ).forEach(elementstock => {
        element.Stock = elementstock.Stock;
      });
    });

    this.selectedproducts.splice(0);
    this._notifierService.notify(
      'success',
      ' تم تفريغ الفاتورة بنجاح يمكنك اضافة اصناف للفاتورة الان '
    );
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
    this._listproductsinstoreService
      .listproductsinstore(_storeID)
      .subscribe((_result: ResultProducts) => {
        if (_result.ProductsList.length == 0 || _result.ProductsList == null) {
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
        if (_result.UnitsList.length == 0 || _result.UnitsList == null) {
          this.resultunits.UnitsList  = [];
          } else {
        this.resultunits.UnitsList = _result.UnitsList;
          }
      });

    return this.resultunits.UnitsList;
  }

  getStockTotalBySelectedUnit(
    _product: ListProductModel,
    _unit: ProductUnitsModel
  ): void {
    _product.Stock = _product.Stock * _unit.ChangeNum;
    _product.DisabledUnits = true;
  }

  public getAllActiveSalesPoints() {
    this._listsalespointsService
      .ListAllSalesPoints()
      .subscribe((_result: ResultListSalesPoints) => {
        if (_result.SalesPointsList.length == 0 || _result.SalesPointsList == null) {
          this.activeSalesPoints = [];
          } else {
            this.activeSalesPoints = _result.SalesPointsList;
          }

      });
  }
  public AddProductBuyDiscardMainNotSpecified(
    _productBuyMainTableModel: ProductBuyDiscardMainNotSpecifiedModel ,
    _formGroup: FormGroup
  ): void {


    // tslint:disable-next-line:prefer-const
    let _InvoiceItems: ProductBuyDiscardMainNotSpecifiedItemsModel[] = new Array<
    ProductBuyDiscardMainNotSpecifiedItemsModel
      >();
    this.selectedproducts.forEach((element: ListTransferProductModel) => {
      // tslint:disable-next-line:prefer-const
      let _invoiceItem: ProductBuyDiscardMainNotSpecifiedItemsModel = new ProductBuyDiscardMainNotSpecifiedItemsModel();

      element.ProductUnits.forEach((unit: ProductUnitsModel) => {
        if (unit.UnitID == element.UnitID) {
          element.ChangeNum = unit.ChangeNum;
        }
      });

      _invoiceItem.UnitID = element.UnitID;
      _invoiceItem.Num = element.Num;
      _invoiceItem.ChangeNum = element.ChangeNum;
      _invoiceItem.ProductID = element.ProductID;
      _invoiceItem.Price = element.P_Price;



      _InvoiceItems.push(_invoiceItem);
    });

    const productBuyMainTableModel: ProductBuyDiscardMainNotSpecifiedModel = {
      UserID: this._OauthenticatedsessionServiceService.User.UserId,
      StoreID: _productBuyMainTableModel.StoreID,
      DiscardMainItems: _InvoiceItems,
      SupplierID: _productBuyMainTableModel.SupplierID,
      Total: this.GetTotalAmount()
    };

    this._addproductbuydiscardmainnotspecifiedService
      .addProductBuyDiscardAddMainNotSpecified(productBuyMainTableModel)
      .subscribe((_result: ResultAddProductBuy) => {
        this.resultaddproductbuy = _result;

        if (this.resultaddproductbuy.Status === true) {
      this.modalRef.hide();

          this._notifierService.notify(
            'success',
            this.resultaddproductbuy.Message
          );
          this.CreateActivityRecord();
          this.ngOnInit();
          this.selectedproducts = [];
          _formGroup.reset();
          this.addProductBuyMain.StoreID = 0;
          this.getAllProductsInStore(
            parseInt(this.StoreFrom.nativeElement.value, 10)
          );
        } else {
      this.modalRef.hide();

          this._notifierService.notify(
            'error',
            this.resultaddproductbuy.Message
          );
        }
      });
  }

  public CashPaid(): void {

    this.addProductBuySettings = {PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true};

  }

  public OnAccountPaid(): void {

    this.addProductBuySettings = {PayedMoneyEnabled: true, SalesPointEnabled: true, DefaultPaid: false};

    this.addProductBuyMain.SalesPointID = 0 ;
    this.addProductBuyMain.PayedMoney = 0 ;
    }
  public GetTotalAmount(): number {
    let InvoiceTotal = 0;

    this.selectedproducts.forEach((element) => {

      InvoiceTotal += element.P_Price * element.Num;



    });
    
    this.addProductBuyMain.Total = InvoiceTotal;
    this.GetTotal(InvoiceTotal);

    return InvoiceTotal;

  }
  public GetTotal(InvoiceTotal: number): number {

    const TotalDiscount: number =
     InvoiceTotal - this.addProductBuyMain.DiscountCash;

    return TotalDiscount;
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
