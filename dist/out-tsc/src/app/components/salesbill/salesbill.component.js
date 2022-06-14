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
var createnotification_service_1 = require("./../../services/notificationsactivities/createnotification.service");
var notificationsactivities_1 = require("./../../models/notificationsactivities");
var createactivity_service_1 = require("./../../services/notificationsactivities/createactivity.service");
var core_1 = require("@angular/core");
var listproducts_service_1 = require("src/app/services/products/listproducts.service");
var products_1 = require("src/app/models/products");
var listproductunitsbyid_service_1 = require("src/app/services/transferkinds/listproductunitsbyid.service");
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_notifier_1 = require("angular-notifier");
var listproductsinstore_service_1 = require("src/app/services/products/listproductsinstore.service");
var router_1 = require("@angular/router");
var addproductbalancemain_service_1 = require("src/app/services/productopeningbalance/addproductbalancemain.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var listsalespoints_service_1 = require("src/app/services/salespoints/listsalespoints.service");
var listcustomers_service_1 = require("src/app/services/customers/listcustomers.service");
var listemployees_service_1 = require("../../services/employees/listemployees.service");
var productsales_1 = require("src/app/models/productsales");
var addproductsalemain_service_1 = require("src/app/services/productsales/addproductsalemain.service");
var SalesbillComponent = /** @class */ (function () {
    function SalesbillComponent(_listproductsService, _liststoresService, _notifierService, _modalService, _listproductsinstoreService, _router, _listproductunitsbyidService, _addproductbalancemainService, _OauthenticatedsessionServiceService, _listcustomersService, _listemployeesService, _listsalespointsService, _addproductsalemainService, _createactivityService, _createnotificationService) {
        this._listproductsService = _listproductsService;
        this._liststoresService = _liststoresService;
        this._notifierService = _notifierService;
        this._modalService = _modalService;
        this._listproductsinstoreService = _listproductsinstoreService;
        this._router = _router;
        this._listproductunitsbyidService = _listproductunitsbyidService;
        this._addproductbalancemainService = _addproductbalancemainService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._listcustomersService = _listcustomersService;
        this._listemployeesService = _listemployeesService;
        this._listsalespointsService = _listsalespointsService;
        this._addproductsalemainService = _addproductsalemainService;
        this._createactivityService = _createactivityService;
        this._createnotificationService = _createnotificationService;
        this.scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
        this.result = {
            Status: false,
            Message: '',
            ProductsList: [],
            SelectedProduct: new products_1.ProductBasicModel()
        };
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this.addNotificationModel = new notificationsactivities_1.AddNotificationModel();
        this.productName = '';
        this.selectedproducts = [];
        this.modalService = _modalService;
        this.Customers = [];
        this.Employees = [];
        this.activeSalesPoints = [];
        this.addProductSaleMain = new productsales_1.ProductSaleMainTableModel();
        this.addProductSaleMain.StoreID = 0;
        this.addProductSaleMain.Cash = 0;
        this.addProductSaleMain.Addtions = 0;
        this.addProductSaleMain.DiscLE = 0;
        this.addProductSaleMain.Total = 0;
        this.addProductSaleMain.Net = 0;
        this.addProductSaleMain.InvTypeID = 1;
        this.addProductSaleMain.Notes = '';
        this.addProductBuySettings = { PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true };
    }
    SalesbillComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
        this.getAllStores();
        this.getAllCustomers();
        this.getAllEmployees();
        this.getAllActiveSalesPoints();
    };
    SalesbillComponent.prototype.getAllProducts = function () {
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
    SalesbillComponent.prototype.SelectRow = function (_product) {
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
            console.log(_this.selectedproducts);
        });
    };
    SalesbillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    SalesbillComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService
            .ListCustomers()
            .subscribe(function (_result) {
            _this.Customers = _result.CustomersList;
        });
    };
    SalesbillComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this._listemployeesService
            .ListEmployees()
            .subscribe(function (_result) {
            _this.Employees = _result.EmployeesList;
        });
    };
    SalesbillComponent.prototype.DeleteKind = function (_product) {
        this.selectedproducts.splice(this.selectedproducts.lastIndexOf(_product), 1);
        this.result.ProductsList.forEach(function (elementin) {
            if (elementin.ProductID === _product.ProductID &&
                elementin.IsSelected === true) {
                elementin.IsSelected = false;
            }
        });
    };
    SalesbillComponent.prototype.DeleteKinds = function () {
        var _this = this;
        this.selectedproducts.forEach(function (element) {
            element.IsSelected = false;
            element.DisabledUnits = false;
            _this.getAllProductsInStore(parseInt(_this.StoreFrom.nativeElement.value, 10)).forEach(function (elementstock) {
                element.Stock = elementstock.Stock;
            });
        });
        this.selectedproducts.splice(0);
        this._notifierService.notify('success', ' تم تفريغ الفاتورة بنجاح يمكنك اضافة اصناف للفاتورة الان ');
        this.modalRef.hide();
    };
    SalesbillComponent.prototype.openDeleteModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalesbillComponent.prototype.openCalculatorModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalesbillComponent.prototype.goToEditKind = function (_product) {
        this._router.navigate(['editkind', _product.ProductID]);
    };
    SalesbillComponent.prototype.getAllProductsInStore = function (_storeID) {
        var _this = this;
        this._listproductsinstoreService
            .listproductsinstore(_storeID)
            .subscribe(function (_result) {
            _this.result.ProductsList = _result.ProductsList;
        });
        return this.result.ProductsList;
    };
    SalesbillComponent.prototype.getAllProductUnitsById = function (_productID) {
        var _this = this;
        this._listproductunitsbyidService
            .GetProductUnites(_productID)
            .subscribe(function (_result) {
            _this.resultunits.UnitsList = _result.UnitsList;
        });
        return this.resultunits.UnitsList;
    };
    SalesbillComponent.prototype.getStockTotalBySelectedUnit = function (_product, _unit) {
        _product.Stock = _product.Stock * _unit.ChangeNum;
        _product.DisabledUnits = true;
    };
    SalesbillComponent.prototype.getAllActiveSalesPoints = function () {
        var _this = this;
        this._listsalespointsService
            .ListAllSalesPoints()
            .subscribe(function (_result) {
            _this.activeSalesPoints = _result.SalesPointsList;
        });
    };
    SalesbillComponent.prototype.AddProductSaleMain = function (_productSaleMainTableModel, _formGroup) {
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
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.resultaddproductbuy.Message);
                _this.CreateActivityRecord();
                _this.ngOnInit();
                _this.selectedproducts = [];
                _formGroup.reset();
                _this.addProductSaleMain.StoreID = 0;
                _this.getAllProductsInStore(parseInt(_this.StoreFrom.nativeElement.value, 10));
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _this.resultaddproductbuy.Message);
            }
        });
    };
    SalesbillComponent.prototype.CashPaid = function () {
        this.addProductBuySettings = { PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true };
        this.addProductSaleMain.InvTypeID = 1;
    };
    SalesbillComponent.prototype.OnAccountPaid = function () {
        this.addProductBuySettings = { PayedMoneyEnabled: true, SalesPointEnabled: true, DefaultPaid: false };
        this.addProductSaleMain.SalesPointID = 0;
        this.addProductSaleMain.TotalPayed = 0;
        this.addProductSaleMain.InvTypeID = 2;
    };
    SalesbillComponent.prototype.GetTotalAmount = function () {
        var InvoiceTotal = 0;
        this.selectedproducts.forEach(function (element) {
            InvoiceTotal += element.Price * element.Num;
        });
        this.addProductSaleMain.Total = InvoiceTotal;
        return this.GetTotal(InvoiceTotal);
    };
    SalesbillComponent.prototype.GetTotal = function (InvoiceTotal) {
        var TotalDiscount = InvoiceTotal - this.addProductSaleMain.DiscLE + this.addProductSaleMain.Addtions;
        this.addProductSaleMain.Net = InvoiceTotal;
        return TotalDiscount;
    };
    SalesbillComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalesbillComponent.prototype.CreateActivityRecord = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = 'فاتورة بيع';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this.addProductSaleMain.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    SalesbillComponent.prototype.CreateNotificationRecord = function () {
        var _this = this;
        this.addNotificationModel.DateSubmit = new Date();
        this.addNotificationModel.Read = true;
        this.addNotificationModel.ProductID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addNotificationModel.StoreID = this.addProductSaleMain.SalesPointID;
        this._createnotificationService.CreateNotificationRecord(this.addNotificationModel)
            .subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    SalesbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('StoreFromRef'),
        __metadata("design:type", core_1.ElementRef)
    ], SalesbillComponent.prototype, "StoreFrom", void 0);
    SalesbillComponent = __decorate([
        core_1.Component({
            selector: 'app-salesbill',
            templateUrl: './salesbill.component.html',
            styleUrls: ['./salesbill.component.css']
        }),
        __metadata("design:paramtypes", [listproducts_service_1.ListproductsService,
            liststores_service_1.ListstoresService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            listproductsinstore_service_1.ListproductsinstoreService,
            router_1.Router,
            listproductunitsbyid_service_1.ListproductunitsbyidService,
            addproductbalancemain_service_1.AddproductbalancemainService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService,
            listcustomers_service_1.ListcustomersService,
            listemployees_service_1.ListemployeesService,
            listsalespoints_service_1.ListsalespointsService,
            addproductsalemain_service_1.AddproducsalemainService,
            createactivity_service_1.CreateactivityService,
            createnotification_service_1.CreatenotificationService])
    ], SalesbillComponent);
    return SalesbillComponent;
}());
exports.SalesbillComponent = SalesbillComponent;
//# sourceMappingURL=salesbill.component.js.map