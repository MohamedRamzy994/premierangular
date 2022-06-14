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
var productbuy_1 = require("src/app/models/productbuy");
var listproductbuymaininvoices_service_1 = require("src/app/services/productbuy/listproductbuymaininvoices.service");
var router_1 = require("@angular/router");
var listproductbuymaininvoiceitems_service_1 = require("../../services/productbuy/listproductbuymaininvoiceitems.service");
// tslint:disable-next-line:max-line-length
var listproductbuyalldiscardmaininvoiceitems_service_1 = require("src/app/services/productbuy/listproductbuyalldiscardmaininvoiceitems.service");
var ShowpurchasebillComponent = /** @class */ (function () {
    function ShowpurchasebillComponent(_listproductbuymaininvoicesService, _activatedRoute, _router, _listproductbuymaininvoiceitemsService, _listproductbuydiscardmaininvoiceitemsService) {
        this._listproductbuymaininvoicesService = _listproductbuymaininvoicesService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._listproductbuymaininvoiceitemsService = _listproductbuymaininvoiceitemsService;
        this._listproductbuydiscardmaininvoiceitemsService = _listproductbuydiscardmaininvoiceitemsService;
        this.productBuyMainInvoices = new productbuy_1.ProductBuySelectMainInvoices();
        this.productBuyMainInvoicesItems = [];
        this.productBuyDiscardMainInvoicesItems = [];
    }
    ShowpurchasebillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.InvoiceID = params.get('InvoiceID');
        });
        this.getProductBuyMainInvoices();
        this.getProductBuyMainInvoiceItems();
        this.getProductBuyDiscardMainInvoiceItems();
    };
    ShowpurchasebillComponent.prototype.getProductBuyMainInvoices = function () {
        var _this = this;
        this._listproductbuymaininvoicesService.listProductBuyMainInvoices().subscribe(function (_result) {
            _result.ProductBuyInvoices.forEach(function (_element) {
                if (_element.InvoiceID == _this.InvoiceID) {
                    _this.productBuyMainInvoices = _element;
                }
            });
        });
    };
    ShowpurchasebillComponent.prototype.getProductBuyMainInvoiceItems = function () {
        var _this = this;
        this._listproductbuymaininvoiceitemsService.listProductBuyMainInvoiceItems(this.InvoiceID)
            .subscribe(function (_result) {
            if (_result.ProductBuyInvoiceItems == null) {
                _this.productBuyMainInvoicesItems = [];
            }
            else {
                _this.productBuyMainInvoicesItems = _result.ProductBuyInvoiceItems;
            }
        });
    };
    ShowpurchasebillComponent.prototype.getProductBuyDiscardMainInvoiceItems = function () {
        var _this = this;
        this._listproductbuydiscardmaininvoiceitemsService.listProductBuyAllDiscardMainInvoiceItems(this.InvoiceID)
            .subscribe(function (_result) {
            if (_result.ProductBuyDiscardInvoiceItems == null) {
                _this.productBuyDiscardMainInvoicesItems = [];
            }
            else {
                _this.productBuyDiscardMainInvoicesItems = _result.ProductBuyDiscardInvoiceItems;
            }
        });
    };
    /**
     * name
     */
    ShowpurchasebillComponent.prototype.goToPrintPurchasePill = function () {
        this._router.navigate(['printpurchasebill', this.InvoiceID]);
    };
    ShowpurchasebillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    ShowpurchasebillComponent = __decorate([
        core_1.Component({
            selector: 'app-showpurchasebill',
            templateUrl: './showpurchasebill.component.html',
            styleUrls: ['./showpurchasebill.component.css']
        }),
        __metadata("design:paramtypes", [listproductbuymaininvoices_service_1.ListproductbuymaininvoicesService,
            router_1.ActivatedRoute,
            router_1.Router,
            listproductbuymaininvoiceitems_service_1.ListproductbuymaininvoiceitemsService,
            listproductbuyalldiscardmaininvoiceitems_service_1.ListproductbuyalldiscardmaininvoiceitemsService])
    ], ShowpurchasebillComponent);
    return ShowpurchasebillComponent;
}());
exports.ShowpurchasebillComponent = ShowpurchasebillComponent;
//# sourceMappingURL=showpurchasebill.component.js.map