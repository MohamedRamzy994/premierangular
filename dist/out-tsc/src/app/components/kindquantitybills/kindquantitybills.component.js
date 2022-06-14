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
var router_1 = require("@angular/router");
var liststores_service_1 = require("./../../services/stores/liststores.service");
var angular_notifier_1 = require("angular-notifier");
var core_1 = require("@angular/core");
var productresetstock_1 = require("../../models/productresetstock");
var listproductresetstockinvoices_service_1 = require("../../services/productresetstock/listproductresetstockinvoices.service");
var KindquantitybillsComponent = /** @class */ (function () {
    function KindquantitybillsComponent(_listproductresetstockinvoicesService, _notifierService, _liststoresService, _router) {
        this._listproductresetstockinvoicesService = _listproductresetstockinvoicesService;
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
        this.SelectedInvoice = new productresetstock_1.ListProductResetStockeModel();
    }
    KindquantitybillsComponent.prototype.ngOnInit = function () {
        this.GetAllTransferKindsInvoices();
        this.GetAllStores();
    };
    KindquantitybillsComponent.prototype.GetAllTransferKindsInvoices = function () {
        var _this = this;
        this._listproductresetstockinvoicesService.GeAllProductResetStockInvoices().subscribe(function (_result) {
            _this.ListInvoices = _result.InvoicesList;
        });
    };
    KindquantitybillsComponent.prototype.GetAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ListStores = _result.StoresList;
        });
    };
    KindquantitybillsComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    KindquantitybillsComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    KindquantitybillsComponent.prototype.SelectRow = function (_kindInvoice) {
        this.SelectedInvoice = _kindInvoice;
    };
    KindquantitybillsComponent.prototype.RowSelected = function (_kindInvoice) {
        if (!this.SelectedInvoice) {
            return false;
        }
        return this.SelectedInvoice.InvoiceID === _kindInvoice.InvoiceID ? true : false;
    };
    KindquantitybillsComponent.prototype.RemoveSelection = function (_kindInvoice) {
        this.SelectedInvoice = null;
    };
    KindquantitybillsComponent.prototype.goshowInvoice = function () {
        if (this.SelectedInvoice.InvoiceID) {
            this._router.navigate(['showkindquantitybill', this.SelectedInvoice.InvoiceID]);
        }
        else {
            this._notifierService.notify('error', 'من فضلك يجي اختيار الفاتورة التى تريد عرض بياناتها ');
        }
    };
    KindquantitybillsComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    KindquantitybillsComponent = __decorate([
        core_1.Component({
            selector: 'app-kindquantitybills',
            templateUrl: './kindquantitybills.component.html',
            styleUrls: ['./kindquantitybills.component.css']
        }),
        __metadata("design:paramtypes", [listproductresetstockinvoices_service_1.ListproductresetstockinvoicesService,
            angular_notifier_1.NotifierService,
            liststores_service_1.ListstoresService,
            router_1.Router])
    ], KindquantitybillsComponent);
    return KindquantitybillsComponent;
}());
exports.KindquantitybillsComponent = KindquantitybillsComponent;
//# sourceMappingURL=kindquantitybills.component.js.map