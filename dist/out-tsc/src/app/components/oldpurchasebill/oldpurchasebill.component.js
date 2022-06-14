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
var listproductbuymaininvoices_service_1 = require("src/app/services/productbuy/listproductbuymaininvoices.service");
var productbuy_1 = require("./../../models/productbuy");
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var listsuppliers_service_1 = require("src/app/services/suppliers/listsuppliers.service");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var OldpurchasebillComponent = /** @class */ (function () {
    function OldpurchasebillComponent(_listproductbuymaininvoicesService, _liststoresService, _listsuppliersService, _notifierService, _router) {
        this._listproductbuymaininvoicesService = _listproductbuymaininvoicesService;
        this._liststoresService = _liststoresService;
        this._listsuppliersService = _listsuppliersService;
        this._notifierService = _notifierService;
        this._router = _router;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductBuyMainInvoices = [];
        this.SelectedProductBuyMainInvoice = new productbuy_1.ProductBuySelectMainInvoices();
        this.SelectedProductBuyMainInvoice.InvoiceID = 0;
        this.ProductStores = [];
        this.Suppliers = [];
        this.UserName = '';
        this.DateFromObject = {
            'date': {
                'year': 2000,
                'month': 1,
                'day': 1
            },
            'jsdate': '2000-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2018'
        };
        this.DateToObject = {
            'date': {
                'year': 2030,
                'month': 1,
                'day': 1
            },
            'jsdate': '2030-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2030'
        };
        this.DateFrom = this.DateFromObject.jsdate;
        this.DateTo = this.DateToObject.jsdate;
        this.StoreName = '';
        this.SupplierName = '';
        this.InvoiceID = '';
    }
    OldpurchasebillComponent.prototype.ngOnInit = function () {
        this.getAllProductBuyMainInvoices();
        this.getAllStores();
        this.getAllSuppliers();
    };
    OldpurchasebillComponent.prototype.getAllProductBuyMainInvoices = function () {
        var _this = this;
        this._listproductbuymaininvoicesService.listProductBuyMainInvoices().subscribe(function (_result) {
            _this.AllProductBuyMainInvoices = _result.ProductBuyInvoices;
        });
    };
    OldpurchasebillComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    OldpurchasebillComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    OldpurchasebillComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductBuyMainInvoice = _invoicemain;
    };
    OldpurchasebillComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductBuyMainInvoice) {
            return false;
        }
        return this.SelectedProductBuyMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;
    };
    OldpurchasebillComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductBuyMainInvoice = new productbuy_1.ProductBuySelectMainInvoices();
    };
    OldpurchasebillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    OldpurchasebillComponent.prototype.getAllSuppliers = function () {
        var _this = this;
        this._listsuppliersService.ListSuppliers().subscribe(function (_result) {
            _this.Suppliers = _result.SuppliersList;
        });
    };
    OldpurchasebillComponent.prototype.goToShowPurchaseBill = function () {
        if (this.SelectedProductBuyMainInvoice.InvoiceID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');
        }
        else {
            this._router.navigate(['showpurchasebill', this.SelectedProductBuyMainInvoice.InvoiceID]);
        }
    };
    OldpurchasebillComponent.prototype.GetSumTotal = function (From, To, StoreName, SupplierName) {
        var SumTotal = 0;
        if (From && To && StoreName && SupplierName) {
            this.AllProductBuyMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.SupplierName.startsWith(SupplierName)); }).forEach(function (element) {
                SumTotal += element.Total;
            });
            return SumTotal;
        }
        else if (From && To && StoreName) {
            this.AllProductBuyMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Total;
            });
            return SumTotal;
        }
        else if (From && To) {
            this.AllProductBuyMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Total;
            });
            return SumTotal;
        }
        else {
            return SumTotal;
        }
    };
    OldpurchasebillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    OldpurchasebillComponent = __decorate([
        core_1.Component({
            selector: 'app-oldpurchasebill',
            templateUrl: './oldpurchasebill.component.html',
            styleUrls: ['./oldpurchasebill.component.css']
        }),
        __metadata("design:paramtypes", [listproductbuymaininvoices_service_1.ListproductbuymaininvoicesService,
            liststores_service_1.ListstoresService,
            listsuppliers_service_1.ListsuppliersService,
            angular_notifier_1.NotifierService,
            router_1.Router])
    ], OldpurchasebillComponent);
    return OldpurchasebillComponent;
}());
exports.OldpurchasebillComponent = OldpurchasebillComponent;
//# sourceMappingURL=oldpurchasebill.component.js.map