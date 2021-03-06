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
var addtransferkindmain_service_1 = require("./../../services/transferkinds/addtransferkindmain.service");
var transferkinds_1 = require("./../../models/transferkinds");
var transferkinds_2 = require("./../../models/transferkinds");
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
var transferkinds_3 = require("../../models/transferkinds");
var TranskindbalanceComponent = /** @class */ (function () {
    function TranskindbalanceComponent(_listproductsService, _liststoresService, _notifierService, _modalService, _listproductsinstoreService, _router, _listproductunitsbyidService, _addtransferkindmainService, _OauthenticatedsessionServiceService) {
        this._listproductsService = _listproductsService;
        this._liststoresService = _liststoresService;
        this._notifierService = _notifierService;
        this._modalService = _modalService;
        this._listproductsinstoreService = _listproductsinstoreService;
        this._router = _router;
        this._listproductunitsbyidService = _listproductunitsbyidService;
        this._addtransferkindmainService = _addtransferkindmainService;
        this._OauthenticatedsessionServiceService = _OauthenticatedsessionServiceService;
        this.scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
        this.result = {
            Status: false,
            Message: '',
            ProductsList: [],
            SelectedProduct: new products_1.ProductBasicModel()
        };
        this.resultunits = new transferkinds_2.ResultUnits();
        this.selectedproducts = [];
        this.productName = '';
        this.modalService = _modalService;
        this.StoreIDFrom = 0;
        this.StoreIDTo = 0;
    }
    TranskindbalanceComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
        this.getAllStores();
    };
    TranskindbalanceComponent.prototype.getAllProducts = function () {
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
    TranskindbalanceComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    TranskindbalanceComponent.prototype.SelectRow = function (_product) {
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
    TranskindbalanceComponent.prototype.DeleteKind = function (_product) {
        this.selectedproducts.splice(this.selectedproducts.lastIndexOf(_product), 1);
        this.result.ProductsList.forEach(function (elementin) {
            if (elementin.ProductID == _product.ProductID && elementin.IsSelected === true) {
                elementin.IsSelected = false;
            }
        });
    };
    TranskindbalanceComponent.prototype.DeleteKinds = function () {
        var _this = this;
        if (this.selectedproducts.length == 0) {
            this._notifierService.notify('error', '    ???? ?????? ?????????? ?????????? ????????????????  ?????????? ?????????? ?????????? ???????????????? ???????? ');
            this.modalRef.hide();
            return;
        }
        this.selectedproducts.forEach(function (element) {
            element.IsSelected = false;
            element.DisabledUnits = false;
            _this.getAllProductsInStore(parseInt(_this.StoreFrom.nativeElement.value, 10)).forEach(function (elementstock) {
                element.Stock = elementstock.Stock;
            });
        });
        this.selectedproducts.splice(0);
        this._notifierService.notify('success', ' ???? ?????????? ???????????????? ?????????? ?????????? ?????????? ?????????? ???????????????? ???????? ');
        this.modalRef.hide();
    };
    TranskindbalanceComponent.prototype.openDeleteModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    TranskindbalanceComponent.prototype.openSaveModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    TranskindbalanceComponent.prototype.openCalculatorModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    TranskindbalanceComponent.prototype.goToEditKind = function (_product) {
        this._router.navigate(['editkind', _product.ProductID]);
    };
    TranskindbalanceComponent.prototype.getAllProductsInStore = function (_storeID) {
        var _this = this;
        this._listproductsinstoreService.listproductsinstore(_storeID).subscribe(function (_result) {
            _this.result.ProductsList = _result.ProductsList;
        });
        return this.result.ProductsList;
    };
    TranskindbalanceComponent.prototype.getAllProductUnitsById = function (_productID) {
        var _this = this;
        this._listproductunitsbyidService.GetProductUnites(_productID).subscribe(function (_result) {
            _this.resultunits.UnitsList = _result.UnitsList;
        });
        return this.resultunits.UnitsList;
    };
    TranskindbalanceComponent.prototype.getStockTotalBySelectedUnit = function (_product, _unit) {
        _product.Stock = _product.Stock * _unit.ChangeNum;
        _product.DisabledUnits = true;
    };
    TranskindbalanceComponent.prototype.AddTransferKindsMain = function (storeIDFrom, storeIDTo) {
        var _this = this;
        if (storeIDFrom == storeIDTo) {
            this._notifierService.notify('error', '???? ???????? ???? ???????? ?????? ?????? ?????????????? ?????? ?????? ????????????');
        }
        else {
            var _transferKindsModel = new transferkinds_1.TransferKindsModel();
            // tslint:disable-next-line:prefer-const
            var _InvoiceItems_1 = new Array();
            this.selectedproducts.forEach(function (element) {
                // tslint:disable-next-line:prefer-const
                var _invoiceItem = new transferkinds_3.ListTransferKindInvoiceItemModel();
                element.ProductUnits.forEach(function (unit) {
                    if (unit.UnitID == element.UnitID) {
                        element.ChangeNum = unit.ChangeNum;
                    }
                });
                _invoiceItem.UnitID = element.UnitID;
                _invoiceItem.Num = element.Num;
                _invoiceItem.ChangeNum = element.ChangeNum;
                _invoiceItem.ProductID = element.ProductID;
                _InvoiceItems_1.push(_invoiceItem);
            });
            _transferKindsModel = {
                UserID: this._OauthenticatedsessionServiceService.User.UserId,
                StoreIDFrom: storeIDFrom,
                StoreIDTo: storeIDTo,
                InvoiceItems: _InvoiceItems_1
            };
            this._addtransferkindmainService.addTransferKindMain(_transferKindsModel).subscribe(function (_result) {
                _this.resulttransfer = _result;
                if (_this.resulttransfer.Status === true) {
                    _this.modalRef.hide();
                    _this._notifierService.notify('success', _this.resulttransfer.Message);
                    _this.ngOnInit();
                    _this.selectedproducts = [];
                    _this.getAllProductsInStore(parseInt(_this.StoreFrom.nativeElement.value, 10));
                }
                else {
                    _this._notifierService.notify('error', _this.resulttransfer.Message);
                }
            });
        }
    };
    TranskindbalanceComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('StoreFromRef'),
        __metadata("design:type", core_1.ElementRef)
    ], TranskindbalanceComponent.prototype, "StoreFrom", void 0);
    TranskindbalanceComponent = __decorate([
        core_1.Component({
            selector: 'app-transkindbalance',
            templateUrl: './transkindbalance.component.html',
            styleUrls: ['./transkindbalance.component.css']
        }),
        __metadata("design:paramtypes", [listproducts_service_1.ListproductsService,
            liststores_service_1.ListstoresService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            listproductsinstore_service_1.ListproductsinstoreService,
            router_1.Router,
            listproductunitsbyid_service_1.ListproductunitsbyidService,
            addtransferkindmain_service_1.AddtransferkindmainService,
            Oauthenticatedsession_Service_1.OauthenticatedsessionService])
    ], TranskindbalanceComponent);
    return TranskindbalanceComponent;
}());
exports.TranskindbalanceComponent = TranskindbalanceComponent;
//# sourceMappingURL=transkindbalance.component.js.map