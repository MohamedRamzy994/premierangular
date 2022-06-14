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
var productbuy_1 = require("./../../models/productbuy");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var listproductbuydiscardmaininvoiceitems_service_1 = require("src/app/services/productbuy/listproductbuydiscardmaininvoiceitems.service");
var listproductbuydiscardmaininvoices_service_1 = require("src/app/services/productbuy/listproductbuydiscardmaininvoices.service");
var ShowoldbuybackwithbillComponent = /** @class */ (function () {
    function ShowoldbuybackwithbillComponent(_activatedRoute, _listproductbuydiscardmaininvoicesService, _listproductbuydiscardmaininvoiceitemsService, _router) {
        this._activatedRoute = _activatedRoute;
        this._listproductbuydiscardmaininvoicesService = _listproductbuydiscardmaininvoicesService;
        this._listproductbuydiscardmaininvoiceitemsService = _listproductbuydiscardmaininvoiceitemsService;
        this._router = _router;
        this.productBuyDiscardMainInvoicesItems = [];
        this.productBuyDiscardMainInvoice = new productbuy_1.ProductBuyDiscardSelectMainInvoices();
    }
    ShowoldbuybackwithbillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.DiscardID = params.get('DiscardID');
        });
        this.getProductBuyDiscardMainInvoiceItems();
        this.getproductbuydiscardSlelectedInvoice();
    };
    ShowoldbuybackwithbillComponent.prototype.getProductBuyDiscardMainInvoiceItems = function () {
        var _this = this;
        this._listproductbuydiscardmaininvoiceitemsService.listProductBuyDiscardMainInvoiceItems(this.DiscardID)
            .subscribe(function (_result) {
            _this.productBuyDiscardMainInvoicesItems = _result.ProductBuyDiscardInvoiceItems;
        });
    };
    ShowoldbuybackwithbillComponent.prototype.getproductbuydiscardSlelectedInvoice = function () {
        var _this = this;
        this._listproductbuydiscardmaininvoicesService.listProductBuyDiscardMainInvoices()
            .subscribe(function (_result) {
            _result.ProductBuyDiscardInvoices.forEach(function (element) {
                if (element.DiscardID == _this.DiscardID) {
                    _this.productBuyDiscardMainInvoice = element;
                    return;
                }
            });
        });
    };
    /**
     * name
     */
    ShowoldbuybackwithbillComponent.prototype.goToPrintBuyBackWithBill = function () {
        this._router.navigate(['printbuybackwithbill', this.DiscardID]);
    };
    ShowoldbuybackwithbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    ShowoldbuybackwithbillComponent = __decorate([
        core_1.Component({
            selector: 'app-showoldbuybackwithbill',
            templateUrl: './showoldbuybackwithbill.component.html',
            styleUrls: ['./showoldbuybackwithbill.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            listproductbuydiscardmaininvoices_service_1.ListproductbuydiscardmaininvoicesService,
            listproductbuydiscardmaininvoiceitems_service_1.ListproductbuydiscardmaininvoiceitemsService,
            router_1.Router])
    ], ShowoldbuybackwithbillComponent);
    return ShowoldbuybackwithbillComponent;
}());
exports.ShowoldbuybackwithbillComponent = ShowoldbuybackwithbillComponent;
//# sourceMappingURL=showoldbuybackwithbill.component.js.map