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
var core_1 = require("@angular/core");
var products_1 = require("src/app/models/products");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var listproducts_service_1 = require("src/app/services/products/listproducts.service");
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var angular_notifier_1 = require("angular-notifier");
var listproductsinstore_service_1 = require("src/app/services/products/listproductsinstore.service");
var router_1 = require("@angular/router");
var listproductunitsbyid_service_1 = require("src/app/services/transferkinds/listproductunitsbyid.service");
var addproductbalancemain_service_1 = require("src/app/services/productopeningbalance/addproductbalancemain.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var listsalespoints_service_1 = require("src/app/services/salespoints/listsalespoints.service");
var addproductbuymain_service_1 = require("src/app/services/productbuy/addproductbuymain.service");
var addproductbuydiscardmainnotspecififed_service_1 = require("../../services/productbuy/addproductbuydiscardmainnotspecififed.service");
var listcustomers_service_1 = require("src/app/services/customers/listcustomers.service");
var listemployees_service_1 = require("src/app/services/employees/listemployees.service");
var productsales_1 = require("src/app/models/productsales");
var addproductsalediscardmainnotspecified_service_1 = require("src/app/services/productsales/addproductsalediscardmainnotspecified.service");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var SalebackwithoutbillComponent = /** @class */ (function () {
    function SalebackwithoutbillComponent(_listproductsService, _liststoresService, _notifierService, _modalService, _listproductsinstoreService, _router, _listproductunitsbyidService, _addproductbalancemainService, _OauthenticatedsessionServiceService, _listcustomersService, _listemployeeService, _listsalespointsService, _addproducbuymainService, _createactivityService, _addproductbuydiscardmainnotspecifiedService, _addproductsalediscardmainnotspecifiedService) {
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
        this._listemployeeService = _listemployeeService;
        this._listsalespointsService = _listsalespointsService;
        this._addproducbuymainService = _addproducbuymainService;
        this._createactivityService = _createactivityService;
        this._addproductbuydiscardmainnotspecifiedService = _addproductbuydiscardmainnotspecifiedService;
        this._addproductsalediscardmainnotspecifiedService = _addproductsalediscardmainnotspecifiedService;
        this.scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
        this.result = {
            Status: false,
            Message: '',
            ProductsList: [],
            SelectedProduct: new products_1.ProductBasicModel()
        };
        this.GetMoneyBack = false;
        this.productName = '';
        this.selectedproducts = [];
        this.modalService = _modalService;
        this.Customers = [];
        this.activeSalesPoints = [];
        this.addProductSaleMain = new productsales_1.ProductSaleMainTableModel();
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this.addProductSaleMain.StoreID = 0;
        this.addProductSaleMain.Total = 0;
        this.addProductBuySettings = { PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true };
    }
    SalebackwithoutbillComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
        this.getAllStores();
        this.getAllCustomers();
        this.getAllActiveSalesPoints();
        this.getAllEmployees();
    };
    SalebackwithoutbillComponent.prototype.getAllProducts = function () {
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
    SalebackwithoutbillComponent.prototype.SelectRow = function (_product) {
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
                UnitID: _result.UnitsList[0].UnitID
            };
            _product.IsSelected = !_product.IsSelected;
            _this.selectedproducts.push(transferkindinstance);
        });
    };
    SalebackwithoutbillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    SalebackwithoutbillComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService
            .ListCustomers()
            .subscribe(function (_result) {
            _this.Customers = _result.CustomersList;
        });
    };
    SalebackwithoutbillComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this._listemployeeService
            .ListEmployees()
            .subscribe(function (_result) {
            _this.Employees = _result.EmployeesList;
        });
    };
    SalebackwithoutbillComponent.prototype.DeleteKind = function (_product) {
        this.selectedproducts.splice(this.selectedproducts.lastIndexOf(_product), 1);
        this.result.ProductsList.forEach(function (elementin) {
            if (elementin.ProductID === _product.ProductID &&
                elementin.IsSelected === true) {
                elementin.IsSelected = false;
            }
        });
    };
    SalebackwithoutbillComponent.prototype.DeleteKinds = function () {
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
    SalebackwithoutbillComponent.prototype.openDeleteModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalebackwithoutbillComponent.prototype.openCalculatorModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalebackwithoutbillComponent.prototype.goToEditKind = function (_product) {
        this._router.navigate(['editkind', _product.ProductID]);
    };
    SalebackwithoutbillComponent.prototype.getAllProductsInStore = function (_storeID) {
        var _this = this;
        this._listproductsinstoreService
            .listproductsinstore(_storeID)
            .subscribe(function (_result) {
            _this.result.ProductsList = _result.ProductsList;
        });
        return this.result.ProductsList;
    };
    SalebackwithoutbillComponent.prototype.getAllProductUnitsById = function (_productID) {
        var _this = this;
        this._listproductunitsbyidService
            .GetProductUnites(_productID)
            .subscribe(function (_result) {
            _this.resultunits.UnitsList = _result.UnitsList;
        });
        return this.resultunits.UnitsList;
    };
    SalebackwithoutbillComponent.prototype.getStockTotalBySelectedUnit = function (_product, _unit) {
        _product.Stock = _product.Stock * _unit.ChangeNum;
        _product.DisabledUnits = true;
    };
    SalebackwithoutbillComponent.prototype.getAllActiveSalesPoints = function () {
        var _this = this;
        this._listsalespointsService
            .ListAllSalesPoints()
            .subscribe(function (_result) {
            _this.activeSalesPoints = _result.SalesPointsList;
        });
    };
    SalebackwithoutbillComponent.prototype.AddProductSaleDiscardMainNotSpecified = function (_productSaleMainTableModel, _formGroup) {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var _InvoiceItems = new Array();
        this.selectedproducts.forEach(function (element) {
            // tslint:disable-next-line:prefer-const
            var _invoiceItem = new productsales_1.ProductSaleDiscardMainNotSpecifiedItemsModel();
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
            _InvoiceItems.push(_invoiceItem);
        });
        var productSaleMainTableModel = {
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
    SalebackwithoutbillComponent.prototype.CashPaid = function () {
        this.addProductBuySettings = { PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true };
    };
    SalebackwithoutbillComponent.prototype.OnAccountPaid = function () {
        this.addProductBuySettings = { PayedMoneyEnabled: true, SalesPointEnabled: true, DefaultPaid: false };
        this.addProductSaleMain.SalesPointID = 0;
        this.addProductSaleMain.TotalPayed = 0;
    };
    SalebackwithoutbillComponent.prototype.GetTotalAmount = function () {
        var InvoiceTotal = 0;
        this.selectedproducts.forEach(function (element) {
            InvoiceTotal += element.Price * element.Num;
        });
        this.addProductSaleMain.Total = InvoiceTotal;
        this.GetTotal(InvoiceTotal);
        return InvoiceTotal;
    };
    SalebackwithoutbillComponent.prototype.GetTotal = function (InvoiceTotal) {
        var TotalDiscount = InvoiceTotal - this.addProductSaleMain.DiscLE;
        return TotalDiscount;
    };
    SalebackwithoutbillComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SalebackwithoutbillComponent.prototype.CreateActivityRecord = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = 'فاتورة مرتجع بيع';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = 1;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    SalebackwithoutbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('StoreFromRef'),
        __metadata("design:type", core_1.ElementRef)
    ], SalebackwithoutbillComponent.prototype, "StoreFrom", void 0);
    SalebackwithoutbillComponent = __decorate([
        core_1.Component({
            selector: 'app-salebackwithoutbill',
            templateUrl: './salebackwithoutbill.component.html',
            styleUrls: ['./salebackwithoutbill.component.css']
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
            addproductbuymain_service_1.AddproducbuymainService,
            createactivity_service_1.CreateactivityService,
            addproductbuydiscardmainnotspecififed_service_1.AddproductbuydiscardmainnotspecifiedService,
            addproductsalediscardmainnotspecified_service_1.AddproductsalediscardmainnotspecifiedService])
    ], SalebackwithoutbillComponent);
    return SalebackwithoutbillComponent;
}());
exports.SalebackwithoutbillComponent = SalebackwithoutbillComponent;
//# sourceMappingURL=salebackwithoutbill.component.js.map