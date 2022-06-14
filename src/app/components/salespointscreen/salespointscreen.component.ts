import { User } from './../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { OauthenticatedsessionService } from '../../services/general/Oauthenticatedsession.Service';
import * as screenfull from 'screenfull';
import { SettingsModel, ResultGetSystemSettings } from 'src/app/models/settings';
import { AppsettingsService } from 'src/app/services/general/appsettings.service';
import { ApiurlService } from 'src/app/services/general/apiurl.service';
import { CurrentMacAddresses } from '../../models/settings';
import { CurrentsalespointmacsService } from '../../services/general/currentsalespointmacs.service';
import { ListsalespointsService } from 'src/app/services/salespoints/listsalespoints.service';
import { ResultListSalesPoints, ListSalesPointsModel } from '../../models/salespoints';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ResultProducts, ProductBasicModel, ListProductModel, ProductUnitsModel } from 'src/app/models/products';
import { ResultUnits, ListTransferProductModel } from 'src/app/models/transferkinds';
import { ResultAddProductBuy } from 'src/app/models/productbuy';
import { Stores } from 'src/app/models/stores';
import { ListCustomersModel, ResultListCustomers } from 'src/app/models/customers';
import { ListEmployeesModel, ResultListEmployees } from 'src/app/models/employees';
import { ProductSaleMainTableModel, ProductSaleTableModel } from 'src/app/models/productsales';
import { ListproductsService } from 'src/app/services/products/listproducts.service';
import { ListstoresService } from 'src/app/services/stores/liststores.service';
import { NotifierService } from 'angular-notifier';
import { ListproductsinstoreService } from 'src/app/services/products/listproductsinstore.service';
import { ListproductunitsbyidService } from 'src/app/services/transferkinds/listproductunitsbyid.service';
import { AddproductbalancemainService } from 'src/app/services/productopeningbalance/addproductbalancemain.service';
import { ListcustomersService } from 'src/app/services/customers/listcustomers.service';
import { ListemployeesService } from 'src/app/services/employees/listemployees.service';
import { AddproducsalemainService } from 'src/app/services/productsales/addproductsalemain.service';
import { Resultstores } from 'src/app/models/resultstores';
import { FormGroup } from '@angular/forms';
import Printd from 'printd';
import { AddActivityModel, ResultAddActivityRecord } from 'src/app/models/notificationsactivities';
import { CreateactivityService } from 'src/app/services/notificationsactivities/createactivity.service';
@Component({
  selector: 'app-salespointscreen',
  templateUrl: './salespointscreen.component.html',
  styleUrls: ['./salespointscreen.component.css']
})
export class SalespointscreenComponent implements OnInit {
  @Output() closed = new EventEmitter<boolean>();
  public clock: string;
  public hiddenref: boolean;

