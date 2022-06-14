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
var listproductsalemaininvoicemaindetails_service_1 = require("./../../services/productsales/listproductsalemaininvoicemaindetails.service");
var core_1 = require("@angular/core");
var productsales_1 = require("src/app/models/productsales");
var router_1 = require("@angular/router");
var listproductsalemaininvoicemainitems_service_1 = require("src/app/services/productsales/listproductsalemaininvoicemainitems.service");
// tslint:disable-next-line:max-line-length
var listproductsalemaininvoicemaindiscarditems_service_1 = require("src/app/services/productsales/listproductsalemaininvoicemaindiscarditems.service");
var ShowoldsalesbillComponent = /** @class */ (function () {
    function ShowoldsalesbillComponent(_listproductsalemaininvoicemaindetailsService, _listproductsalemaininvoicemainitemsService, _listproductsalemaininvoicemaindiscarditemsService, _router, _activatedRoute) {
        this._listproductsalemaininvoicemaindetailsService = _listproductsalemaininvoicemaindetailsService;
        this._listproductsalemaininvoicemainitemsService = _listproductsalemaininvoicemainitemsService;
        this._listproductsalemaininvoicemaindiscarditemsService = _listproductsalemaininvoicemaindiscarditemsService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.productSaleMainInvoiceDetails = new productsales_1.ProductSaleInvoiceMainDetails();
        this.productSaleDiscardSelectMainInvoicesItems = [];
        this.productSaleMainInvoiceItems = [];
    }
    ShowoldsalesbillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.InvoiceID = params.get('InvoiceID');
        });
        this.productSaleMainInvoiceDetails = new productsales_1.ProductSaleInvoiceMainDetails();
        this.getProductSaleMainInvoiceDetails();
        this.getProductSaleMainInvoiceItems();
        this.getProductSaleMainInvoiceDiscardItems();
    };
    ShowoldsalesbillComponent.prototype.getProductSaleMainInvoiceDetails = function () {
        var _this = this;
        this._listproductsalemaininvoicemaindetailsService.listProductSaleMainInvoiceDetails(this.InvoiceID)
            .subscribe(function (_result) {
            _this.productSaleMainInvoiceDetails = _result.ProductSaleInvoiceMainDetails[0];
            console.log(_this.productSaleMainInvoiceDetails);
        });
    };
    ShowoldsalesbillComponent.prototype.getProductSaleMainInvoiceItems = function () {
        var _this = this;
        this._listproductsalemaininvoicemainitemsService.listProductSaleMainInvoiceItems(this.InvoiceID)
            .subscribe(function (_result) {
            _this.productSaleMainInvoiceItems = _result.ProductSaleInvoiceItems;
        });
    };
    ShowoldsalesbillComponent.prototype.getProductSaleMainInvoiceDiscardItems = function () {
        var _this = this;
        this._listproductsalemaininvoicemaindiscarditemsService.listProductSaleMainInvoiceDiscardItems(this.InvoiceID)
            .subscribe(function (_result) {
            if (_result.ProductSaleDiscardInvoiceItems == null) {
                _this.productSaleDiscardSelectMainInvoicesItems = [];
            }
            else {
                _this.productSaleDiscardSelectMainInvoicesItems = _result.ProductSaleDiscardInvoiceItems;
            }
        });
    };
    ShowoldsalesbillComponent.prototype.goToPrintOldSalesBill = function () {
        this._router.navigate(['printoldsalesbill', this.InvoiceID]);
    };
    ShowoldsalesbillComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    ShowoldsalesbillComponent = __decorate([
        core_1.Component({
            selector: 'app-showoldsalesbill',
            templateUrl: './showoldsalesbill.component.html',
            styleUrls: ['./showoldsalesbill.component.css']
        }),
        __metadata("design:paramtypes", [listproductsalemaininvoicemaindetails_service_1.ListproductsalemaininvoicemaindetailsService,
            listproductsalemaininvoicemainitems_service_1.ListproductsalemaininvoicemainitemsService,
            listproductsalemaininvoicemaindiscarditems_service_1.ListproductsalemaininvoicemaindiscarditemsService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ShowoldsalesbillComponent);
    return ShowoldsalesbillComponent;
}());
exports.ShowoldsalesbillComponent = ShowoldsalesbillComponent;
//# sourceMappingURL=showoldsalesbill.component.js.map