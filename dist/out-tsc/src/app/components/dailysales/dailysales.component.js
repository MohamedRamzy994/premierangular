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
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var listcustomers_service_1 = require("../../services/customers/listcustomers.service");
var productsales_1 = require("src/app/models/productsales");
var listproductdailysalesinvoices_service_1 = require("src/app/services/productsales/listproductdailysalesinvoices.service");
var DailysalesComponent = /** @class */ (function () {
    function DailysalesComponent(_listproductdailysalesinvoicesService, _liststoresService, _listcustomersService, _notifierService, _router) {
        this._listproductdailysalesinvoicesService = _listproductdailysalesinvoicesService;
        this._liststoresService = _liststoresService;
        this._listcustomersService = _listcustomersService;
        this._notifierService = _notifierService;
        this._router = _router;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductSaleProfitMainInvoices = [];
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductDailySalesInvoices();
        this.SelectedProductSaleMainInvoice.InvoiceID = 0;
        this.ProductStores = [];
        this.Customers = [];
        this.UserName = '';
        this.StoreID = 0;
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
    DailysalesComponent.prototype.ngOnInit = function () {
        this.getAllProductDailySalesInvoices();
        this.getAllStores();
        this.getAllCustomers();
    };
    DailysalesComponent.prototype.getAllProductDailySalesInvoices = function () {
        var _this = this;
        this._listproductdailysalesinvoicesService.listProductDailySalesInvoices()
            .subscribe(function (_result) {
            if (_result.Status == true) {
                _this.AllProductSaleProfitMainInvoices = _result.ProductDailySalesInvoices;
            }
            else {
                _this.AllProductSaleProfitMainInvoices = [];
            }
        });
    };
    DailysalesComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    DailysalesComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    DailysalesComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = _invoicemain;
    };
    DailysalesComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductSaleMainInvoice) {
            return false;
        }
        return this.SelectedProductSaleMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;
    };
    DailysalesComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductDailySalesInvoices();
    };
    DailysalesComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    DailysalesComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService.ListCustomers().subscribe(function (_result) {
            _this.Customers = _result.CustomersList;
        });
    };
    DailysalesComponent.prototype.goToShowPurchaseBill = function () {
        if (this.SelectedProductSaleMainInvoice.InvoiceID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');
        }
        else {
            this._router.navigate(['showoldsalesbill', this.SelectedProductSaleMainInvoice.InvoiceID]);
        }
    };
    DailysalesComponent.prototype.GetSumTotal = function (From, To, StoreID) {
        var SumTotal = 0;
        if (From && To && StoreID) {
            this.AllProductSaleProfitMainInvoices.filter(function (x) { return (x.StoreID == StoreID &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.NetPrice;
            });
            return SumTotal;
        }
        else if (From && To) {
            this.AllProductSaleProfitMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.NetPrice;
            });
            return SumTotal;
        }
        else {
            return SumTotal;
        }
    };
    DailysalesComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    DailysalesComponent = __decorate([
        core_1.Component({
            selector: 'app-dailysales',
            templateUrl: './dailysales.component.html',
            styleUrls: ['./dailysales.component.css']
        }),
        __metadata("design:paramtypes", [listproductdailysalesinvoices_service_1.ListproductdailysalesinvoicesService,
            liststores_service_1.ListstoresService,
            listcustomers_service_1.ListcustomersService,
            angular_notifier_1.NotifierService,
            router_1.Router])
    ], DailysalesComponent);
    return DailysalesComponent;
}());
exports.DailysalesComponent = DailysalesComponent;
//# sourceMappingURL=dailysales.component.js.map