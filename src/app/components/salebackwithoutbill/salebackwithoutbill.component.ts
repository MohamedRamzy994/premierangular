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
import { ListcustomersService } from 'src/app/services/customers/listcustomers.service';
import { ResultListCustomers, ListCustomersModel } from 'src/app/models/customers';
import { ListemployeesService } from 'src/app/services/employees/listemployees.service';
import { ResultListEmployees, ListEmployeesModel } from '../../models/employees';
import { ProductSaleDiscardMainItemsModel, ProductSaleInvoiceItems,
   ProductSaleDiscardMainModel, ProductSaleDiscardMainNotSpecifiedModel,
   ProductSaleDiscardMainNotSpecifiedItemsModel, ProductSaleMainTableModel } from 'src/app/models/productsales';
import { ResultOpenningBalance } from 'src/app/models/productopenningbalance';
import { AddproductsalediscardmainnotspecifiedService } from 'src/app/services/productsales/addproductsalediscardmainnotspecified.service';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';
@Component({
  selector: 'app-salebackwithoutbill',
  templateUrl: './salebackwithoutbill.component.html',
  styleUrls: ['./salebackwithoutbill.component.css']
})
export class SalebackwithoutbillComponent implements OnInit {
  public result: ResultProducts;
  public p: any;
  public s: any;

  public resultunits: ResultUnits;
  public resultaddproductbuy: ResultAddProductBuy;
  public ProductStores: Stores[];
  public Customers: ListCustomersModel[];
  public Employees: ListEmployeesModel[];
  public selectedproducts: ListTransferProductModel[];
  public productName: string;
  public modalRef: BsModalRef;
  public modalService: BsModalService;
  public activeSalesPoints: ListSalesPointsModel[];
  public addProductSaleMain: ProductSaleMainTableModel;
  public addProductBuySettings: {
    PayedMoneyEnabled: boolean ,
    SalesPointEnabled: boolean ,
    DefaultPaid: boolean ,
  };
  public addActivityModel: AddActivityModel;
  public GetMoneyBack: boolean;
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
    private _listcustomersService: ListcustomersService,
    private _listemployeeService: ListemployeesService,
    private _listsalespointsService: ListsalespointsService,
    private _addproducbuymainService: AddproducbuymainService,
    private _createactivityService: CreateactivityService,
    private _addproductbuydiscardmainnotspecifiedService: AddproductbuydiscardmainnotspecifiedService ,
    private _addproductsalediscardmainnotspecifiedService: AddproductsalediscardmainnotspecifiedService
    ) {
    this.result = {
      Status: false,
      Message: '',
      ProductsList: [],
      SelectedProduct: new ProductBasicModel()
    };
    this.GetMoneyBack = false;
    this.productName = '';
    this.selectedproducts = [];
    this.modalService = _modalService;
    this.Customers = [];
    this.activeSalesPoints = [];
    this.addProductSaleMain = new ProductSaleMainTableModel();
    this.addActivityModel = new AddActivityModel();

    this.addProductSaleMain.StoreID = 0;
    this.addProductSaleMain.Total = 0;
    this.addProductBuySettings = {PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true};
  }

  ngOnInit() {
    this.getAllProducts();
    this.getAllStores();
    this.getAllCustomers();
    this.getAllActiveSalesPoints();
    this.getAllEmployees();
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
      if (_result.StoresList.length === 0 || _result.StoresList == null) {

      this.ProductStores = [];
      } else {

      this.ProductStores = _result.StoresList;

      }
    });
  }
  public getAllCustomers(): void {
    this._listcustomersService
      .ListCustomers()
      .subscribe((_result: ResultListCustomers) => {
        if (_result.CustomersList.length === 0 || _result.CustomersList == null) {
          this.Customers = [];
          } else {
        this.Customers = _result.CustomersList;
          }
      });
  }

  public getAllEmployees(): void {
    this._listemployeeService
      .ListEmployees()
      .subscribe((_result: ResultListEmployees) => {
        if (_result.EmployeesList.length === 0 || _result.EmployeesList == null) {
          this.Employees = [];
          } else {
            this.Employees = _result.EmployeesList;

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
        if (_result.SalesPointsList.length === 0 || _result.SalesPointsList == null) {
          this.activeSalesPoints = [];
          } else {
            this.activeSalesPoints = _result.SalesPointsList;
          }

      });
  }

  public AddProductSaleDiscardMainNotSpecified(
    _productSaleMainTableModel: ProductSaleMainTableModel ,
    _formGroup: FormGroup
  ): void {


    // tslint:disable-next-line:prefer-const
    let _InvoiceItems: ProductSaleDiscardMainNotSpecifiedItemsModel[] = new Array<
    ProductSaleDiscardMainNotSpecifiedItemsModel
      >();
    this.selectedproducts.forEach((element: ListTransferProductModel) => {
      // tslint:disable-next-line:prefer-const
      let _invoiceItem: ProductSaleDiscardMainNotSpecifiedItemsModel = new ProductSaleDiscardMainNotSpecifiedItemsModel();

      element.ProductUnits.forEach((unit: ProductUnitsModel) => {
        if (unit.UnitID === element.UnitID) {
          element.ChangeNum = unit.ChangeNum;
        }
      });
      _invoiceItem.UnitID = element.UnitID;
      _invoiceItem.Num = element.Num;
      _invoiceItem.ChangeNum = element.ChangeNum;
      _invoiceItem.ProductID = element.ProductID;
      _invoiceItem.Price = element.Price;



      _InvoiceItems.push(_invoiceItem);
    });

    const productSaleMainTableModel: ProductSaleDiscardMainNotSpecifiedModel = {
      UserID: this._OauthenticatedsessionServiceService.User.UserId,
      StoreID: _productSaleMainTableModel.StoreID,
      DiscardSaleMainItems: _InvoiceItems,
      CustomerID: _productSaleMainTableModel.CustomerID,
      Total: this.addProductSaleMain.Total,
      DateSubmit: this.addProductSaleMain.DateSubmit,
      GetMoneyBack: this.GetMoneyBack,
      EmpID: this.addProductSaleMain.EmpID,
      ThisSalesPointID: 2
    };

    this._addproductsalediscardmainnotspecifiedService
      .addProductSaleDiscardAddMain(productSaleMainTableModel)
      .subscribe((_result: ResultOpenningBalance) => {
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
          this.addProductSaleMain.StoreID = 0;
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

    this.addProductSaleMain.SalesPointID = 0 ;
    this.addProductSaleMain.TotalPayed = 0 ;
    }
  public GetTotalAmount(): number {
    let InvoiceTotal = 0;

    this.selectedproducts.forEach((element) => {

      InvoiceTotal += element.Price * element.Num;




    });

    this.addProductSaleMain.Total = InvoiceTotal;

    this.GetTotal(InvoiceTotal);

    return InvoiceTotal;

  }
  public GetTotal(InvoiceTotal: number): number {

    const TotalDiscount: number =
     InvoiceTotal - this.addProductSaleMain.DiscLE;

    return TotalDiscount;
  }
  public openModal(template: TemplateRef<any>): void {
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
