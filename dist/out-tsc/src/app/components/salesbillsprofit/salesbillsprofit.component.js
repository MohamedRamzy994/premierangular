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
var listproductsaleprofitmaininvoices_service_1 = require("src/app/services/productsales/listproductsaleprofitmaininvoices.service");
var SalesbillsprofitComponent = /** @class */ (function () {
    function SalesbillsprofitComponent(_listproductsaleprofitmaininvoicesService, _liststoresService, _listcustomersService, _notifierService, _router) {
        this._listproductsaleprofitmaininvoicesService = _listproductsaleprofitmaininvoicesService;
        this._liststoresService = _liststoresService;
        this._listcustomersService = _listcustomersService;
        this._notifierService = _notifierService;
        this._router = _router;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductSaleProfitSelectMainInvoices = [];
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductSaleProfitSelectMainInvoices();
        this.SelectedProductSaleMainInvoice.InvoiceID = 0;
        this.ProductStores = [];
        this.Customers = [];
        this.UserName = '';
        this.InvoiceType = 2;
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
    SalesbillsprofitComponent.prototype.ngOnInit = function () {
        this.getAllProductSaleProfitSelectMainInvoices();
        this.getAllStores();
        this.getAllCustomers();
    };
    SalesbillsprofitComponent.prototype.getAllProductSaleProfitSelectMainInvoices = function () {
        var _this = this;
        this._listproductsaleprofitmaininvoicesService.listProductSaleProfitMainInvoices()
            .subscribe(function (_result) {
            _this.AllProductSaleProfitSelectMainInvoices = _result.ProductSaleProfitInvoices;
            _this.AllProductSaleProfitSelectMainInvoices.forEach(function (element) {
                if (element.InvTypeID === 1) {
                    element.InvTypeName = 'نقدى';
                }
                else if (element.InvTypeID === 2) {
                    element.InvTypeName = 'أجل';
                }
            });
        });
    };
    SalesbillsprofitComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    SalesbillsprofitComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    SalesbillsprofitComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = _invoicemain;
    };
    SalesbillsprofitComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductSaleMainInvoice) {
            return false;
        }
        return this.SelectedProductSaleMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;
    };
    SalesbillsprofitComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductSaleProfitSelectMainInvoices();
        this.SelectedProductSaleMainInvoice.InvoiceID = 0;
    };
    SalesbillsprofitComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    SalesbillsprofitComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this._listcustomersService.ListCustomers().subscribe(function (_result) {
            _this.Customers = _result.CustomersList;
        });
    };
    SalesbillsprofitComponent.prototype.goToShowPurchaseBill = function () {
        if (this.SelectedProductSaleMainInvoice.InvoiceID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد فاتورة واحدة على الاقل للقيام بعملية العرض ');
        }
        else {
            this._router.navigate(['showoldsalesbill', this.SelectedProductSaleMainInvoice.InvoiceID]);
        }
    };
    SalesbillsprofitComponent.prototype.GetSumTotal = function (From, To, StoreName, SupplierName, UserName, InvoiceID) {
        var SumTotal = 0;
        if (From && To && StoreName && SupplierName && UserName && InvoiceID) {
            this.AllProductSaleProfitSelectMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.CustomerName.startsWith(SupplierName) &&
                x.InvoiceID.toString().startsWith(InvoiceID) &&
                x.UserName.startsWith(UserName)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To && StoreName && SupplierName && InvoiceID) {
            this.AllProductSaleProfitSelectMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.CustomerName.startsWith(SupplierName) && x.UserName.startsWith(UserName) &&
                x.InvoiceID.toString().startsWith(InvoiceID)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To && StoreName && SupplierName && UserName) {
            this.AllProductSaleProfitSelectMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.CustomerName.startsWith(SupplierName) && x.UserName.startsWith(UserName)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To && StoreName && SupplierName) {
            this.AllProductSaleProfitSelectMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.CustomerName.startsWith(SupplierName)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To && StoreName) {
            this.AllProductSaleProfitSelectMainInvoices.filter(function (x) { return (x.StoreName.startsWith(StoreName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To && SupplierName) {
            this.AllProductSaleProfitSelectMainInvoices.filter(function (x) { return (x.CustomerName.startsWith(SupplierName) &&
                new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To && InvoiceID) {
            this.AllProductSaleProfitSelectMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To) &&
                x.InvoiceID.toString().startsWith(InvoiceID)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else if (From && To) {
            this.AllProductSaleProfitSelectMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.Net;
            });
            return SumTotal;
        }
        else {
            return SumTotal;
        }
    };
    SalesbillsprofitComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    SalesbillsprofitComponent = __decorate([
        core_1.Component({
            selector: 'app-salesbillsprofit',
            templateUrl: './salesbillsprofit.component.html',
            styleUrls: ['./salesbillsprofit.component.css']
        }),
        __metadata("design:paramtypes", [listproductsaleprofitmaininvoices_service_1.ListproductsaleprofitmaininvoicesService,
            liststores_service_1.ListstoresService,
            listcustomers_service_1.ListcustomersService,
            angular_notifier_1.NotifierService,
            router_1.Router])
    ], SalesbillsprofitComponent);
    return SalesbillsprofitComponent;
}());
exports.SalesbillsprofitComponent = SalesbillsprofitComponent;
//# sourceMappingURL=salesbillsprofit.component.js.map