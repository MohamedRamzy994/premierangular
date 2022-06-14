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
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var listcustomers_service_1 = require("src/app/services/customers/listcustomers.service");
var productsales_1 = require("src/app/models/productsales");
var listproductsalediscardnotmaininvoices_service_1 = require("src/app/services/productsales/listproductsalediscardnotmaininvoices.service");
var OldsalebackwithoutbillComponent = /** @class */ (function () {
    function OldsalebackwithoutbillComponent(_listproductbuymaininvoicesService, _liststoresService, _listproductsalediscardnotmaininvoicesService, _listcustomersService, _notifierService, _router) {
        this._listproductbuymaininvoicesService = _listproductbuymaininvoicesService;
        this._liststoresService = _liststoresService;
        this._listproductsalediscardnotmaininvoicesService = _listproductsalediscardnotmaininvoicesService;
        this._listcustomersService = _listcustomersService;
        this._notifierService = _notifierService;
        this._router = _router;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductSaleDiscardMainInvoices = [];
        this.SelectedProductSaleDiscardMainInvoice = new productsales_1.ProductSaleDiscardSelectMainInvoices();
        this.SelectedProductSaleDiscardMainInvoice.DiscardID = 0;
        this.ProductStores = [];
        this.Customers = [];
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
    OldsalebackwithoutbillComponent.prototype.ngOnInit = function () {
        this.getAllProductSaleDiscardNotMainInvoices();
        this.getAllStores();
        this.getAllCustomers();
    };
    OldsalebackwithoutbillComponent.prototype.getAllProductSaleDiscardNotMainInvoices = function () {
        var _this = this;
        this._listproductsalediscardnotmaininvoicesService.listProductSaleDiscardNotMainInvoices()
            .subscribe(function (_result) {
            _this.AllProductSaleDiscardMainInvoices = _result.ProductSaleDiscardInvoices;
        });
    };
    OldsalebackwithoutbillComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    OldsalebackwithoutbillComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    OldsalebackwithoutbillComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductSaleDiscardMainInvoice = _invoicemain;
    };
    OldsalebackwithoutbillComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductSaleDiscardMainInvoice) {
            return false;
        }
        return this.SelectedProductSaleDiscardMainInvoice.DiscardID === _invoicemain.DiscardID ? true : false;
    };
    OldsalebackwithoutbillComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductSaleDiscardMainInvoice = new productsales_1.ProductSaleDiscardSelectMainInvoices();
        this.SelectedProductSaleDiscardMainInvoice.DiscardID = 0;
    };
    OldsalebackwithoutbillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    OldsalebackwithoutbillComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService.ListCustomers().subscribe(function (_result) {
            _this.Customers = _result.CustomersList;
        });
    };
    OldsalebackwithoutbillComponent.prototype.goToShowOldSaleBackBill = function () {
        if (this.SelectedProductSaleDiscardMainInvoice.DiscardID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');
        }
        else {
            this._router.navigate(['showoldsalebackwithoutbill', this.SelectedProductSaleDiscardMainInvoice.DiscardID]);
        }
    };
    OldsalebackwithoutbillComponent.prototype.GetSumTotal = function (From, To, StoreName, SupplierName) {
        var SumTotal = 0;
        if (From && To && StoreName && SupplierName) {
            this.AllProductSaleDiscardMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.CustomerName.startsWith(SupplierName)); }).forEach(function (element) {
                SumTotal += element.DiscardValue;
            });
            return SumTotal;
        }
        else if (From && To && StoreName) {
            this.AllProductSaleDiscardMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.DiscardValue;
            });
            return SumTotal;
        }
        else if (From && To) {
            this.AllProductSaleDiscardMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.DiscardValue;
            });
            return SumTotal;
        }
        else {
            return SumTotal;
        }
    };
    OldsalebackwithoutbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    OldsalebackwithoutbillComponent = __decorate([
        core_1.Component({
            selector: 'app-oldsalebackwithoutbill',
            templateUrl: './oldsalebackwithoutbill.component.html',
            styleUrls: ['./oldsalebackwithoutbill.component.css']
        }),
        __metadata("design:paramtypes", [listproductbuymaininvoices_service_1.ListproductbuymaininvoicesService,
            liststores_service_1.ListstoresService,
            listproductsalediscardnotmaininvoices_service_1.ListproductsalediscardnotmaininvoicesService,
            listcustomers_service_1.ListcustomersService,
            angular_notifier_1.NotifierService,
            router_1.Router])
    ], OldsalebackwithoutbillComponent);
    return OldsalebackwithoutbillComponent;
}());
exports.OldsalebackwithoutbillComponent = OldsalebackwithoutbillComponent;
//# sourceMappingURL=oldsalebackwithoutbill.component.js.map