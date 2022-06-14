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
var printd_1 = require("printd");
var PrintoldsalesbillComponent = /** @class */ (function () {
    function PrintoldsalesbillComponent(_listproductsalemaininvoicemaindetailsService, _listproductsalemaininvoicemainitemsService, _listproductsalemaininvoicemaindiscarditemsService, _router, _activatedRoute) {
        this._listproductsalemaininvoicemaindetailsService = _listproductsalemaininvoicemaindetailsService;
        this._listproductsalemaininvoicemainitemsService = _listproductsalemaininvoicemainitemsService;
        this._listproductsalemaininvoicemaindiscarditemsService = _listproductsalemaininvoicemaindiscarditemsService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.productSaleMainInvoiceDetails = new productsales_1.ProductSaleInvoiceMainDetails();
        this.productSaleDiscardSelectMainInvoicesItems = [];
        this.productSaleMainInvoiceItems = [];
    }
    PrintoldsalesbillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.InvoiceID = params.get('InvoiceID');
        });
        this.productSaleMainInvoiceDetails = new productsales_1.ProductSaleInvoiceMainDetails();
        this.getProductSaleMainInvoiceDetails();
        this.getProductSaleMainInvoiceItems();
        this.getProductSaleMainInvoiceDiscardItems();
    };
    PrintoldsalesbillComponent.prototype.getProductSaleMainInvoiceDetails = function () {
        var _this = this;
        this._listproductsalemaininvoicemaindetailsService.listProductSaleMainInvoiceDetails(this.InvoiceID)
            .subscribe(function (_result) {
            _this.productSaleMainInvoiceDetails = _result.ProductSaleInvoiceMainDetails[0];
            console.log(_this.productSaleMainInvoiceDetails);
        });
    };
    PrintoldsalesbillComponent.prototype.getProductSaleMainInvoiceItems = function () {
        var _this = this;
        this._listproductsalemaininvoicemainitemsService.listProductSaleMainInvoiceItems(this.InvoiceID)
            .subscribe(function (_result) {
            _this.productSaleMainInvoiceItems = _result.ProductSaleInvoiceItems;
        });
    };
    PrintoldsalesbillComponent.prototype.getProductSaleMainInvoiceDiscardItems = function () {
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
    PrintoldsalesbillComponent.prototype.PrintReportInvoice = function () {
        var cssText = "\n    article, aside , details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n      display: block;\n    }\n    .container {\n      width:100%;\n      direction: rtl;\n\n    }\n    .col-md-1 {\n      width:10%;\n      float:right;\n\n    }\n\n    .col-md-2 {\n      width:20%;\n      float:right;\n\n    }\n    .col-md-3 {\n      width:25%;\n      float:right;\n\n    }\n\n    .col-md-8 {\n      width:50%;\n      float:right;\n      margin-left:8%;\n    }\n    .col-md-5 {\n      width:50%;\n      float:right;\n\n    }\n    .text-left {\n      text-align: left;\n    }\n    .text-right {\n      text-align: right;\n    }\n    .text-center {\n      text-align: center;\n    }\n    .row{\n      width: 100%;\n\n    }\n    .panel-heading .row{\n      width: 100%;\n\n    }\n    .panel-body .row{\n      width: 100%;\n      margin-bottom: 35px;\n    }\n    .printbrand {\n      padding:31px 5px; \n      background-color:#fff; \n      border:1px solid #000;\n       width:100%;\n       text-align: center;\n       border-radius: 5px;\n    }\n    .label {\n      display: inline;\n      font-weight: bold;\n      line-height: 1;\n      color: black;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border-radius: .25em;\n      padding:5px;\n\n    }\n    .label-default{\n      background-color: #f2f2f2 !important;\n      -webkit-print-color-adjust: exact;\n      padding:5px;\n\n    }\n    .userlogo {\n      height: 70px;\n      width: 70px;\n    }\n    .img-thumbnail {\n      display: inline-block;\n      max-width: 100%;\n      height: auto;\n      padding:10px;\n      line-height: 1.42857143;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      transition: all .2s ease-in-out;\n    }\n    img {\n      vertical-align: middle;\n    }\n     .spacetoprint{\n       height:1.5cm;\n       width:100%;\n     }\n    .form-group {\n      margin-bottom: 5px;\n    }\n    h3 {\n      width:80%;\n      font-size: 25px;\n      font-family: sans-serif;\n      border: black solid 1px;\n      padding:5px;\n      margin-right:15%;\n      background-color: #f2f2f2 !important;\n      -webkit-print-color-adjust: exact;\n\n    }\n    hr{\n      width:100%;\n      height:0px;\n      border: 1px solid #000;\n    }\n    h1{\n      font-size: 18px;\n\n    }\n    .table-responsive {\n      min-height: .01%;\n      overflow-x: auto;\n  }\n  .table-bordered {\n    border: 1px solid #ddd;\n    box-shadow: 0 0 black;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\ntable {\n  background-color: transparent;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntable thead {\n  background-color: #f2f2f2 !important;\n  -webkit-print-color-adjust: exact;\n}\ntbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th,\n .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table > thead > tr > th, .table > tbody > tr > th,\n .table > tfoot > tr > th, .table > thead > tr > td,\n .table > tbody > tr > td, .table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.btn {\n  display: none;\n}\n.fixheight{\n\n  min-height:17cm;\n\n}\n#datefromto{\n  display:none;\n}\n\n  ";
        var d = new printd_1.default();
        d.print(document.getElementById('body-content'), cssText);
    };
    PrintoldsalesbillComponent = __decorate([
        core_1.Component({
            selector: 'app-printoldsalesbill',
            templateUrl: './printoldsalesbill.component.html',
            styleUrls: ['./printoldsalesbill.component.css']
        }),
        __metadata("design:paramtypes", [listproductsalemaininvoicemaindetails_service_1.ListproductsalemaininvoicemaindetailsService,
            listproductsalemaininvoicemainitems_service_1.ListproductsalemaininvoicemainitemsService,
            listproductsalemaininvoicemaindiscarditems_service_1.ListproductsalemaininvoicemaindiscarditemsService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], PrintoldsalesbillComponent);
    return PrintoldsalesbillComponent;
}());
exports.PrintoldsalesbillComponent = PrintoldsalesbillComponent;
//# sourceMappingURL=printoldsalesbill.component.js.map