  public user: User;
  public appSettings: SettingsModel;
  public currentMacAddresses: CurrentMacAddresses;
  public currentsalespoint: ListSalesPointsModel;
  public tricked: boolean;
  public modalRef: BsModalRef;
  public modalService: BsModalService;
  public m: any;
  public n: any;
  public result: ResultProducts;
  public resultunits: ResultUnits;
  public resultaddproductbuy: ResultAddProductBuy;
  public ProductStores: Stores[];
  public Customers: ListCustomersModel[];
  public Employees: ListEmployeesModel[];
  public selectedproducts: ListTransferProductModel[];
  public productName: string;
  public activeSalesPoints: ListSalesPointsModel[];
  public addProductSaleMain: ProductSaleMainTableModel;
  public kindslength: number;
  public addActivityModel: AddActivityModel;
  public addProductBuySettings: {
    PayedMoneyEnabled: boolean,
    SalesPointEnabled: boolean,
    DefaultPaid: boolean,
  };
  @ViewChild('StoreFromRef')
  StoreFrom: ElementRef;
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };


  constructor(
    private _OauthenticatedsessionServiceService: OauthenticatedsessionService,
    private router: Router,
    private _apiurlService: ApiurlService,
    private _appsettingsService: AppsettingsService,
    private _modalService: BsModalService,
    private _listsalespointsService: ListsalespointsService,
    private _currentMacAddresses: CurrentsalespointmacsService,
    private _listproductsService: ListproductsService,
    private _liststoresService: ListstoresService,
    private _notifierService: NotifierService,
    private _listproductsinstoreService: ListproductsinstoreService,
    private _router: Router,
    private _listproductunitsbyidService: ListproductunitsbyidService,
    private _addproductbalancemainService: AddproductbalancemainService,
    private _listcustomersService: ListcustomersService,
    private _listemployeesService: ListemployeesService,
    private _addproductsalemainService: AddproducsalemainService,
    private _createactivityService: CreateactivityService,
    private activatedRoute: ActivatedRoute) {

    this.modalService = _modalService;
    this.result = {
      Status: false,
      Message: '',
      ProductsList: [],
      SelectedProduct: new ProductBasicModel()
    };
    this.hiddenref = true;
    this.addActivityModel = new AddActivityModel();

    this.productName = '';
    this.kindslength = 0;
    this.currentsalespoint = new ListSalesPointsModel();
    this.selectedproducts = [];
    this.modalService = _modalService;
    this.Customers = [];
    this.Employees = [];
    this.activeSalesPoints = [];
    this.addProductSaleMain = new ProductSaleMainTableModel();
    this.addProductSaleMain.StoreID = 0;
    this.addProductSaleMain.SalesPointID = 0;
    this.addProductSaleMain.SelectedProducts = [];
    this.addProductSaleMain.EmpID = 0;
    this.addProductSaleMain.CustomerID = 0;

    this.addProductSaleMain.Cash = 0;
    this.addProductSaleMain.Addtions = 0;
    this.addProductSaleMain.DiscLE = 0;
    this.addProductSaleMain.Total = 0;
    this.addProductSaleMain.Net = 0;
    this.addProductSaleMain.InvTypeID = 1;


    this.addProductSaleMain.Notes = '';

    this.addProductBuySettings = { PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true };


  }

  ngOnInit() {
    this.clock = '';
    this.tricked = true;
    this.appSettings = new SettingsModel();
    this.currentMacAddresses = new CurrentMacAddresses();
    this.user = this._OauthenticatedsessionServiceService.User;
    this.GetAppSettings();
    this.GetCurrentSalesPointMacs();
    this.getAllProducts();
    this.getAllStores();
    this.getAllCustomers();
    this.getAllEmployees();
    this.getAllActiveSalesPoints();
    this.dateTime();

  }

  public logOut(): void {

    sessionStorage.clear();
    this.router.navigate(['home']);



  }
  public GetAppSettings(): void {

    this._appsettingsService.AppSettings().subscribe((_result: ResultGetSystemSettings) => {

      if (_result.Status == true) {
        this.appSettings = _result.SettingsModel[0];
        this.appSettings.Logo = this._apiurlService.apiUrl + this.appSettings.Logo;

      } else {

        this.appSettings = {
          ShopName: 'ماركـت شوت',
          WorkType: 'التجارة والحسابات والمبيعات',
          Address: 'الدراسات - المنصورة - الدقهلية - مصر ',
          Logo: '/bag.png',
          Background: '/bag.png'
        };
      }
    });
  }
  public ToggelFullScreen(event: Event) {

    if (screenfull.enabled) {
      screenfull.toggle(document.documentElement);
    }
  }
  /**
   * GetCurrentSalesPointMacs
   */
  public GetCurrentSalesPointMacs() {
    this._currentMacAddresses.GetCurrentSalesPointMacs().subscribe((_result: CurrentMacAddresses) => {

      if (_result.NotFoundMac == null) {

        this.currentMacAddresses = _result;
        this._listsalespointsService.ListAllSalesPoints().subscribe((_resultsales: ResultListSalesPoints) => {
          _resultsales.SalesPointsList.forEach(element => {
            if (element.SalesPointMACEthernet === _result.EtherNetMac || element.SalesPointMACWireless === _result.WireLessMac) {

              this.currentsalespoint = element;
            }

          });

        });

      } else {
        this.currentMacAddresses = new CurrentMacAddresses();

      }

    });
  }

  public dateTime(): any {
    const date = new Date;
    const year = date.getFullYear();
    const month = date.getMonth();
    const months = new Array('January', 'February', 'March', 'April',
      'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    const d = date.getDate();
    const day = date.getDay();
    const days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    const h = date.getHours();

    const m = date.getMinutes();

    const s = date.getSeconds();

    this.clock = '' + days[day] + ' ' + months[month] + ' ' + d + ' ' + year + ' ' + h + ':' + m + ':' + s;
    setTimeout(() => {
      this.dateTime();
    }, 1000);
  }
  public CloseScreen(trick: boolean) {
    this.closed.emit(trick);

  }
  public openCalculatorModal(template: TemplateRef<any>): void {


    this.modalRef = this.modalService.show(template);

  }

  getAllProducts(): void {
    this._listproductsService
      .listproducts()
      .subscribe((_result: ResultProducts) => {
        if (_result.ProductsList.length == 0 || _result.ProductsList == null) {

          this.result = {
            Status: false,
            Message: '',
            ProductsList: [],
            SelectedProduct: new ProductBasicModel()
          };
        } else {


        }

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
          UnitID: _result.UnitsList[0].UnitID,
          TotalDisc: _product.Discount,
          NetPrice: _product.Price - (_product.Price * (_product.Discount / 100))
        };
        _product.IsSelected = !_product.IsSelected;

        this.selectedproducts.push(transferkindinstance);
        this.kindslength = this.selectedproducts.length;
      });
  }

  public getAllStores(): void {
    this._liststoresService.listStores().subscribe((_result: Resultstores) => {
      this.ProductStores = _result.StoresList;
    });
  }

  public getAllCustomers(): void {
    this._listcustomersService
      .ListCustomers()
      .subscribe((_result: ResultListCustomers) => {
        this.Customers = _result.CustomersList;
      });
  }
  public getAllEmployees(): void {
    this._listemployeesService
      .ListEmployees()
      .subscribe((_result: ResultListEmployees) => {
        this.Employees = _result.EmployeesList;
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
    this.kindslength = this.selectedproducts.length;
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
    this.addProductSaleMain.StoreID = 0;
    this.addProductSaleMain.SalesPointID = 0;
    this.addProductSaleMain.SelectedProducts = [];
    this.addProductSaleMain.EmpID = 0;
    this.addProductSaleMain.CustomerID = 0;
    this.addProductSaleMain.Cash = 0;
    this.addProductSaleMain.Addtions = 0;
    this.addProductSaleMain.DiscLE = 0;

    this._notifierService.notify(
      'success',
      ' تم تفريغ الفاتورة بنجاح يمكنك اضافة اصناف للفاتورة الان '
    );
    this.modalRef.hide();
    this.kindslength = this.selectedproducts.length;
  }

  public openDeleteModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
  public goToEditKind(_product: ListProductModel): void {
    this._router.navigate(['editkind', _product.ProductID]);
  }
  getAllProductsInStore(_storeID: number): ListProductModel[] {
    this._listproductsinstoreService
      .listproductsinstore(_storeID)
      .subscribe((_result: ResultProducts) => {
        this.result.ProductsList = _result.ProductsList;
      });
    return this.result.ProductsList;
  }
  getAllProductUnitsById(_productID: number): ProductUnitsModel[] {
    this._listproductunitsbyidService
      .GetProductUnites(_productID)
      .subscribe((_result: ResultUnits) => {
        this.resultunits.UnitsList = _result.UnitsList;
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
        this.activeSalesPoints = _result.SalesPointsList;
      });
  }

  public AddProductSaleMain(
    _productSaleMainTableModel: ProductSaleMainTableModel, _formGroup: FormGroup): void {


    // tslint:disable-next-line:prefer-const
    let _InvoiceItems: ProductSaleTableModel[] = new Array<
      ProductSaleTableModel
    >();
    this.selectedproducts.forEach((element: ListTransferProductModel) => {
      // tslint:disable-next-line:prefer-const
      let _invoiceItem: ProductSaleTableModel = new ProductSaleTableModel();

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
      _invoiceItem.TotalDisc = element.Discount;
      _invoiceItem.NetPrice = element.Price - (element.Price * (_invoiceItem.TotalDisc / 100));




      _InvoiceItems.push(_invoiceItem);
    });

    const productSaleMainTableModel: ProductSaleMainTableModel = {
      UserID: this._OauthenticatedsessionServiceService.User.UserId,
      StoreID: _productSaleMainTableModel.StoreID,
      SelectedProducts: _InvoiceItems,
      CustomerID: _productSaleMainTableModel.CustomerID,
      Total: _productSaleMainTableModel.Total,
      Cash: _productSaleMainTableModel.Cash,
      SalesPointID: _productSaleMainTableModel.SalesPointID,
      InvTypeID: _productSaleMainTableModel.InvTypeID,
      DateSubmit: _productSaleMainTableModel.DateSubmit,
      EmpID: _productSaleMainTableModel.EmpID,
      Addtions: _productSaleMainTableModel.Addtions,
      Net: _productSaleMainTableModel.Net,
      DiscLE: _productSaleMainTableModel.DiscLE,
      Notes: _productSaleMainTableModel.Notes
    };
    console.log(productSaleMainTableModel);

    this._addproductsalemainService
      .addProductSaleAddMain(productSaleMainTableModel)
      .subscribe((_result: ResultAddProductBuy) => {
        this.resultaddproductbuy = _result;

        if (this.resultaddproductbuy.Status === true) {
          this.CreateActivityRecordDebits();
          this.modalRef.hide();
          this._notifierService.notify(
            'success',
            this.resultaddproductbuy.Message
          );
          this.PrintResetInvoice();
          this.ngOnInit();
          this.selectedproducts = [];
          _formGroup.reset();
          this.addProductSaleMain.StoreID = 0;
          this.addProductSaleMain.EmpID = 0;
          this.addProductSaleMain.CustomerID = 0;

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

    this.addProductBuySettings = { PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true };
    this.addProductSaleMain.InvTypeID = 1;

  }

  public OnAccountPaid(): void {

    this.addProductBuySettings = { PayedMoneyEnabled: true, SalesPointEnabled: true, DefaultPaid: false };

    this.addProductSaleMain.SalesPointID = 0;
    this.addProductSaleMain.TotalPayed = 0;
    this.addProductSaleMain.InvTypeID = 2;
  }
  public GetTotalAmount(): number {
    let InvoiceTotal = 0;

    this.selectedproducts.forEach((element) => {

      InvoiceTotal += element.Price * element.Num;




    });

    this.addProductSaleMain.Total = InvoiceTotal;
    return this.GetTotal(InvoiceTotal);

  }
  public GetTotal(InvoiceTotal: number): number {

    const TotalDiscount: number =
      InvoiceTotal - this.addProductSaleMain.DiscLE + this.addProductSaleMain.Addtions;

    this.addProductSaleMain.Net = InvoiceTotal;

    return TotalDiscount;
  }
  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
  public Refresh() {
    this.ngOnInit();
  }
  public ToggleMenu() {
    this.hiddenref = !this.hiddenref;
    $('.menu-toggle').toggleClass('open');

    $('#slideme').fadeToggle('slow');
  }
  public CloseMenu() {
    this.hiddenref = !this.hiddenref;
    $('.menu-toggle').toggleClass('open');
    $('#slideme').fadeToggle('slow');
  }
  public PrintResetInvoice() {
    const cssText = `
  article, aside , details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .text-center {
    text-align: center;
  }
  hr{
    width:100%;
    height:0px;
    border: 1px solid #000;
  }

.table {
width: 100%;
max-width: 100%;
}
table {
background-color: transparent;
}
table {
border-spacing: 0;
border-collapse: collapse;
}
table thead {
background-color: #f2f2f2 !important;
-webkit-print-color-adjust: exact;
}
tbody {
display: table-row-group;
vertical-align: middle;
border-color: inherit;
}
.table-striped > tbody > tr:nth-of-type(odd) {
background-color: #f9f9f9;
}
.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {
border: 1px solid #ddd;
}
.table > thead > tr > th, .table > tbody > tr > th,
.table > tfoot > tr > th, .table > thead > tr > td,
.table > tbody > tr > td, .table > tfoot > tr > td {
line-height: 1.42857143;
vertical-align: top;
border-top: 1px solid #ddd;
}
.btn {
display: none;
}

#resetbox{
  border: solid 1px #000;
  border-radius: 5px;
  padding: 5px;
font-size: 11px !important;
width: 8cm;
direction: rtl;
}
#resetbox .table{
  margin-bottom: 0px !important;
}
.invoicetitle{
  border: dotted 1px #000;
  border-radius: 5px;
  padding: 5px;
}
.cashirinfo tr{
  width: 100%;
}
.invoicekinds {
  width:100%;
}
.invoicesummary{
  width: 100%;
}

`;

    const d: Printd = new Printd();
    d.print(document.getElementById('body-content'), cssText);


  }
  public CreateActivityRecordDebits() {
    this.addActivityModel.DateSubmit = new Date();
    this.addActivityModel.Read = true;
    this.addActivityModel.Type = ' فاتورة بيع';
    this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
    this.addActivityModel.POS = this.addProductSaleMain.SalesPointID;
    this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe((_resultactivity: ResultAddActivityRecord) => {
      this._notifierService.notify(
        'success',
        _resultactivity.Message
      );
    });
  }
}
