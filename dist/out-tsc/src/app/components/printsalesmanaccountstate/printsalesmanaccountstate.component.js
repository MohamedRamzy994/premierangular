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
var liststores_service_1 = require("src/app/services/stores/liststores.service");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var productsales_1 = require("src/app/models/productsales");
var listsalemansalesinvoices_service_1 = require("src/app/services/productsales/listsalemansalesinvoices.service");
var listemployees_service_1 = require("../../services/employees/listemployees.service");
var printd_1 = require("printd");
var PrintsalesmanaccountstateComponent = /** @class */ (function () {
    function PrintsalesmanaccountstateComponent(_listsalemansalesinvoicesService, _liststoresService, _listemployeesService, _notifierService, _router, _activeroute) {
        var _this = this;
        this._listsalemansalesinvoicesService = _listsalemansalesinvoicesService;
        this._liststoresService = _liststoresService;
        this._listemployeesService = _listemployeesService;
        this._notifierService = _notifierService;
        this._router = _router;
        this._activeroute = _activeroute;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductSaleProfitMainInvoices = [];
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductDailySalesInvoices();
        this.SelectedProductSaleMainInvoice.InvoiceID = 0;
        this.ProductStores = [];
        this.Employees = [];
        this.EmpName = '';
        this.customerTotalCommunicationSummaryModel = { TotalCommunication: 0, CompletedCommunication: 0, RestCommunication: 0 };
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
        this.StoreName = '';
        this._activeroute.paramMap.subscribe(function (params) {
            _this.EmpID = params.get('EmpID');
        });
        this.SupplierName = '';
        this.InvoiceID = '';
    }
    PrintsalesmanaccountstateComponent.prototype.ngOnInit = function () {
        this.getAllStores();
        this.getAllEmployees();
        this.getSaleManSalesInvoices(this.EmpID);
        this.getEmpName();
    };
    PrintsalesmanaccountstateComponent.prototype.getSaleManSalesInvoices = function (empID) {
        var _this = this;
        this._listsalemansalesinvoicesService.listSaleManSalesInvoices(empID)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                console.log(_result.ProductDailySalesInvoices);
                _this.AllProductSaleProfitMainInvoices = _result.ProductDailySalesInvoices;
                _this.customerTotalCommunicationSummaryModel = _result.CustomerTotalCommunicationSummary;
            }
            else {
                _this.AllProductSaleProfitMainInvoices = [];
                _this.customerTotalCommunicationSummaryModel = { TotalCommunication: 0, CompletedCommunication: 0, RestCommunication: 0 };
            }
        });
    };
    PrintsalesmanaccountstateComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    PrintsalesmanaccountstateComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    PrintsalesmanaccountstateComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = _invoicemain;
    };
    PrintsalesmanaccountstateComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductSaleMainInvoice) {
            return false;
        }
        return this.SelectedProductSaleMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;
    };
    PrintsalesmanaccountstateComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductDailySalesInvoices();
    };
    PrintsalesmanaccountstateComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    PrintsalesmanaccountstateComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this._listemployeesService.ListEmployees().subscribe(function (_result) {
            _this.Employees = _result.EmployeesList;
        });
    };
    /**
     * getEmpName
     */
    PrintsalesmanaccountstateComponent.prototype.getEmpName = function () {
        var _this = this;
        this._listemployeesService.ListEmployees().subscribe(function (_result) {
            _this.EmpName = _result.EmployeesList.filter(function (x) { return x.EmpID == _this.EmpID; })[0].EmpName;
        });
    };
    PrintsalesmanaccountstateComponent.prototype.PrintReportInvoice = function () {
        var cssText = "\n    article, aside , details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n      display: block;\n    }\n    .container {\n      width:100%;\n      direction: rtl;\n\n    }\n    .col-md-1 {\n      width:10%;\n      float:right;\n\n    }\n\n    .col-md-2 {\n      width:20%;\n      float:right;\n\n    }\n    .col-md-4 {\n      width:33.33%;\n      float:right;\n\n    }\n\n    .col-md-8 {\n      width:50%;\n      float:right;\n      margin-left:8%;\n    }\n    .col-md-5 {\n      width:50%;\n      float:right;\n\n    }\n    .text-left {\n      text-align: left;\n    }\n    .text-right {\n      text-align: right;\n    }\n    .text-center {\n      text-align: center;\n    }\n    .row{\n      width: 100%;\n\n    }\n    .panel-heading .row{\n      width: 100%;\n\n    }\n    .panel-body .row{\n      width: 100%;\n      margin-bottom: 35px;\n    }\n    .printbrand {\n      padding:31px 5px; \n      background-color:#fff; \n      border:1px solid #000;\n       width:100%;\n       text-align: center;\n       border-radius: 5px;\n    }\n    .label {\n      display: inline;\n      font-weight: bold;\n      line-height: 1;\n      color: black;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border-radius: .25em;\n      padding:5px;\n\n    }\n    .label-default{\n      background-color: #f2f2f2 !important;\n      -webkit-print-color-adjust: exact;\n      padding:5px;\n\n    }\n    .userlogo {\n      height: 70px;\n      width: 70px;\n    }\n    .img-thumbnail {\n      display: inline-block;\n      max-width: 100%;\n      height: auto;\n      padding:10px;\n      line-height: 1.42857143;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      transition: all .2s ease-in-out;\n    }\n    img {\n      vertical-align: middle;\n    }\n     .spacetoprint{\n       height:1.5cm;\n       width:100%;\n     }\n    .form-group {\n      margin-bottom: 5px;\n    }\n    h3 {\n      width:80%;\n      font-size: 25px;\n      font-family: sans-serif;\n      border: black solid 1px;\n      padding:5px;\n      margin-right:15%;\n      background-color: #f2f2f2 !important;\n      -webkit-print-color-adjust: exact;\n\n    }\n    hr{\n      width:100%;\n      height:0px;\n      border: 1px solid #000;\n    }\n    h1{\n      font-size: 18px;\n\n    }\n    .table-responsive {\n      min-height: .01%;\n      overflow-x: auto;\n  }\n  .table-bordered {\n    border: 1px solid #ddd;\n    box-shadow: 0 0 black;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\ntable {\n  background-color: transparent;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntable thead {\n  background-color: #f2f2f2 !important;\n  -webkit-print-color-adjust: exact;\n}\ntbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-bordered > thead > tr > th, .table-bordered > tbody > tr > th,\n .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table > thead > tr > th, .table > tbody > tr > th,\n .table > tfoot > tr > th, .table > thead > tr > td,\n .table > tbody > tr > td, .table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.btn {\n  display: none;\n}\n.fixheight{\n\n  min-height:17cm;\n\n}\n#datefromto{\n  display:none;\n}\n\n  ";
        var d = new printd_1.default();
        d.print(document.getElementById('body-content'), cssText);
    };
    PrintsalesmanaccountstateComponent = __decorate([
        core_1.Component({
            selector: 'app-printsalesmanaccountstate',
            templateUrl: './printsalesmanaccountstate.component.html',
            styleUrls: ['./printsalesmanaccountstate.component.css']
        }),
        __metadata("design:paramtypes", [listsalemansalesinvoices_service_1.ListsalemansalesinvoicesService,
            liststores_service_1.ListstoresService,
            listemployees_service_1.ListemployeesService,
            angular_notifier_1.NotifierService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], PrintsalesmanaccountstateComponent);
    return PrintsalesmanaccountstateComponent;
}());
exports.PrintsalesmanaccountstateComponent = PrintsalesmanaccountstateComponent;
//# sourceMappingURL=printsalesmanaccountstate.component.js.map