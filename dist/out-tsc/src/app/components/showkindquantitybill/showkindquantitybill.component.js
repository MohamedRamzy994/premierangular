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
var listproductresetstockinvoices_service_1 = require("./../../services/productresetstock/listproductresetstockinvoices.service");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var listproductresetstockinvoiceitems_service_1 = require("../../services/productresetstock/listproductresetstockinvoiceitems.service");
var productresetstock_1 = require("../../models/productresetstock");
var ShowkindquantitybillComponent = /** @class */ (function () {
    function ShowkindquantitybillComponent(_listproductresetstockinvoicesService, _activatedRoute, _router, _listproductresetstockinvoiceitemsService) {
        this._listproductresetstockinvoicesService = _listproductresetstockinvoicesService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._listproductresetstockinvoiceitemsService = _listproductresetstockinvoiceitemsService;
        this.SelectedInvoice = new productresetstock_1.ListProductResetStockeModel();
        this.SelectedInvoiceItems = new Array();
    }
    ShowkindquantitybillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.SelectedInvoiceID = params.get('InvoiceId');
        });
        this.getSelectedInvoiceDetails();
        this.getSelectedInvoiceItemsDetails();
    };
    ShowkindquantitybillComponent.prototype.getSelectedInvoiceDetails = function () {
        var _this = this;
        this._listproductresetstockinvoicesService.GeAllProductResetStockInvoices()
            .subscribe(function (_result) {
            _result.InvoicesList.forEach(function (element) {
                if (element.InvoiceID === parseInt(_this.SelectedInvoiceID, 10)) {
                    _this.SelectedInvoice = element;
                }
            });
        });
    };
    ShowkindquantitybillComponent.prototype.getSelectedInvoiceItemsDetails = function () {
        var _this = this;
        this._listproductresetstockinvoiceitemsService.GeAllProductResetStockInvoiceItems(parseInt(this.SelectedInvoiceID, 10))
            .subscribe(function (_result) {
            _this.SelectedInvoiceItems = _result.InvoiceItemsList;
        });
    };
    ShowkindquantitybillComponent.prototype.goToPrintPreview = function () {
        this._router.navigate(['printresetstockkindbill', this.SelectedInvoiceID]);
    };
    ShowkindquantitybillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    ShowkindquantitybillComponent = __decorate([
        core_1.Component({
            selector: 'app-showbalancebill',
            templateUrl: './showkindquantitybill.component.html',
            styleUrls: ['./showkindquantitybill.component.css']
        }),
        __metadata("design:paramtypes", [listproductresetstockinvoices_service_1.ListproductresetstockinvoicesService,
            router_1.ActivatedRoute,
            router_1.Router,
            listproductresetstockinvoiceitems_service_1.ListproductresetstockinvoiceitemsService])
    ], ShowkindquantitybillComponent);
    return ShowkindquantitybillComponent;
}());
exports.ShowkindquantitybillComponent = ShowkindquantitybillComponent;
//# sourceMappingURL=showkindquantitybill.component.js.map