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
var listproductsalediscardmaininvoices_service_1 = require("src/app/services/productsales/listproductsalediscardmaininvoices.service");
var productsales_1 = require("src/app/models/productsales");
var OldsalebackwithbillComponent = /** @class */ (function () {
    function OldsalebackwithbillComponent(_listproductbuymaininvoicesService, _liststoresService, _listproductsalediscardmaininvoicesService, _listcustomersService, _notifierService, _router) {
        this._listproductbuymaininvoicesService = _listproductbuymaininvoicesService;
        this._liststoresService = _liststoresService;
        this._listproductsalediscardmaininvoicesService = _listproductsalediscardmaininvoicesService;
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
    OldsalebackwithbillComponent.prototype.ngOnInit = function () {
        this.getAllProductSaleDiscardMainInvoices();
        this.getAllStores();
        this.getAllCustomers();
    };
    OldsalebackwithbillComponent.prototype.getAllProductSaleDiscardMainInvoices = function () {
        var _this = this;
        this._listproductsalediscardmaininvoicesService.listProductSaleDiscardMainInvoices()
            .subscribe(function (_result) {
            _this.AllProductSaleDiscardMainInvoices = _result.ProductSaleDiscardInvoices;
        });
    };
    OldsalebackwithbillComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    OldsalebackwithbillComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    OldsalebackwithbillComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductSaleDiscardMainInvoice = _invoicemain;
    };
    OldsalebackwithbillComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductSaleDiscardMainInvoice) {
            return false;
        }
        return this.SelectedProductSaleDiscardMainInvoice.DiscardID === _invoicemain.DiscardID ? true : false;
    };
    OldsalebackwithbillComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductSaleDiscardMainInvoice = new productsales_1.ProductSaleDiscardSelectMainInvoices();
        this.SelectedProductSaleDiscardMainInvoice.DiscardID = 0;
    };
    OldsalebackwithbillComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    OldsalebackwithbillComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService.ListCustomers().subscribe(function (_result) {
            _this.Customers = _result.CustomersList;
        });
    };
    OldsalebackwithbillComponent.prototype.goToShowOldSaleBackBill = function () {
        if (this.SelectedProductSaleDiscardMainInvoice.DiscardID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');
        }
        else {
            this._router.navigate(['showoldsalebackwithbill', this.SelectedProductSaleDiscardMainInvoice.DiscardID]);
        }
    };
    OldsalebackwithbillComponent.prototype.GetSumTotal = function (From, To, StoreName, SupplierName) {
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
    OldsalebackwithbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    OldsalebackwithbillComponent = __decorate([
        core_1.Component({
            selector: 'app-oldsalebackwithbill',
            templateUrl: './oldsalebackwithbill.component.html',
            styleUrls: ['./oldsalebackwithbill.component.css']
        }),
        __metadata("design:paramtypes", [listproductbuymaininvoices_service_1.ListproductbuymaininvoicesService,
            liststores_service_1.ListstoresService,
            listproductsalediscardmaininvoices_service_1.ListproductsalediscardmaininvoicesService,
            listcustomers_service_1.ListcustomersService,
            angular_notifier_1.NotifierService,
            router_1.Router])
    ], OldsalebackwithbillComponent);
    return OldsalebackwithbillComponent;
}());
exports.OldsalebackwithbillComponent = OldsalebackwithbillComponent;
//# sourceMappingURL=oldsalebackwithbill.component.js.map