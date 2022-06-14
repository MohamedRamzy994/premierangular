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
var OauthenticatedsessionService = /** @class */ (function () {
    function OauthenticatedsessionService() {
        this._user = {
            Message: '',
            UserId: null,
            UserName: '',
            LoginName: '',
            Password: '',
            SystemSettings: false,
            Existing: false,
            AdditionalCost: false,
            ReportAddCost: false,
            ReportProfitLose: false,
            ReportTotalMoneyInfo: false,
            StoreAdd: false,
            StoreEdit: false,
            StoreDelete: false,
            StoreTransferBalance: false,
            ProductAdd: false,
            ProductEdit: false,
            ProductDelete: false,
            ProductOpen: false,
            ProductOpenCancel: false,
            ProductResetStock: false,
            SupplierAdd: false,
            SupplierEdit: false,
            SupplierDelete: false,
            SupplierDeleteMoney: false,
            SupplierAddMoney: false,
            BuyInvoice: false,
            BuyInvoiceCancel: false,
            BuyDiscard: false,
            EmpAdd: false,
            EmpEdit: false,
            EmpDelete: false,
            EmpComm: false,
            EmpCancelComm: false,
            EmpPunish: false,
            EmpCancelPunish: false,
            EmpDebit: false,
            EmpSalary: false,
            CustomerAdd: false,
            CustomerEdit: false,
            CustomerDelete: false,
            CustomerAddMoney: false,
            CustomerCancelMoney: false,
            SalesInvoice: false,
            SalesDiscount: false,
            SalesInvoiceCancel: false,
            SalesDiscard: false,
            SalesManSummaryReport: false,
            SalesPointDepositWithdrow: false,
            SalesPointTransferMoney: false,
            SalesPointReport: false,
            ReportProductMove: false,
            ReportStoreStock: false,
            ReportSupplierBuys: false,
            ReportCustomerSales: false,
            ReportSalesManSales: false,
            UserAdd: false,
            UserEdit: false,
            UserDelete: false
        };
    }
    Object.defineProperty(OauthenticatedsessionService.prototype, "User", {
        get: function () {
            this._user.UserName = sessionStorage.getItem('UserName');
            this._user.LoginName = sessionStorage.getItem('LoginName');
            this._user.Password = sessionStorage.getItem('Password');
            this._user.UserId = parseInt(sessionStorage.getItem('UserId'), 10);
            this._user = JSON.parse(sessionStorage.getItem('userpermission'));
            if (this._user == null) {
                this._user = {
                    Message: '',
                    UserId: null,
                    UserName: '',
                    LoginName: '',
                    Password: '',
                    SystemSettings: false,
                    Existing: false,
                    AdditionalCost: false,
                    ReportAddCost: false,
                    ReportProfitLose: false,
                    ReportTotalMoneyInfo: false,
                    StoreAdd: false,
                    StoreEdit: false,
                    StoreDelete: false,
                    StoreTransferBalance: false,
                    ProductAdd: false,
                    ProductEdit: false,
                    ProductDelete: false,
                    ProductOpen: false,
                    ProductOpenCancel: false,
                    ProductResetStock: false,
                    SupplierAdd: false,
                    SupplierEdit: false,
                    SupplierDelete: false,
                    SupplierDeleteMoney: false,
                    SupplierAddMoney: false,
                    BuyInvoice: false,
                    BuyInvoiceCancel: false,
                    BuyDiscard: false,
                    EmpAdd: false,
                    EmpEdit: false,
                    EmpDelete: false,
                    EmpComm: false,
                    EmpCancelComm: false,
                    EmpPunish: false,
                    EmpCancelPunish: false,
                    EmpDebit: false,
                    EmpSalary: false,
                    CustomerAdd: false,
                    CustomerEdit: false,
                    CustomerDelete: false,
                    CustomerAddMoney: false,
                    CustomerCancelMoney: false,
                    SalesInvoice: false,
                    SalesDiscount: false,
                    SalesInvoiceCancel: false,
                    SalesDiscard: false,
                    SalesManSummaryReport: false,
                    SalesPointDepositWithdrow: false,
                    SalesPointTransferMoney: false,
                    SalesPointReport: false,
                    ReportProductMove: false,
                    ReportStoreStock: false,
                    ReportSupplierBuys: false,
                    ReportCustomerSales: false,
                    ReportSalesManSales: false,
                    UserAdd: false,
                    UserEdit: false,
                    UserDelete: false
                };
            }
            return this._user;
        },
        set: function (user) {
            sessionStorage.setItem('UserName', user.UserName);
            sessionStorage.setItem('LoginName', user.LoginName);
            sessionStorage.setItem('Password', user.Password);
            sessionStorage.setItem('UserId', user.UserId.toString());
            sessionStorage.setItem('userpermission', JSON.stringify(user));
        },
        enumerable: true,
        configurable: true
    });
    OauthenticatedsessionService.prototype.ngOnInit = function () {
        this._user = this.User;
    };
    OauthenticatedsessionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], OauthenticatedsessionService);
    return OauthenticatedsessionService;
}());
exports.OauthenticatedsessionService = OauthenticatedsessionService;
//# sourceMappingURL=Oauthenticatedsession.Service.js.map