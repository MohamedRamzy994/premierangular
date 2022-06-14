"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var screenfull = require("screenfull");
var settings_1 = require("src/app/models/settings");
var appsettings_service_1 = require("src/app/services/general/appsettings.service");
var apiurl_service_1 = require("src/app/services/general/apiurl.service");
var settings_2 = require("../../models/settings");
var currentsalespointmacs_service_1 = require("../../services/general/currentsalespointmacs.service");
var listsalespoints_service_1 = require("src/app/services/salespoints/listsalespoints.service");
var salespoints_1 = require("../../models/salespoints");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var products_1 = require("src/app/models/products");
var productsales_1 = require("src/app/models/productsales");
var listproducts_service_1 = require("src/app/services/products/listproducts.service");
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var angular_notifier_1 = require("angular-notifier");
var listproductsinstore_service_1 = require("src/app/services/products/listproductsinstore.service");
var listproductunitsbyid_service_1 = require("src/app/services/transferkinds/listproductunitsbyid.service");
var addproductbalancemain_service_1 = require("src/app/services/productopeningbalance/addproductbalancemain.service");
var listcustomers_service_1 = require("src/app/services/customers/listcustomers.service");
var listemployees_service_1 = require("src/app/services/employees/listemployees.service");
var addproductsalemain_service_1 = require("src/app/services/productsales/addproductsalemain.service");
var printd_1 = require("printd");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var SalespointscreenComponent = /** @class */ (function () {
    function SalespointscreenComponent(_OauthenticatedsessionServiceService, router, _apiurlService, _appsettingsService, _modalService, _listsalespointsService, _currentMacAddresses, _listproductsService, _liststoresService, _notifierService, _listproductsinstoreService, _router, _listproductunitsbyidService, _addproductbalancemainService, _listcustomersService, _listemployeesService, _addproductsalemainService, _createactivityService, activatedRoute) {
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this.router = router;
        this._apiurlService = _apiurlService;
        this._appsettingsService = _appsettingsService;
        this._modalService = _modalService;
        this._listsalespointsService = _listsalespointsService;
        this._currentMacAddresses = _currentMacAddresses;
        this._listproductsService = _listproductsService;
        this._liststoresService = _liststoresService;
        this._notifierService = _notifierService;
        this._listproductsinstoreService = _listproductsinstoreService;
        this._router = _router;
        this._listproductunitsbyidService = _listproductunitsbyidService;
        this._addproductbalancemainService = _addproductbalancemainService;
        this._listcustomersService = _listcustomersService;
        this._listemployeesService = _listemployeesService;
        this._addproductsalemainService = _addproductsalemainService;
        this._createactivityService = _createactivityService;
        this.activatedRoute = activatedRoute;
        this.closed = new core_1.EventEmitter();
        this.scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
        this.modalService = _modalService;
        this.result = {
            Status: false,
            Message: '',
            ProductsList: [],
            SelectedProduct: new products_1.ProductBasicModel()
        };
        this.hiddenref = true;
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this.productName = '';
        this.kindslength = 0;
        this.currentsalespoint = new salespoints_1.ListSalesPointsModel();
        this.selectedproducts = [];
        this.modalService = _modalService;
        this.Customers = [];
        this.Employees = [];
        this.activeSalesPoints = [];
        this.addProductSaleMain = new productsales_1.ProductSaleMainTableModel();
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
    SalespointscreenComponent.prototype.ngOnInit = function () {
        this.clock = '';
        this.tricked = true;
        this.appSettings = new settings_1.SettingsModel();
        this.currentMacAddresses = new settings_2.CurrentMacAddresses();
        this.user = this._OauthenticatedsessionServiceService.User;
        this.GetAppSettings();
        this.GetCurrentSalesPointMacs();
        this.getAllProducts();
        this.getAllStores();
        this.getAllCustomers();
        this.getAllEmployees();
        this.getAllActiveSalesPoints();
        this.dateTime();
    };
    SalespointscreenComponent.prototype.logOut = function () {
        sessionStorage.clear();
        this.router.navigate(['home']);
    };
    SalespointscreenComponent.prototype.GetAppSettings = function () {
        var _this = this;
        this._appsettingsService.AppSettings().subscribe(function (_result) {
            if (_result.Status == true) {
                _this.appSettings = _result.SettingsModel[0];
                _this.appSettings.Logo = _this._apiurlService.apiUrl + _this.appSettings.Logo;
            }
            else {
                _this.appSettings = {
                    ShopName: 'ماركـت شوت',
                    WorkType: 'التجارة والحسابات والمبيعات',
                    Address: 'الدراسات - المنصورة - الدقهلية - مصر ',
                    Logo: '/bag.png',
                    Background: '/bag.png'
                };
            }
        });
    };
    SalespointscreenComponent.prototype.ToggelFullScreen = function (event) {
        if (screenfull.enabled) {
            screenfull.toggle(document.documentElement);
        }
    };
    /**
     * GetCurrentSalesPointMacs
     */
    SalespointscreenComponent.prototype.GetCurrentSalesPointMacs = function () {
        var _this = this;
        this._currentMacAddresses.GetCurrentSalesPointMacs().subscribe(function (_result) {
            if (_result.NotFoundMac == null) {
                _this.currentMacAddresses = _result;
                _this._listsalespointsService.ListAllSalesPoints().subscribe(function (_resultsales) {
                    _resultsales.SalesPointsList.forEach(function (element) {
                        if (element.SalesPointMACEthernet === _result.EtherNetMac || element.SalesPointMACWireless === _result.WireLessMac) {
                            _this.currentsalespoint = element;
                        }
                    });
                });
            }
            else {
                _this.currentMacAddresses = new settings_2.CurrentMacAddresses();
            }
        });
    };
    SalespointscreenComponent.prototype.dateTime = function () {
        var _this = this;
        var date = new Date;
        var year = date.getFullYear();
        var month = date.getMonth();
        var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        var d = date.getDate();
        var day = date.getDay();
        var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        this.clock = '' + days[day] + ' ' + months[month] + ' ' + d + ' ' + year + ' ' + h + ':' + m + ':' + s;
        setTimeout(function () {
            _this.dateTime();
        }, 1000);
    };
    SalespointscreenComponent.prototype.CloseScreen = function (trick) {
        this.closed.emit(trick);
    };
    SalespointscreenComponent.prototype.openCalculatorModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalespointscreenComponent.prototype.getAllProducts = function () {
        var _this = this;
        this._listproductsService
            .listproducts()
            .subscribe(function (_result) {
            _this.result = _result;
            _this.result.ProductsList.forEach(function (element) {
                element.IsSelected = false;
            });
            if (_this.result.ProductsList === null) {
                _this.result = {
                    Status: false,
                    Message: '',
                    ProductsList: [],
                    SelectedProduct: new products_1.ProductBasicModel()
                };
            }
        });
    };
    SalespointscreenComponent.prototype.SelectRow = function (_product) {
        var _this = this;
        this._listproductunitsbyidService
            .GetProductUnites(_product.ProductID)
            .subscribe(function (_result) {
            var transferkindinstance = {
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
            _this.selectedproducts.push(transferkindinstance);
            _this.kindslength = _this.selectedproducts.length;
        });
    };
    SalespointscreenComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    SalespointscreenComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService
            .ListCustomers()
            .subscribe(function (_result) {
            _this.Customers = _result.CustomersList;
        });
    };
    SalespointscreenComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this._listemployeesService
            .ListEmployees()
            .subscribe(function (_result) {
            _this.Employees = _result.EmployeesList;
        });
    };
    SalespointscreenComponent.prototype.DeleteKind = function (_product) {
        this.selectedproducts.splice(this.selectedproducts.lastIndexOf(_product), 1);
        this.result.ProductsList.forEach(function (elementin) {
            if (elementin.ProductID === _product.ProductID &&
                elementin.IsSelected === true) {
                elementin.IsSelected = false;
            }
        });
        this.kindslength = this.selectedproducts.length;
    };
    SalespointscreenComponent.prototype.DeleteKinds = function () {
        var _this = this;
        this.selectedproducts.forEach(function (element) {
            element.IsSelected = false;
            element.DisabledUnits = false;
            _this.getAllProductsInStore(parseInt(_this.StoreFrom.nativeElement.value, 10)).forEach(function (elementstock) {
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
        this._notifierService.notify('success', ' تم تفريغ الفاتورة بنجاح يمكنك اضافة اصناف للفاتورة الان ');
        this.modalRef.hide();
        this.kindslength = this.selectedproducts.length;
    };
    SalespointscreenComponent.prototype.openDeleteModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalespointscreenComponent.prototype.goToEditKind = function (_product) {
        this._router.navigate(['editkind', _product.ProductID]);
    };
    SalespointscreenComponent.prototype.getAllProductsInStore = function (_storeID) {
        var _this = this;
        this._listproductsinstoreService
            .listproductsinstore(_storeID)
            .subscribe(function (_result) {
            _this.result.ProductsList = _result.ProductsList;
        });
        return this.result.ProductsList;
    };
    SalespointscreenComponent.prototype.getAllProductUnitsById = function (_productID) {
        var _this = this;
        this._listproductunitsbyidService
            .GetProductUnites(_productID)
            .subscribe(function (_result) {
            _this.resultunits.UnitsList = _result.UnitsList;
        });
        return this.resultunits.UnitsList;
    };
    SalespointscreenComponent.prototype.getStockTotalBySelectedUnit = function (_product, _unit) {
        _product.Stock = _product.Stock * _unit.ChangeNum;
        _product.DisabledUnits = true;
    };
    SalespointscreenComponent.prototype.getAllActiveSalesPoints = function () {
        var _this = this;
        this._listsalespointsService
            .ListAllSalesPoints()
            .subscribe(function (_result) {
            _this.activeSalesPoints = _result.SalesPointsList;
        });
    };
    SalespointscreenComponent.prototype.AddProductSaleMain = function (_productSaleMainTableModel, _formGroup) {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var _InvoiceItems = new Array();
        this.selectedproducts.forEach(function (element) {
            // tslint:disable-next-line:prefer-const
            var _invoiceItem = new productsales_1.ProductSaleTableModel();
            element.ProductUnits.forEach(function (unit) {
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
        var productSaleMainTableModel = {
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
            .subscribe(function (_result) {
            _this.resultaddproductbuy = _result;
            if (_this.resultaddproductbuy.Status === true) {
                _this.CreateActivityRecordDebits();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.resultaddproductbuy.Message);
                _this.PrintResetInvoice();
                _this.ngOnInit();
                _this.selectedproducts = [];
                _formGroup.reset();
                _this.addProductSaleMain.StoreID = 0;
                _this.addProductSaleMain.EmpID = 0;
                _this.addProductSaleMain.CustomerID = 0;
                _this.getAllProductsInStore(parseInt(_this.StoreFrom.nativeElement.value, 10));
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _this.resultaddproductbuy.Message);
            }
        });
    };
    SalespointscreenComponent.prototype.CashPaid = function () {
        this.addProductBuySettings = { PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true };
        this.addProductSaleMain.InvTypeID = 1;
    };
    SalespointscreenComponent.prototype.OnAccountPaid = function () {
        this.addProductBuySettings = { PayedMoneyEnabled: true, SalesPointEnabled: true, DefaultPaid: false };
        this.addProductSaleMain.SalesPointID = 0;
        this.addProductSaleMain.TotalPayed = 0;
        this.addProductSaleMain.InvTypeID = 2;
    };
    SalespointscreenComponent.prototype.GetTotalAmount = function () {
        var InvoiceTotal = 0;
        this.selectedproducts.forEach(function (element) {
            InvoiceTotal += element.Price * element.Num;
        });
        this.addProductSaleMain.Total = InvoiceTotal;
        return this.GetTotal(InvoiceTotal);
    };
    SalespointscreenComponent.prototype.GetTotal = function (InvoiceTotal) {
        var TotalDiscount = InvoiceTotal - this.addProductSaleMain.DiscLE + this.addProductSaleMain.Addtions;
        this.addProductSaleMain.Net = InvoiceTotal;
        return TotalDiscount;
    };
    SalespointscreenComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalespointscreenComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    SalespointscreenComponent.prototype.ToggleMenu = function () {
        this.hiddenref = !this.hiddenref;
        $('.menu-toggle').toggleClass('open');
        $('#slideme').fadeToggle('slow');
    };
    SalespointscreenComponent.prototype.CloseMenu = function () {
        this.hiddenref = !this.hiddenref;
        $('.menu-toggle').toggleClass('open');
        $('#slideme').fadeToggle('slow');
    };
    SalespointscreenComponent.prototype.PrintResetInvoice = function () {
        var cssText = "\n  article, aside , details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n    display: block;\n  }\n  .text-left {\n    text-align: left;\n  }\n  .text-right {\n    text-align: right;\n  }\n  .text-center {\n    text-align: center;\n  }\n  hr{\n    width:100%;\n    height:0px;\n    border: 1px solid #000;\n  }\n\n.table {\nwidth: 100%;\nmax-width: 100%;\n}\ntable {\nbackground-color: transparent;\n}\ntable {\nborder-spacing: 0;\nborder-collapse: collapse;\n}\ntable thead {\nbackground-color: #f2f2f2 !important;\n-webkit-print-color-adjust: exact;\n}\ntbody {\ndisplay: table-row-group;\nvertical-align: middle;\nborder-color: inherit;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\nbackground-color: #f9f9f9;\n}\n.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\nborder: 1px solid #ddd;\n}\n.table > thead > tr > th, .table > tbody > tr > th,\n.table > tfoot > tr > th, .table > thead > tr > td,\n.table > tbody > tr > td, .table > tfoot > tr > td {\nline-height: 1.42857143;\nvertical-align: top;\nborder-top: 1px solid #ddd;\n}\n.btn {\ndisplay: none;\n}\n\n#resetbox{\n  border: solid 1px #000;\n  border-radius: 5px;\n  padding: 5px;\nfont-size: 11px !important;\nwidth: 8cm;\ndirection: rtl;\n}\n#resetbox .table{\n  margin-bottom: 0px !important;\n}\n.invoicetitle{\n  border: dotted 1px #000;\n  border-radius: 5px;\n  padding: 5px;\n}\n.cashirinfo tr{\n  width: 100%;\n}\n.invoicekinds {\n  width:100%;\n}\n.invoicesummary{\n  width: 100%;\n}\n\n";
        var d = new printd_1.default();
        d.print(document.getElementById('body-content'), cssText);
    };
    SalespointscreenComponent.prototype.CreateActivityRecordDebits = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = ' فاتورة بيع';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this.addProductSaleMain.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SalespointscreenComponent.prototype, "closed", void 0);
    __decorate([
        core_1.ViewChild('StoreFromRef'),
        __metadata("design:type", core_1.ElementRef)
    ], SalespointscreenComponent.prototype, "StoreFrom", void 0);
    SalespointscreenComponent = __decorate([
        core_1.Component({
            selector: 'app-salespointscreen',
            templateUrl: './salespointscreen.component.html',
            styleUrls: ['./salespointscreen.component.css']
        }),
        __metadata("design:paramtypes", [Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            router_1.Router,
            apiurl_service_1.ApiurlService,
            appsettings_service_1.AppsettingsService,
            ngx_bootstrap_1.BsModalService,
            listsalespoints_service_1.ListsalespointsService,
            currentsalespointmacs_service_1.CurrentsalespointmacsService,
            listproducts_service_1.ListproductsService,
            liststores_service_1.ListstoresService,
            angular_notifier_1.NotifierService,
            listproductsinstore_service_1.ListproductsinstoreService,
            router_1.Router,
            listproductunitsbyid_service_1.ListproductunitsbyidService,
            addproductbalancemain_service_1.AddproductbalancemainService,
            listcustomers_service_1.ListcustomersService,
            listemployees_service_1.ListemployeesService,
            addproductsalemain_service_1.AddproducsalemainService,
            createactivity_service_1.CreateactivityService,
            router_1.ActivatedRoute])
    ], SalespointscreenComponent);
    return SalespointscreenComponent;
}());
exports.SalespointscreenComponent = SalespointscreenComponent;
//# sourceMappingURL=salespointscreen.component.js.map