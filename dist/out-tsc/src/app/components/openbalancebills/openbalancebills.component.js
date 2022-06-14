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
var productopenningbalance_1 = require("./../../models/productopenningbalance");
var router_1 = require("@angular/router");
var liststores_service_1 = require("./../../services/stores/liststores.service");
var angular_notifier_1 = require("angular-notifier");
var core_1 = require("@angular/core");
var listproductopenningbalanceinvoices_service_1 = require("../../services/productopeningbalance/listproductopenningbalanceinvoices.service");
var OpenbalancebillsComponent = /** @class */ (function () {
    function OpenbalancebillsComponent(_listproductopenningbalanceinvoicesService, _notifierService, _liststoresService, _router) {
        this._listproductopenningbalanceinvoicesService = _listproductopenningbalanceinvoicesService;
        this._notifierService = _notifierService;
        this._liststoresService = _liststoresService;
        this._router = _router;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.ListInvoices = [];
        this.UserName = '';
        this.StoreName = '';
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
        this.SelectedInvoice = new productopenningbalance_1.ListProductOpenningBalanceInvoicesModel();
    }
    OpenbalancebillsComponent.prototype.ngOnInit = function () {
        this.GetAllTransferKindsInvoices();
        this.GetAllStores();
    };
    OpenbalancebillsComponent.prototype.GetAllTransferKindsInvoices = function () {
        var _this = this;
        this._listproductopenningbalanceinvoicesService.GeAllProductOpenningBalanceInvoices().subscribe(function (_result) {
            _this.ListInvoices = _result.InvoicesList;
        });
    };
    OpenbalancebillsComponent.prototype.GetAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ListStores = _result.StoresList;
        });
    };
    OpenbalancebillsComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    OpenbalancebillsComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    OpenbalancebillsComponent.prototype.SelectRow = function (_kindInvoice) {
        this.SelectedInvoice = _kindInvoice;
    };
    OpenbalancebillsComponent.prototype.RowSelected = function (_kindInvoice) {
        if (!this.SelectedInvoice) {
            return false;
        }
        return this.SelectedInvoice.InvoiceID === _kindInvoice.InvoiceID ? true : false;
    };
    OpenbalancebillsComponent.prototype.RemoveSelection = function (_kindInvoice) {
        this.SelectedInvoice = null;
    };
    OpenbalancebillsComponent.prototype.goshowInvoice = function () {
        if (this.SelectedInvoice.InvoiceID) {
            this._router.navigate(['showbalancebill', this.SelectedInvoice.InvoiceID]);
        }
        else {
            this._notifierService.notify('error', 'من فضلك يجي اختيار الفاتورة التى تريد عرض بياناتها ');
        }
    };
    OpenbalancebillsComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    OpenbalancebillsComponent = __decorate([
        core_1.Component({
            selector: 'app-openbalancebills',
            templateUrl: './openbalancebills.component.html',
            styleUrls: ['./openbalancebills.component.css']
        }),
        __metadata("design:paramtypes", [listproductopenningbalanceinvoices_service_1.ListproductopenningbalanceinvoicesService,
            angular_notifier_1.NotifierService,
            liststores_service_1.ListstoresService,
            router_1.Router])
    ], OpenbalancebillsComponent);
    return OpenbalancebillsComponent;
}());
exports.OpenbalancebillsComponent = OpenbalancebillsComponent;
//# sourceMappingURL=openbalancebills.component.js.map