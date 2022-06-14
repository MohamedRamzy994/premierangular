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
var listproducts_service_1 = require("src/app/services/products/listproducts.service");
var products_1 = require("src/app/models/products");
var listproductunitsbyid_service_1 = require("src/app/services/transferkinds/listproductunitsbyid.service");
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var listsuppliers_service_1 = require("src/app/services/suppliers/listsuppliers.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_notifier_1 = require("angular-notifier");
var listproductsinstore_service_1 = require("src/app/services/products/listproductsinstore.service");
var router_1 = require("@angular/router");
var addproductbalancemain_service_1 = require("src/app/services/productopeningbalance/addproductbalancemain.service");
var Oauthenticatedsession_Service_1 = require("src/app/services/general/Oauthenticatedsession.Service");
var listsalespoints_service_1 = require("src/app/services/salespoints/listsalespoints.service");
var productbuy_1 = require("../../models/productbuy");
var addproductbuymain_service_1 = require("./../../services/productbuy/addproductbuymain.service");
var notificationsactivities_1 = require("src/app/models/notificationsactivities");
var createactivity_service_1 = require("src/app/services/notificationsactivities/createactivity.service");
var PurchasebillComponent = /** @class */ (function () {
    function PurchasebillComponent(_listproductsService, _liststoresService, _notifierService, _modalService, _listproductsinstoreService, _router, _listproductunitsbyidService, _addproductbalancemainService, _OauthenticatedsessionServiceService, _listsuppliersService, _listsalespointsService, _addproducbuymainService, _createactivityService) {
        this._listproductsService = _listproductsService;
        this._liststoresService = _liststoresService;
        this._notifierService = _notifierService;
        this._modalService = _modalService;
        this._listproductsinstoreService = _listproductsinstoreService;
        this._router = _router;
        this._listproductunitsbyidService = _listproductunitsbyidService;
        this._addproductbalancemainService = _addproductbalancemainService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this._listsuppliersService = _listsuppliersService;
        this._listsalespointsService = _listsalespointsService;
        this._addproducbuymainService = _addproducbuymainService;
        this._createactivityService = _createactivityService;
        this.scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
        this.result = {
            Status: false,
            Message: '',
            ProductsList: [],
            SelectedProduct: new products_1.ProductBasicModel()
        };
        this.addActivityModel = new notificationsactivities_1.AddActivityModel();
        this.productName = '';
        this.selectedproducts = [];
        this.modalService = _modalService;
        this.Suppliers = [];
        this.activeSalesPoints = [];
        this.addProductBuyMain = new productbuy_1.ProductBuyMainTableModel();
        this.addProductBuyMain.StoreID = 0;
        this.addProductBuyMain.DiscountCash = 0;
        this.addProductBuySettings = { PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true };
    }
    PurchasebillComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
        this.getAllStores();
        this.getAllSuppliers();
        this.getAllActiveSalesPoints();
        this.addProductBuyMain.StoreID = 0;
    };
    PurchasebillComponent.prototype.getAllProducts = function () {
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
    PurchasebillComponent.prototype.SelectRow = function (_product) {
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
    PurchasebillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    PurchasebillComponent.prototype.getAllSuppliers = function () {
        var _this = this;
        this._listsuppliersService
            .ListSuppliers()
            .subscribe(function (_result) {
            _this.Suppliers = _result.SuppliersList;
        });
    };
    PurchasebillComponent.prototype.DeleteKind = function (_product) {
        this.selectedproducts.splice(this.selectedproducts.lastIndexOf(_product), 1);
        this.result.ProductsList.forEach(function (elementin) {
            if (elementin.ProductID === _product.ProductID &&
                elementin.IsSelected === true) {
                elementin.IsSelected = false;
            }
        });
    };
    PurchasebillComponent.prototype.DeleteKinds = function () {
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
    PurchasebillComponent.prototype.openDeleteModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    PurchasebillComponent.prototype.openCalculatorModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    PurchasebillComponent.prototype.goToEditKind = function (_product) {
        this._router.navigate(['editkind', _product.ProductID]);
    };
    PurchasebillComponent.prototype.getAllProductsInStore = function (_storeID) {
        var _this = this;
        this._listproductsinstoreService
            .listproductsinstore(_storeID)
            .subscribe(function (_result) {
            _this.result.ProductsList = _result.ProductsList;
        });
        return this.result.ProductsList;
    };
    PurchasebillComponent.prototype.getAllProductUnitsById = function (_productID) {
        var _this = this;
        this._listproductunitsbyidService
            .GetProductUnites(_productID)
            .subscribe(function (_result) {
            _this.resultunits.UnitsList = _result.UnitsList;
        });
        return this.resultunits.UnitsList;
    };
    PurchasebillComponent.prototype.getStockTotalBySelectedUnit = function (_product, _unit) {
        _product.Stock = _product.Stock * _unit.ChangeNum;
        _product.DisabledUnits = true;
    };
    PurchasebillComponent.prototype.getAllActiveSalesPoints = function () {
        var _this = this;
        this._listsalespointsService
            .ListAllSalesPoints()
            .subscribe(function (_result) {
            _this.activeSalesPoints = _result.SalesPointsList;
        });
    };
    PurchasebillComponent.prototype.AddProductBuyMain = function (_productBuyMainTableModel, _formGroup) {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var _InvoiceItems = new Array();
        this.selectedproducts.forEach(function (element) {
            // tslint:disable-next-line:prefer-const
            var _invoiceItem = new productbuy_1.ProductBuyTableModel();
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
        var productBuyMainTableModel = {
            UserID: this._OauthenticatedsessionServiceService.User.UserId,
            StoreID: _productBuyMainTableModel.StoreID,
            SelectedProducts: _InvoiceItems,
            SupplierID: _productBuyMainTableModel.SupplierID,
            Total: _productBuyMainTableModel.Total,
            PayedMoney: _productBuyMainTableModel.PayedMoney,
            DiscountCash: _productBuyMainTableModel.DiscountCash,
            SalesPointID: _productBuyMainTableModel.SalesPointID
        };
        console.log(productBuyMainTableModel);
        this._addproducbuymainService
            .addProductBuyAddMain(productBuyMainTableModel)
            .subscribe(function (_result) {
            _this.resultaddproductbuy = _result;
            if (_this.resultaddproductbuy.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.resultaddproductbuy.Message);
                _this.CreateActivityRecord();
                _this.ngOnInit();
                _this.selectedproducts = [];
                _formGroup.reset();
                _this.addProductBuyMain.StoreID = 0;
                _this.getAllProductsInStore(parseInt(_this.StoreFrom.nativeElement.value, 10));
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _this.resultaddproductbuy.Message);
            }
        });
    };
    PurchasebillComponent.prototype.CashPaid = function () {
        this.addProductBuySettings = { PayedMoneyEnabled: false, SalesPointEnabled: false, DefaultPaid: true };
    };
    PurchasebillComponent.prototype.OnAccountPaid = function () {
        this.addProductBuySettings = { PayedMoneyEnabled: true, SalesPointEnabled: true, DefaultPaid: false };
        // this.addProductBuyMain.SalesPointID = 0 ;
        // this.addProductBuyMain.PayedMoney = 0 ;
    };
    PurchasebillComponent.prototype.GetTotalAmount = function () {
        var InvoiceTotal = 0;
        this.selectedproducts.forEach(function (element) {
            InvoiceTotal += element.Price * element.Num;
        });
        this.addProductBuyMain.Total = InvoiceTotal;
        this.GetTotal(InvoiceTotal);
        return InvoiceTotal;
    };
    PurchasebillComponent.prototype.GetTotal = function (InvoiceTotal) {
        var TotalDiscount = InvoiceTotal - this.addProductBuyMain.DiscountCash;
        return TotalDiscount;
    };
    PurchasebillComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    PurchasebillComponent.prototype.CreateActivityRecord = function () {
        var _this = this;
        this.addActivityModel.DateSubmit = new Date();
        this.addActivityModel.Read = true;
        this.addActivityModel.Type = 'فاتورة شراء';
        this.addActivityModel.UserID = this._OauthenticatedsessionServiceService.User.UserId;
        this.addActivityModel.POS = this.addProductBuyMain.SalesPointID;
        this._createactivityService.CreateActivityRecord(this.addActivityModel).subscribe(function (_resultactivity) {
            _this._notifierService.notify('success', _resultactivity.Message);
        });
    };
    PurchasebillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('StoreFromRef'),
        __metadata("design:type", core_1.ElementRef)
    ], PurchasebillComponent.prototype, "StoreFrom", void 0);
    PurchasebillComponent = __decorate([
        core_1.Component({
            selector: 'app-purchasebill',
            templateUrl: './purchasebill.component.html',
            styleUrls: ['./purchasebill.component.css']
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
            listsuppliers_service_1.ListsuppliersService,
            listsalespoints_service_1.ListsalespointsService,
            addproductbuymain_service_1.AddproducbuymainService,
            createactivity_service_1.CreateactivityService])
    ], PurchasebillComponent);
    return PurchasebillComponent;
}());
exports.PurchasebillComponent = PurchasebillComponent;
//# sourceMappingURL=purchasebill.component.js.map