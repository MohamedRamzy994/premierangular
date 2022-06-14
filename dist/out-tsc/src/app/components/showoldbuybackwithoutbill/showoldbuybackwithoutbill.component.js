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
var router_1 = require("@angular/router");
// tslint:disable-next-line:max-line-length
var listproductbuydiscardnotmaininvoiceitems_service_1 = require("src/app/services/productbuy/listproductbuydiscardnotmaininvoiceitems.service");
var listproductbuydiscardnotmaininvoices_service_1 = require("src/app/services/productbuy/listproductbuydiscardnotmaininvoices.service");
var ShowoldbuybackwithoutbillComponent = /** @class */ (function () {
    function ShowoldbuybackwithoutbillComponent(_activatedRoute, _router, _listproductbuydiscardmaininvoicesService, _listproductbuydiscardnotmaininvoiceitemsService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._listproductbuydiscardmaininvoicesService = _listproductbuydiscardmaininvoicesService;
        this._listproductbuydiscardnotmaininvoiceitemsService = _listproductbuydiscardnotmaininvoiceitemsService;
        this.productBuyDiscardMainInvoicesItems = [];
        this.productBuyDiscardMainInvoice = new productbuy_1.ProductBuyDiscardSelectMainInvoices();
    }
    ShowoldbuybackwithoutbillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.DiscardID = params.get('DiscardID');
        });
        this.getProductBuyDiscardMainInvoiceItems();
        this.getproductbuydiscardSlelectedInvoice();
    };
    ShowoldbuybackwithoutbillComponent.prototype.getProductBuyDiscardMainInvoiceItems = function () {
        var _this = this;
        this._listproductbuydiscardnotmaininvoiceitemsService.listProductBuyDiscardMainInvoiceItems(this.DiscardID)
            .subscribe(function (_result) {
            _this.productBuyDiscardMainInvoicesItems = _result.ProductBuyDiscardInvoiceItems;
        });
    };
    ShowoldbuybackwithoutbillComponent.prototype.getproductbuydiscardSlelectedInvoice = function () {
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
    ShowoldbuybackwithoutbillComponent.prototype.goToPrintBuyBackWithoutBill = function () {
        this._router.navigate(['printbuybackwithoutbill', this.DiscardID]);
    };
    ShowoldbuybackwithoutbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    ShowoldbuybackwithoutbillComponent = __decorate([
        core_1.Component({
            selector: 'app-showoldbuybackwithoutbill',
            templateUrl: './showoldbuybackwithoutbill.component.html',
            styleUrls: ['./showoldbuybackwithoutbill.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            listproductbuydiscardnotmaininvoices_service_1.ListproductbuydiscardnotmaininvoicesService,
            listproductbuydiscardnotmaininvoiceitems_service_1.ListproductbuydiscardnotmaininvoiceitemsService])
    ], ShowoldbuybackwithoutbillComponent);
    return ShowoldbuybackwithoutbillComponent;
}());
exports.ShowoldbuybackwithoutbillComponent = ShowoldbuybackwithoutbillComponent;
//# sourceMappingURL=showoldbuybackwithoutbill.component.js.map