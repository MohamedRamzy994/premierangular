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
var salespoints_1 = require("src/app/models/salespoints");
var listgetstartbalance_service_1 = require("../../services/salespoints/listgetstartbalance.service");
var listsalespoints_service_1 = require("src/app/services/salespoints/listsalespoints.service");
var DrawerstoragereportsComponent = /** @class */ (function () {
    function DrawerstoragereportsComponent(_listgetstartbalanceService, _listsalespointsService) {
        this._listgetstartbalanceService = _listgetstartbalanceService;
        this._listsalespointsService = _listsalespointsService;
        this.myOptions = {
            dateFormat: 'mmm d, yyyy',
        };
        this.listGetStartBalanceModel = new salespoints_1.ListGetStartBalanceModel();
        this.listSalesPointsModel = [];
        this.SalesPointID = 0;
    }
    DrawerstoragereportsComponent.prototype.ngOnInit = function () {
        this.DateFromObject = {
            'date': {
                'year': 2000,
                'month': 1,
                'day': 1
            },
            'jsdate': '2000-01-01T22:00:00.000Z'
        };
        this.DateToObject = {
            'date': {
                'year': 2030,
                'month': 1,
                'day': 1
            },
            'jsdate': '2030-01-01T22:00:00.000Z'
        };
        this.DateFrom = this.DateFromObject.jsdate;
        this.DateTo = this.DateToObject.jsdate;
        this.GetAllSalesPoints();
        this.GetStartBalance(this.SalesPointID, this.DateFrom, this.DateTo);
    };
    DrawerstoragereportsComponent.prototype.GetDateFrom = function (event) {
        this.DateFrom = this.DateFromObject.jsdate;
    };
    DrawerstoragereportsComponent.prototype.GetDateTo = function (event) {
        this.DateTo = this.DateToObject.jsdate;
    };
    /**
     * GetStartBalance
     */
    DrawerstoragereportsComponent.prototype.GetStartBalance = function (salesPointID, dateFrom, dateTo) {
        var _this = this;
        if (salesPointID == 0) {
            this.listGetStartBalanceModel = {
                CustomerPayed: 0,
                TransferToThis: 0,
                Deposit: 0,
                Withdraw: 0,
                TransferFromThis: 0,
                SupplierPayed: 0,
                CustomerRetrieve: 0,
                Salary: 0,
                EmpDebits: 0,
                CustomerTanzelCancel: 0,
                SupplierTanzelCancel: 0,
                CustomerRetrieveCancel: 0,
                Balance: 0,
                AddCost: 0,
                EmpGivedMoney: 0,
                EmpPayedDebitDirect: 0
            };
        }
        else {
            this._listgetstartbalanceService.GetStartBalance(salesPointID, dateFrom, dateTo)
                .subscribe(function (_result) {
                if (_result.Status == true) {
                    _this.listGetStartBalanceModel = _result.ListGetStartBalance[0];
                }
                else {
                    _this.listGetStartBalanceModel = {
                        CustomerPayed: 0,
                        TransferToThis: 0,
                        Deposit: 0,
                        Withdraw: 0,
                        TransferFromThis: 0,
                        SupplierPayed: 0,
                        CustomerRetrieve: 0,
                        Salary: 0,
                        EmpDebits: 0,
                        CustomerTanzelCancel: 0,
                        SupplierTanzelCancel: 0,
                        CustomerRetrieveCancel: 0,
                        Balance: 0,
                        AddCost: 0,
                        EmpGivedMoney: 0,
                        EmpPayedDebitDirect: 0
                    };
                }
            });
        }
    };
    DrawerstoragereportsComponent.prototype.GetAllSalesPoints = function () {
        var _this = this;
        this._listsalespointsService.ListAllSalesPoints().subscribe(function (result) {
            _this.listSalesPointsModel = result.SalesPointsList;
        });
    };
    DrawerstoragereportsComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    DrawerstoragereportsComponent = __decorate([
        core_1.Component({
            selector: 'app-drawerstoragereports',
            templateUrl: './drawerstoragereports.component.html',
            styleUrls: ['./drawerstoragereports.component.css']
        }),
        __metadata("design:paramtypes", [listgetstartbalance_service_1.ListgetstartbalanceService,
            listsalespoints_service_1.ListsalespointsService])
    ], DrawerstoragereportsComponent);
    return DrawerstoragereportsComponent;
}());
exports.DrawerstoragereportsComponent = DrawerstoragereportsComponent;
//# sourceMappingURL=drawerstoragereports.component.js.map