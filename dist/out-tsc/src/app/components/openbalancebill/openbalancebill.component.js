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
var addproductbalancemain_service_1 = require("./../../services/productopeningbalance/addproductbalancemain.service");
var transferkinds_1 = require("./../../models/transferkinds");
var listproductunitsbyid_service_1 = require("./../../services/transferkinds/listproductunitsbyid.service");
var listproducts_service_1 = require("./../../services/products/listproducts.service");
var core_1 = require("@angular/core");
var products_1 = require("../../models/products");
var liststores_service_1 = require("../../services/stores/liststores.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var listproductsinstore_service_1 = require("../../services/products/listproductsinstore.service");
var Oauthenticatedsession_Service_1 = require("../../services/general/Oauthenticatedsession.Service");
var productopenningbalance_1 = require("../../models/productopenningbalance");
var OpenbalancebillComponent = /** @class */ (function () {
    function OpenbalancebillComponent(_listproductsService, _liststoresService, _notifierService, _modalService, _listproductsinstoreService, _router, _listproductunitsbyidService, _addproductbalancemainService, _OauthenticatedsessionServiceService) {
        this._listproductsService = _listproductsService;
        this._liststoresService = _liststoresService;
        this._notifierService = _notifierService;
        this._modalService = _modalService;
        this._listproductsinstoreService = _listproductsinstoreService;
        this._router = _router;
        this._listproductunitsbyidService = _listproductunitsbyidService;
        this._addproductbalancemainService = _addproductbalancemainService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this.scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
        this.result = {
            Status: false,
            Message: '',
            ProductsList: [],
            SelectedProduct: new products_1.ProductBasicModel()
        };
        this.resultunits = new transferkinds_1.ResultUnits();
        this.selectedproducts = [];
        this.productName = '';
        this.modalService = _modalService;
        this.StoreIDFrom = 0;
    }
    OpenbalancebillComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
        this.getAllStores();
    };
    OpenbalancebillComponent.prototype.getAllProducts = function () {
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
    OpenbalancebillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    OpenbalancebillComponent.prototype.SelectRow = function (_product) {
        var _this = this;
        this._listproductunitsbyidService.GetProductUnites(_product.ProductID).subscribe(function (_result) {
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
    OpenbalancebillComponent.prototype.DeleteKind = function (_product) {
        this.selectedproducts.splice(this.selectedproducts.lastIndexOf(_product), 1);
        this.result.ProductsList.forEach(function (elementin) {
            if (elementin.ProductID == _product.ProductID && elementin.IsSelected === true) {
                elementin.IsSelected = false;
            }
        });
    };
    OpenbalancebillComponent.prototype.DeleteKinds = function () {
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
    OpenbalancebillComponent.prototype.openDeleteModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    OpenbalancebillComponent.prototype.openCalculatorModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    OpenbalancebillComponent.prototype.goToEditKind = function (_product) {
        this._router.navigate(['editkind', _product.ProductID]);
    };
    OpenbalancebillComponent.prototype.getAllProductsInStore = function (_storeID) {
        var _this = this;
        this._listproductsinstoreService.listproductsinstore(_storeID).subscribe(function (_result) {
            _this.result.ProductsList = _result.ProductsList;
        });
        return this.result.ProductsList;
    };
    OpenbalancebillComponent.prototype.getAllProductUnitsById = function (_productID) {
        var _this = this;
        this._listproductunitsbyidService.GetProductUnites(_productID).subscribe(function (_result) {
            _this.resultunits.UnitsList = _result.UnitsList;
        });
        return this.resultunits.UnitsList;
    };
    OpenbalancebillComponent.prototype.getStockTotalBySelectedUnit = function (_product, _unit) {
        _product.Stock = _product.Stock * _unit.ChangeNum;
        _product.DisabledUnits = true;
    };
    OpenbalancebillComponent.prototype.AddProductOpeningBalanceMain = function (_storeID) {
        var _this = this;
        var _productOpenningBalanceModel = new productopenningbalance_1.ProductOpenningBalanceModel();
        // tslint:disable-next-line:prefer-const
        var _InvoiceItems = new Array();
        this.selectedproducts.forEach(function (element) {
            // tslint:disable-next-line:prefer-const
            var _invoiceItem = new productopenningbalance_1.ProductOpenningBalanceItemsModel();
            element.ProductUnits.forEach(function (unit) {
                if (unit.UnitID == element.UnitID) {
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
            .subscribe(function (_result) {
            _this.resultOpenningBalance = _result;
            if (_this.resultOpenningBalance.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _this.resultOpenningBalance.Message);
                _this.ngOnInit();
                _this.selectedproducts = [];
                _this.getAllProductsInStore(parseInt(_this.StoreFrom.nativeElement.value, 10));
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _this.resultOpenningBalance.Message);
            }
        });
    };
    OpenbalancebillComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    OpenbalancebillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('StoreFromRef'),
        __metadata("design:type", core_1.ElementRef)
    ], OpenbalancebillComponent.prototype, "StoreFrom", void 0);
    OpenbalancebillComponent = __decorate([
        core_1.Component({
            selector: 'app-openbalancebill',
            templateUrl: './openbalancebill.component.html',
            styleUrls: ['./openbalancebill.component.css']
        }),
        __metadata("design:paramtypes", [listproducts_service_1.ListproductsService,
            liststores_service_1.ListstoresService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            listproductsinstore_service_1.ListproductsinstoreService,
            router_1.Router,
            listproductunitsbyid_service_1.ListproductunitsbyidService,
            addproductbalancemain_service_1.AddproductbalancemainService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService])
    ], OpenbalancebillComponent);
    return OpenbalancebillComponent;
}());
exports.OpenbalancebillComponent = OpenbalancebillComponent;
//# sourceMappingURL=openbalancebill.component.js.map