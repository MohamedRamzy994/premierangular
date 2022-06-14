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
var listsuppliers_service_1 = require("src/app/services/suppliers/listsuppliers.service");
var suppliers_1 = require("src/app/models/suppliers");
var listgroups_service_1 = require("src/app/services/productgroups/listgroups.service");
var reports_1 = require("src/app/models/reports");
var printd_1 = require("printd");
var liststores_service_1 = require("../../services/stores/liststores.service");
var listproducttotalcommunicationreport_service_1 = require("src/app/services/reports/listproducttotalcommunicationreport.service");
var listsuppliersproductsalestoreport_service_1 = require("src/app/services/reports/listsuppliersproductsalestoreport.service");
var ReportsaleskindssupplierComponent = /** @class */ (function () {
    function ReportsaleskindssupplierComponent(_listsuppliersService, _listgroupsService, _liststoresService, _listsuppliersproductsalestoreportService, _listproducttotalcommunicationreportService) {
        this._listsuppliersService = _listsuppliersService;
        this._listgroupsService = _listgroupsService;
        this._liststoresService = _liststoresService;
        this._listsuppliersproductsalestoreportService = _listsuppliersproductsalestoreportService;
        this._listproducttotalcommunicationreportService = _listproducttotalcommunicationreportService;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.listProductMoveMentReportModel = [];
        this.productBuySelectTotalCommunicationReportModel = new reports_1.ProductBuySelectTotalCommunicationReportModel();
        this.DateFromObject = {
            'date': {
                'year': 2000,
                'month': 1,
                'day': 1
            },
            'jsdate': '2000-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2018'
        };
        this.DateToObject = {
            'date': {
                'year': 2030,
                'month': 1,
                'day': 1
            },
            'jsdate': '2030-01-01T22:00:00.000Z',
            'formatted': 'Jan 1, 2030'
        };
        this.DateFrom = this.DateFromObject.jsdate;
        this.DateTo = this.DateToObject.jsdate;
        this.resultSuppliers = new suppliers_1.ResultSuppliers();
        this.groupID = 0;
        this.storeID = 0;
        this.supplierID = 0;
        this.storeName = '';
        this.supplierName = '';
    }
    ReportsaleskindssupplierComponent.prototype.ngOnInit = function () {
        this.getAllSuppliers();
        this.ListProductInventoryReport(this.supplierID);
    };
    ReportsaleskindssupplierComponent.prototype.getAllSuppliers = function () {
        var _this = this;
        this._listsuppliersService.ListSuppliers().subscribe(function (_result) {
            if (_result.SuppliersList === null) {
                _this.resultSuppliers.SuppliersList = [];
            }
            else {
                _this.resultSuppliers.SuppliersList = _result.SuppliersList;
            }
        });
    };
    ReportsaleskindssupplierComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    ReportsaleskindssupplierComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    ReportsaleskindssupplierComponent.prototype.ListProductInventoryReport = function (_supplierID) {
        var _this = this;
        this._listsuppliersproductsalestoreportService.SupplierSelectProductSalesReport(_supplierID)
            .subscribe(function (_result) {
            if (_result.ListSupplierSelectProductSalesReport === null) {
                _this.listProductMoveMentReportModel = [];
            }
            else {
                if (_this.supplierID === 0) {
                    _this.listProductMoveMentReportModel = _result.ListSupplierSelectProductSalesReport;
                    _this.productBuySelectTotalCommunicationReportModel =
                        { BuyNumber: 0, DiscardNumber: 0, BuyPrice: 0, BuyQuntity: 0, DiscardPrice: 0, DiscardQuantity: 0 };
                }
                else {
                    _this._listsuppliersService.ListSuppliers().subscribe(function (_resultsupp) {
                        _this.supplierName =
                            _resultsupp.SuppliersList.filter(function (value) { return value.SupplierID == _supplierID; })[0].SupplierName;
                        _this.listProductMoveMentReportModel = _result.ListSupplierSelectProductSalesReport;
                    });
                }
            }
        });
        this.ListProductTotalCommunicationReport(_supplierID);
    };
    ReportsaleskindssupplierComponent.prototype.ListProductTotalCommunicationReport = function (_supplierID) {
        var _this = this;
        this._listproducttotalcommunicationreportService.ListProductTotalCommunicationReport(_supplierID)
            .subscribe(function (_result) {
            console.log(_result);
            if (_result.ProductBuySelectTotalCommunicationReportModel === null) {
                _this.productBuySelectTotalCommunicationReportModel = new reports_1.ProductBuySelectTotalCommunicationReportModel();
            }
            else {
                _this.productBuySelectTotalCommunicationReportModel = _result.ProductBuySelectTotalCommunicationReportModel[0];
            }
        });
    };
    ReportsaleskindssupplierComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = _invoicemain;
    };
    ReportsaleskindssupplierComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductSaleMainInvoice) {
            return false;
        }
        return this.SelectedProductSaleMainInvoice.ProductID === _invoicemain.ProductID ? true : false;
    };
    ReportsaleskindssupplierComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = new reports_1.ListSupplierProductsInStoreModel();
    };
    ReportsaleskindssupplierComponent.prototype.PrintSupplierMoneyDetails = function () {
        var cssText = "\n    article, aside , details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n      display: block;\n    }\n    .container {\n      width:100%;\n      direction: rtl;\n\n    }\n    .col-md-1 {\n      width:10%;\n      float:right;\n\n    }\n\n    .col-md-2 {\n      width:20%;\n      float:right;\n\n    }\n    .col-md-4 {\n      width:33%;\n      float:right;\n\n    }\n\n    .col-md-8 {\n      width:50%;\n      float:right;\n      margin-left:8%;\n    }\n    .col-md-5 {\n      width:50%;\n      float:right;\n\n    }\n    .text-left {\n      text-align: left;\n    }\n    .text-right {\n      text-align: right;\n    }\n    .text-center {\n      text-align: center;\n    }\n    .row{\n      width: 100%;\n\n    }\n    .panel-heading .row{\n      width: 100%;\n\n    }\n    .panel-body .row{\n      width: 100%;\n      margin-bottom: 35px;\n    }\n    .printbrand {\n      padding:31px 5px; \n      background-color:#fff; \n      border:1px solid #000;\n       width:100%;\n       text-align: center;\n       border-radius: 5px;\n    }\n    .label {\n      display: inline;\n      font-weight: bold;\n      line-height: 1;\n      color: black;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border-radius: .25em;\n      padding:5px;\n\n    }\n    .label-default{\n      background-color: #f2f2f2 !important;\n      -webkit-print-color-adjust: exact;\n      padding:5px;\n\n    }\n    .userlogo {\n      height: 70px;\n      width: 70px;\n    }\n    .img-thumbnail {\n      display: inline-block;\n      max-width: 100%;\n      height: auto;\n      padding:10px;\n      line-height: 1.42857143;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      transition: all .2s ease-in-out;\n    }\n    img {\n      vertical-align: middle;\n    }\n     .spacetoprint{\n       height:1.5cm;\n       width:100%;\n     }\n    .form-group {\n      margin-bottom: 5px;\n    }\n    h3 {\n      width:80%;\n      font-size: 25px;\n      font-family: sans-serif;\n      border: black solid 1px;\n      padding:5px;\n      margin-right:15%;\n      background-color: #f2f2f2 !important;\n      -webkit-print-color-adjust: exact;\n\n    }\n    hr{\n      width:100%;\n      height:0px;\n      border: 1px solid #000;\n    }\n    h1{\n      font-size: 18px;\n\n    }\n    .table-responsive {\n      min-height: .01%;\n      overflow-x: auto;\n  }\n  .table-bordered {\n    border: 1px solid #ddd;\n    box-shadow: 0 0 black;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\ntable {\n  background-color: transparent;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntable thead {\n  background-color: #f2f2f2 !important;\n  -webkit-print-color-adjust: exact;\n}\ntbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th,\n .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table > thead > tr > th, .table > tbody > tr > th,\n .table > tfoot > tr > th, .table > thead > tr > td,\n .table > tbody > tr > td, .table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.btn {\n  display: none;\n}\n.fixheight{\n\n  height:17cm;\n\n}\n#datefromto{\n  display:none;\n}\n\n  ";
        var d = new printd_1.default();
        d.print(document.getElementById('body-content'), cssText);
    };
    ReportsaleskindssupplierComponent = __decorate([
        core_1.Component({
            selector: 'app-reportsaleskindssupplier',
            templateUrl: './reportsaleskindssupplier.component.html',
            styleUrls: ['./reportsaleskindssupplier.component.css']
        }),
        __metadata("design:paramtypes", [listsuppliers_service_1.ListsuppliersService,
            listgroups_service_1.ListgroupsService,
            liststores_service_1.ListstoresService,
            listsuppliersproductsalestoreport_service_1.ListsuppliersproductsalestoreportService,
            listproducttotalcommunicationreport_service_1.ListproducttotalcommunicationreportService])
    ], ReportsaleskindssupplierComponent);
    return ReportsaleskindssupplierComponent;
}());
exports.ReportsaleskindssupplierComponent = ReportsaleskindssupplierComponent;
//# sourceMappingURL=reportsaleskindssupplier.component.js.map