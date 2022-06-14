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
var router_1 = require("@angular/router");
var productsales_1 = require("src/app/models/productsales");
// tslint:disable-next-line:max-line-length
var listproductsalediscardnotmaininvoiceitems_service_1 = require("src/app/services/productsales/listproductsalediscardnotmaininvoiceitems.service");
var listproductsalediscardnotmaininvoices_service_1 = require("src/app/services/productsales/listproductsalediscardnotmaininvoices.service");
var ShowoldsalebackwithoutbillComponent = /** @class */ (function () {
    function ShowoldsalebackwithoutbillComponent(_activatedRoute, _router, _listproductsalediscardnotmaininvoicesService, _listproductsalediscardnotmaininvoiceitemsService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._listproductsalediscardnotmaininvoicesService = _listproductsalediscardnotmaininvoicesService;
        this._listproductsalediscardnotmaininvoiceitemsService = _listproductsalediscardnotmaininvoiceitemsService;
        this.productSaleDiscardSelectMainInvoicesItems = [];
        this.productSaleDiscardMainInvoice = new productsales_1.ProductSaleDiscardSelectMainInvoices();
    }
    ShowoldsalebackwithoutbillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.DiscardID = params.get('DiscardID');
        });
        this.getProductSaleDiscardNotMainInvoiceItems();
        this.getproductsalediscardSlelectedInvoice();
    };
    ShowoldsalebackwithoutbillComponent.prototype.getProductSaleDiscardNotMainInvoiceItems = function () {
        var _this = this;
        this._listproductsalediscardnotmaininvoiceitemsService.listProductSaleDiscardNotMainInvoiceItems(this.DiscardID)
            .subscribe(function (_result) {
            _this.productSaleDiscardSelectMainInvoicesItems = _result.ProductSaleDiscardNotInvoiceItems;
            console.log(_result);
        });
    };
    ShowoldsalebackwithoutbillComponent.prototype.getproductsalediscardSlelectedInvoice = function () {
        var _this = this;
        this._listproductsalediscardnotmaininvoicesService.listProductSaleDiscardNotMainInvoices()
            .subscribe(function (_result) {
            _result.ProductSaleDiscardInvoices.forEach(function (element) {
                if (element.DiscardID == _this.DiscardID) {
                    _this.productSaleDiscardMainInvoice = element;
                    return;
                }
            });
        });
    };
    ShowoldsalebackwithoutbillComponent.prototype.goToPrintSaleBackWithoutBill = function () {
        this._router.navigate(['printsalebackwithoutbill', this.DiscardID]);
    };
    ShowoldsalebackwithoutbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    ShowoldsalebackwithoutbillComponent = __decorate([
        core_1.Component({
            selector: 'app-showoldsalebackwithoutbill',
            templateUrl: './showoldsalebackwithoutbill.component.html',
            styleUrls: ['./showoldsalebackwithoutbill.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            listproductsalediscardnotmaininvoices_service_1.ListproductsalediscardnotmaininvoicesService,
            listproductsalediscardnotmaininvoiceitems_service_1.ListproductsalediscardnotmaininvoiceitemsService])
    ], ShowoldsalebackwithoutbillComponent);
    return ShowoldsalebackwithoutbillComponent;
}());
exports.ShowoldsalebackwithoutbillComponent = ShowoldsalebackwithoutbillComponent;
//# sourceMappingURL=showoldsalebackwithoutbill.component.js.map