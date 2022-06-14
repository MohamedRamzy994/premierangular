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
var core_1 = require("@angular/core");
// tslint:disable-next-line:max-line-length
var listproductopenningbalanceinvoiceitems_service_1 = require("../../services/productopeningbalance/listproductopenningbalanceinvoiceitems.service");
var listproductopenningbalanceinvoices_service_1 = require("../../services/productopeningbalance/listproductopenningbalanceinvoices.service");
var productopenningbalance_1 = require("../../models/productopenningbalance");
var ShowbalancebillComponent = /** @class */ (function () {
    function ShowbalancebillComponent(_listproductopenningbalanceinvoicesService, _activatedRoute, _router, _listproductopenningbalanceinvoiceitemsService) {
        this._listproductopenningbalanceinvoicesService = _listproductopenningbalanceinvoicesService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._listproductopenningbalanceinvoiceitemsService = _listproductopenningbalanceinvoiceitemsService;
        this.SelectedInvoice = new productopenningbalance_1.ListProductOpenningBalanceInvoicesModel();
        this.SelectedInvoiceItems = new Array();
    }
    ShowbalancebillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.SelectedInvoiceID = params.get('InvoiceId');
        });
        this.getSelectedInvoiceDetails();
        this.getSelectedInvoiceItemsDetails();
    };
    ShowbalancebillComponent.prototype.getSelectedInvoiceDetails = function () {
        var _this = this;
        this._listproductopenningbalanceinvoicesService.GeAllProductOpenningBalanceInvoices()
            .subscribe(function (_result) {
            _result.InvoicesList.forEach(function (element) {
                if (element.InvoiceID === parseInt(_this.SelectedInvoiceID, 10)) {
                    _this.SelectedInvoice = element;
                }
            });
        });
    };
    ShowbalancebillComponent.prototype.getSelectedInvoiceItemsDetails = function () {
        var _this = this;
        this._listproductopenningbalanceinvoiceitemsService.GeAllProducOpeningtBalancInvoiceItems(parseInt(this.SelectedInvoiceID, 10))
            .subscribe(function (_result) {
            _this.SelectedInvoiceItems = _result.InvoiceItemsList;
        });
    };
    ShowbalancebillComponent.prototype.goToPrintPreview = function () {
        this._router.navigate(['printopeningbalancekindbill', this.SelectedInvoiceID]);
    };
    ShowbalancebillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    ShowbalancebillComponent = __decorate([
        core_1.Component({
            selector: 'app-showbalancebill',
            templateUrl: './showbalancebill.component.html',
            styleUrls: ['./showbalancebill.component.css']
        }),
        __metadata("design:paramtypes", [listproductopenningbalanceinvoices_service_1.ListproductopenningbalanceinvoicesService,
            router_1.ActivatedRoute,
            router_1.Router,
            listproductopenningbalanceinvoiceitems_service_1.ListproductopenningbalanceinvoiceitemsService])
    ], ShowbalancebillComponent);
    return ShowbalancebillComponent;
}());
exports.ShowbalancebillComponent = ShowbalancebillComponent;
//# sourceMappingURL=showbalancebill.component.js.map