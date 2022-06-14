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
var listtransferinvoiceitems_service_1 = require("./../../services/transferkinds/listtransferinvoiceitems.service");
var router_1 = require("@angular/router");
var transferkinds_1 = require("./../../models/transferkinds");
var listtransferkindinvoices_service_1 = require("./../../services/transferkinds/listtransferkindinvoices.service");
var core_1 = require("@angular/core");
var ShowbalkindtranComponent = /** @class */ (function () {
    function ShowbalkindtranComponent(_listtransferkindinvoicesService, _activatedRoute, _router, _listtransferinvoiceitemsService) {
        this._listtransferkindinvoicesService = _listtransferkindinvoicesService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._listtransferinvoiceitemsService = _listtransferinvoiceitemsService;
        this.SelectedInvoice = new transferkinds_1.ListTransferKindModel();
        this.SelectedInvoiceItems = new Array();
    }
    ShowbalkindtranComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.SelectedInvoiceID = params.get('InvoiceId');
        });
        this.getSelectedInvoiceDetails();
        this.getSelectedInvoiceItemsDetails();
    };
    ShowbalkindtranComponent.prototype.getSelectedInvoiceDetails = function () {
        var _this = this;
        this._listtransferkindinvoicesService.GeAllTransferKindInvoices().subscribe(function (_result) {
            _result.InvoicesList.forEach(function (element) {
                if (element.InvoiceID === parseInt(_this.SelectedInvoiceID, 10)) {
                    _this.SelectedInvoice = element;
                }
            });
        });
    };
    ShowbalkindtranComponent.prototype.getSelectedInvoiceItemsDetails = function () {
        var _this = this;
        this._listtransferinvoiceitemsService.GeAllTransferKindInvoices(parseInt(this.SelectedInvoiceID, 10))
            .subscribe(function (_result) {
            _this.SelectedInvoiceItems = _result.InvoiceItemsList;
        });
    };
    ShowbalkindtranComponent.prototype.goToPrintPreview = function () {
        this._router.navigate(['printkindbaltransbill', this.SelectedInvoiceID]);
    };
    ShowbalkindtranComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    ShowbalkindtranComponent = __decorate([
        core_1.Component({
            selector: 'app-showbalkindtran',
            templateUrl: './showbalkindtran.component.html',
            styleUrls: ['./showbalkindtran.component.css']
        }),
        __metadata("design:paramtypes", [listtransferkindinvoices_service_1.ListtransferkindinvoicesService,
            router_1.ActivatedRoute,
            router_1.Router,
            listtransferinvoiceitems_service_1.ListtransferinvoiceitemsService])
    ], ShowbalkindtranComponent);
    return ShowbalkindtranComponent;
}());
exports.ShowbalkindtranComponent = ShowbalkindtranComponent;
//# sourceMappingURL=showbalkindtran.component.js.map