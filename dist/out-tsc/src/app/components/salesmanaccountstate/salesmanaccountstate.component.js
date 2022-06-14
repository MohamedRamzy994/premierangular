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
var SalesmanaccountstateComponent = /** @class */ (function () {
    function SalesmanaccountstateComponent(_listsalemansalesinvoicesService, _liststoresService, _listemployeesService, _notifierService, _router) {
        this._listsalemansalesinvoicesService = _listsalemansalesinvoicesService;
        this._liststoresService = _liststoresService;
        this._listemployeesService = _listemployeesService;
        this._notifierService = _notifierService;
        this._router = _router;
        this.myOptions = {
            // other options...
            dateFormat: 'mmm d, yyyy',
        };
        this.AllProductSaleProfitMainInvoices = [];
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductDailySalesInvoices();
        this.SelectedProductSaleMainInvoice.InvoiceID = 0;
        this.ProductStores = [];
        this.Employees = [];
        this.UserName = '';
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
        this.EmpID = 0;
        this.SupplierName = '';
        this.InvoiceID = '';
    }
    SalesmanaccountstateComponent.prototype.ngOnInit = function () {
        this.getAllStores();
        this.getAllEmployees();
        this.getSaleManSalesInvoices(this.EmpID);
    };
    SalesmanaccountstateComponent.prototype.getSaleManSalesInvoices = function (empID) {
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
    SalesmanaccountstateComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    SalesmanaccountstateComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    SalesmanaccountstateComponent.prototype.SelectRow = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = _invoicemain;
    };
    SalesmanaccountstateComponent.prototype.RowSelected = function (_invoicemain) {
        if (!this.SelectedProductSaleMainInvoice) {
            return false;
        }
        return this.SelectedProductSaleMainInvoice.InvoiceID === _invoicemain.InvoiceID ? true : false;
    };
    SalesmanaccountstateComponent.prototype.RemoveSelection = function (_invoicemain) {
        this.SelectedProductSaleMainInvoice = new productsales_1.ProductDailySalesInvoices();
    };
    SalesmanaccountstateComponent.prototype.getAllStores = function () {
        var _this = this;
        this._liststoresService.listStores().subscribe(function (_result) {
            _this.ProductStores = _result.StoresList;
        });
    };
    SalesmanaccountstateComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this._listemployeesService.ListEmployees().subscribe(function (_result) {
            _this.Employees = _result.EmployeesList;
        });
    };
    SalesmanaccountstateComponent.prototype.goToPrintSaleManAccountState = function () {
        this._router.navigate(['printsalesmanaccountstate', this.EmpID]);
    };
    SalesmanaccountstateComponent.prototype.GetSumTotal = function (From, To) {
        var SumTotal = 0;
        if (From && To) {
            this.AllProductSaleProfitMainInvoices.filter(function (x) { return (new Date(x.DateSubmit) >= new Date(From) && new Date(x.DateSubmit) <= new Date(To)); }).forEach(function (element) {
                SumTotal += element.NetPrice;
            });
            return SumTotal;
        }
        else {
            return SumTotal;
        }
    };
    SalesmanaccountstateComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    SalesmanaccountstateComponent = __decorate([
        core_1.Component({
            selector: 'app-salesmanaccountstate',
            templateUrl: './salesmanaccountstate.component.html',
            styleUrls: ['./salesmanaccountstate.component.css']
        }),
        __metadata("design:paramtypes", [listsalemansalesinvoices_service_1.ListsalemansalesinvoicesService,
            liststores_service_1.ListstoresService,
            listemployees_service_1.ListemployeesService,
            angular_notifier_1.NotifierService,
            router_1.Router])
    ], SalesmanaccountstateComponent);
    return SalesmanaccountstateComponent;
}());
exports.SalesmanaccountstateComponent = SalesmanaccountstateComponent;
//# sourceMappingURL=salesmanaccountstate.component.js.map