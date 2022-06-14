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
var productbuy_1 = require("src/app/models/productbuy");
var listproductbuymaininvoices_service_1 = require("src/app/services/productbuy/listproductbuymaininvoices.service");
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var listsuppliers_service_1 = require("src/app/services/suppliers/listsuppliers.service");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var listproductbuydiscardnotmaininvoices_service_1 = require("src/app/services/productbuy/listproductbuydiscardnotmaininvoices.service");
var OldbuybackwithoutbillComponent = /** @class */ (function () {
    function OldbuybackwithoutbillComponent(_listproductbuymaininvoicesService, _liststoresService, _listproductbuydiscardmaininvoicesService, _listsuppliersService, _notifierService, _router) {
        this._listproductbuymaininvoicesService = _listproductbuymaininvoicesService;
        this._liststoresService = _liststoresService;
        this._listproductbuydiscardmaininvoicesService = _listproductbuydiscardmaininvoicesService;
        this._listsuppliersService = _listsuppliersService;
        this._notifierService = _notifierService;
        this._router = _router;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductBuyDiscardMainInvoices = [];
        this.SelectedProductBuyDiscardMainInvoice = new productbuy_1.ProductBuyDiscardSelectMainInvoices();
        this.SelectedProductBuyDiscardMainInvoice.DiscardID = 0;
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
    OldbuybackwithoutbillComponent.prototype.ngOnInit = function () {
        this.getAllProductBuyDiscardMainInvoices();
        this.getAllStores();
        this.getAllSuppliers();
    };
    OldbuybackwithoutbillComponent.prototype.getAllProductBuyDiscardMainInvoices = function () {
        var _this = this;
        this._listproductbuydiscardmaininvoicesService.listProductBuyDiscardMainInvoices()
            .subscribe(function (_result) {
            _this.AllProductBuyDiscardMainInvoices = _result.ProductBuyDiscardInvoices;
        });
    };
    OldbuybackwithoutbillComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    OldbuybackwithoutbillComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    OldbuybackwithoutbillComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductBuyDiscardMainInvoice = _invoicemain;
    };
    OldbuybackwithoutbillComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductBuyDiscardMainInvoice) {
            return false;
        }
        return this.SelectedProductBuyDiscardMainInvoice.DiscardID === _invoicemain.DiscardID ? true : false;
    };
    OldbuybackwithoutbillComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductBuyDiscardMainInvoice = new productbuy_1.ProductBuyDiscardSelectMainInvoices();
    };
    OldbuybackwithoutbillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    OldbuybackwithoutbillComponent.prototype.getAllSuppliers = function () {
        var _this = this;
        this._listsuppliersService.ListSuppliers().subscribe(function (_result) {
            _this.Suppliers = _result.SuppliersList;
        });
    };
    OldbuybackwithoutbillComponent.prototype.goToShowOldBuyBackBill = function () {
        if (this.SelectedProductBuyDiscardMainInvoice.DiscardID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');
        }
        else {
            this._router.navigate(['showoldbuybackwithoutbill', this.SelectedProductBuyDiscardMainInvoice.DiscardID]);
        }
    };
    OldbuybackwithoutbillComponent.prototype.GetSumTotal = function (From, To, StoreName, SupplierName) {
        var SumTotal = 0;
        if (From && To && StoreName && SupplierName) {
            this.AllProductBuyDiscardMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.SupplierName.startsWith(SupplierName)); }).forEach(function (element) {
                SumTotal += element.DiscardValue;
            });
            return SumTotal;
        }
        else if (From && To && StoreName) {
            this.AllProductBuyDiscardMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.DiscardValue;
            });
            return SumTotal;
        }
        else if (From && To) {
            this.AllProductBuyDiscardMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.DiscardValue;
            });
            return SumTotal;
        }
        else {
            return SumTotal;
        }
    };
    OldbuybackwithoutbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    OldbuybackwithoutbillComponent = __decorate([
        core_1.Component({
            selector: 'app-oldbuybackwithoutbill',
            templateUrl: './oldbuybackwithoutbill.component.html',
            styleUrls: ['./oldbuybackwithoutbill.component.css']
        }),
        __metadata("design:paramtypes", [listproductbuymaininvoices_service_1.ListproductbuymaininvoicesService,
            liststores_service_1.ListstoresService,
            listproductbuydiscardnotmaininvoices_service_1.ListproductbuydiscardnotmaininvoicesService,
            listsuppliers_service_1.ListsuppliersService,
            angular_notifier_1.NotifierService,
            router_1.Router])
    ], OldbuybackwithoutbillComponent);
    return OldbuybackwithoutbillComponent;
}());
exports.OldbuybackwithoutbillComponent = OldbuybackwithoutbillComponent;
//# sourceMappingURL=oldbuybackwithoutbill.component.js.map