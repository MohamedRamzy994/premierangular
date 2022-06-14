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
var listproductsalemaininvoices_service_1 = require("src/app/services/productsales/listproductsalemaininvoices.service");
var productsales_1 = require("src/app/models/productsales");
var OldsalesbillsComponent = /** @class */ (function () {
    function OldsalesbillsComponent(_listproductsalemaininvoicesService, _liststoresService, _listcustomersService, _notifierService, _router) {
        this._listproductsalemaininvoicesService = _listproductsalemaininvoicesService;
        this._liststoresService = _liststoresService;
        this._listcustomersService = _listcustomersService;
        this._notifierService = _notifierService;
        this._router = _router;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductSaleMainInvoices = [];
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductSaleSelectMainInvoices();
        this.SelectedProductSaleMainInvoice.InvoiceID = 0;
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
        this.InvoiceType = 2;
    }
    OldsalesbillsComponent.prototype.ngOnInit = function () {
        this.getAllProductSaleMainInvoices();
        this.getAllStores();
        this.getAllCustomers();
    };
    OldsalesbillsComponent.prototype.getAllProductSaleMainInvoices = function () {
        var _this = this;
        this._listproductsalemaininvoicesService.listProductSaleMainInvoices().subscribe(function (_result) {
            _this.AllProductSaleMainInvoices = _result.ProductSaleInvoices;
            _this.AllProductSaleMainInvoices.forEach(function (element) {
                if (element.InvTypeID === 1) {
                    element.InvTypeName = 'نقدى';
                }
                else if (element.InvTypeID === 2) {
                    element.InvTypeName = 'أجل';
                }
            });
        });
    };
    OldsalesbillsComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    OldsalesbillsComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    OldsalesbillsComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = _invoicemain;
    };
    OldsalesbillsComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductSaleMainInvoice) {
            return false;
        }
        return this.SelectedProductSaleMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;
    };
    OldsalesbillsComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductSaleSelectMainInvoices();
    };
    OldsalesbillsComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    OldsalesbillsComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService.ListCustomers().subscribe(function (_result) {
            _this.Customers = _result.CustomersList;
        });
    };
    OldsalesbillsComponent.prototype.goToShowPurchaseBill = function () {
        if (this.SelectedProductSaleMainInvoice.InvoiceID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');
        }
        else {
            this._router.navigate(['showoldsalesbill', this.SelectedProductSaleMainInvoice.InvoiceID]);
        }
    };
    OldsalesbillsComponent.prototype.GetSumTotal = function (From, To, StoreName, SupplierName) {
        var SumTotal = 0;
        if (From && To && StoreName && SupplierName) {
            this.AllProductSaleMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.CustomerName.startsWith(SupplierName)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To && StoreName) {
            this.AllProductSaleMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To) {
            this.AllProductSaleMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else {
            return SumTotal;
        }
    };
    OldsalesbillsComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    OldsalesbillsComponent = __decorate([
        core_1.Component({
            selector: 'app-oldsalesbills',
            templateUrl: './oldsalesbills.component.html',
            styleUrls: ['./oldsalesbills.component.css']
        }),
        __metadata("design:paramtypes", [listproductsalemaininvoices_service_1.ListproductsalemaininvoicesService,
            liststores_service_1.ListstoresService,
            listcustomers_service_1.ListcustomersService,
            angular_notifier_1.NotifierService,
            router_1.Router])
    ], OldsalesbillsComponent);
    return OldsalesbillsComponent;
}());
exports.OldsalesbillsComponent = OldsalesbillsComponent;
//# sourceMappingURL=oldsalesbills.component.js.map