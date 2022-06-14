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
var printd_1 = require("printd");
var customers_1 = require("src/app/models/customers");
var listcustomermoneydetails_service_1 = require("src/app/services/customers/listcustomermoneydetails.service");
var PrintfilecustomeradvancepaymentsdetailsComponent = /** @class */ (function () {
    function PrintfilecustomeradvancepaymentsdetailsComponent(_listcustomermoneydetailsService, _activatedRoute) {
        this._listcustomermoneydetailsService = _listcustomermoneydetailsService;
        this._activatedRoute = _activatedRoute;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
    }
    PrintfilecustomeradvancepaymentsdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allSupplierMoneyDetails = [];
        this.customerTotalCommunicationSummaryModel = new customers_1.CustomerTotalCommunicationSummaryModel();
        this.addcustomerRebateActionModel = new customers_1.AddCustomerRebateActionModel();
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.addcustomerRebateActionModel.CustomerID = params.get('CustomerID');
        });
        this.DateFromFirstObject = {
            'date': {
                'year': 2000,
                'month': 1,
                'day': 1
            },
            'jsdate': '2000-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2018'
        };
        this.DateToFirstObject = {
            'date': {
                'year': 2030,
                'month': 1,
                'day': 1
            },
            'jsdate': '2030-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2030'
        };
        this.DateFirstFrom = this.DateFromFirstObject.jsdate;
        this.DateFirstTo = this.DateToFirstObject.jsdate;
        this.getAllSupplierMoneyDetails();
    };
    PrintfilecustomeradvancepaymentsdetailsComponent.prototype.GetDateFirstFrom = function (event) {
        this.DateFirstFrom = this.DateFromFirstObject.jsdate;
    };
    PrintfilecustomeradvancepaymentsdetailsComponent.prototype.GetDateFirstTo = function (event) {
        this.DateFirstTo = this.DateToFirstObject.jsdate;
    };
    PrintfilecustomeradvancepaymentsdetailsComponent.prototype.getAllSupplierMoneyDetails = function () {
        var _this = this;
        this._listcustomermoneydetailsService
            .ListCustomerMoneyDetails(parseInt(this.addcustomerRebateActionModel.CustomerID, 10))
            .subscribe(function (_result) {
            _this.allSupplierMoneyDetails = _result.CustomerMoneyDetailsList;
            _this.customerTotalCommunicationSummaryModel = _result.CustomerTotalCommunicationSummary;
        });
    };
    PrintfilecustomeradvancepaymentsdetailsComponent.prototype.PrintSupplierMoneyDetails = function () {
        var cssText = "\n    article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n      display: block;\n    }\n    .container {\n      width:100%;\n      direction: rtl;\n\n    }\n    .col-md-1 {\n      width:10%;\n      float:right;\n\n    }\n\n    .col-md-2 {\n      width:20%;\n      float:right;\n\n    }\n    .col-md-4 {\n      width:33%;\n      float:right;\n\n    }\n\n    .col-md-8 {\n      width:50%;\n      float:right;\n      margin-left:8%;\n    }\n    .col-md-5 {\n      width:50%;\n      float:right;\n\n    }\n    .text-left {\n      text-align: left;\n    }\n    .text-right {\n      text-align: right;\n    }\n    .text-center {\n      text-align: center;\n    }\n    .row{\n      width: 100%;\n\n    }\n    .printbrand {\n      border: #f2f2f2 solid 1px;\n      text-align: center;\n      padding:15px 0;\n    }\n    .label {\n      display: inline;\n      font-weight: bold;\n      line-height: 1;\n      color: black;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border-radius: .25em;\n      padding:5px;\n    }\n    .label-default{\n      background-color: #f2f2f2 !important;\n      -webkit-print-color-adjust: exact;\n      padding:5px;\n\n    }\n    .userlogo {\n      height: 70px;\n      width: 70px;\n    }\n    .img-thumbnail {\n      display: inline-block;\n      max-width: 100%;\n      height: auto;\n      padding:10px;\n      line-height: 1.42857143;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      transition: all .2s ease-in-out;\n    }\n    img {\n      vertical-align: middle;\n    }\n     .spacetoprint{\n       height:1.5cm;\n       width:100%;\n     }\n    .form-group {\n      margin-bottom: 5px;\n    }\n    h3 {\n      width:70%;\n      font-size: 25px;\n      font-family: sans-serif;\n      border: black solid 1px;\n      padding:5px;\n      margin-right:15%;\n      background-color: #f2f2f2 !important;\n      -webkit-print-color-adjust: exact;\n\n    }\n    hr{\n      width:100%;\n      height:0px;\n      border: 1px solid #000;\n    }\n    h1{\n      font-size: 18px;\n\n    }\n    .table-responsive {\n      min-height: .01%;\n      overflow-x: auto;\n  }\n  .table-bordered {\n    border: 1px solid #ddd;\n    box-shadow: 0 0 black;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\ntable {\n  background-color: transparent;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntable thead {\n  background-color: #f2f2f2 !important;\n  -webkit-print-color-adjust: exact;\n}\ntbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th,\n .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table > thead > tr > th, .table > tbody > tr > th,\n .table > tfoot > tr > th, .table > thead > tr > td,\n .table > tbody > tr > td, .table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.btn {\n  display: none;\n}\n.fixheight{\n\n  height:17cm;\n\n}\n#datefromto{\n  display:none;\n}\n\n  ";
        var d = new printd_1.default();
        d.print(document.getElementById('body-content'), cssText);
    };
    PrintfilecustomeradvancepaymentsdetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-printfilecustomeradvancepaymentsdetails',
            templateUrl: './printfilecustomeradvancepaymentsdetails.component.html',
            styleUrls: ['./printfilecustomeradvancepaymentsdetails.component.css']
        }),
        __metadata("design:paramtypes", [listcustomermoneydetails_service_1.ListcustomermoneydetailsService,
            router_1.ActivatedRoute])
    ], PrintfilecustomeradvancepaymentsdetailsComponent);
    return PrintfilecustomeradvancepaymentsdetailsComponent;
}());
exports.PrintfilecustomeradvancepaymentsdetailsComponent = PrintfilecustomeradvancepaymentsdetailsComponent;
//# sourceMappingURL=printfilecustomeradvancepaymentsdetails.component.js.map