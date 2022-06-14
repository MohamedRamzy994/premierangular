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
var transferkinds_1 = require("./../../models/transferkinds");
var angular_notifier_1 = require("angular-notifier");
var listtransferkindinvoices_service_1 = require("./../../services/transferkinds/listtransferkindinvoices.service");
var core_1 = require("@angular/core");
var OldtranskindbalbillsComponent = /** @class */ (function () {
    function OldtranskindbalbillsComponent(_listtransferkindinvoicesService, _notifierService, _liststoresService, _router) {
        this._listtransferkindinvoicesService = _listtransferkindinvoicesService;
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
        this.StoreTo = '';
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
        this.SelectedInvoice = new transferkinds_1.ListTransferKindModel();
    }
    OldtranskindbalbillsComponent.prototype.ngOnInit = function () {
        this.GetAllTransferKindsInvoices();
        this.GetAllStores();
    };
    OldtranskindbalbillsComponent.prototype.GetAllTransferKindsInvoices = function () {
        var _this = this;
        this._listtransferkindinvoicesService.GeAllTransferKindInvoices().subscribe(function (_result) {
            _this.ListInvoices = _result.InvoicesList;
        });
    };
    OldtranskindbalbillsComponent.prototype.GetAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ListStores = _result.StoresList;
        });
    };
    OldtranskindbalbillsComponent.prototype.GetDateFrom = function (event) {
        console.log(this.DateFrom);
        this.DateFrom = this.DateFromObject.jsdate;
    };
    OldtranskindbalbillsComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    OldtranskindbalbillsComponent.prototype.SelectRow = function (_kindInvoice) {
        this.SelectedInvoice = _kindInvoice;
    };
    OldtranskindbalbillsComponent.prototype.RowSelected = function (_kindInvoice) {
        if (!this.SelectedInvoice) {
            return false;
        }
        return this.SelectedInvoice.InvoiceID === _kindInvoice.InvoiceID ? true : false;
    };
    OldtranskindbalbillsComponent.prototype.RemoveSelection = function (_kindInvoice) {
        this.SelectedInvoice = null;
    };
    OldtranskindbalbillsComponent.prototype.goshowInvoice = function () {
        if (this.SelectedInvoice.InvoiceID) {
            this._router.navigate(['showbalkindtran', this.SelectedInvoice.InvoiceID]);
        }
        else {
            this._notifierService.notify('error', 'من فضلك يجي اختيار الفاتورة التى تريد عرض بياناتها ');
        }
    };
    OldtranskindbalbillsComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    OldtranskindbalbillsComponent = __decorate([
        core_1.Component({
            selector: 'app-oldtranskindbalbills',
            templateUrl: './oldtranskindbalbills.component.html',
            styleUrls: ['./oldtranskindbalbills.component.css']
        }),
        __metadata("design:paramtypes", [listtransferkindinvoices_service_1.ListtransferkindinvoicesService,
            angular_notifier_1.NotifierService,
            liststores_service_1.ListstoresService,
            router_1.Router])
    ], OldtranskindbalbillsComponent);
    return OldtranskindbalbillsComponent;
}());
exports.OldtranskindbalbillsComponent = OldtranskindbalbillsComponent;
//# sourceMappingURL=oldtranskindbalbills.component.js.map