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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var newuser_service_1 = require("../../services/user/newuser.service");
var angular_notifier_1 = require("../../../../node_modules/angular-notifier");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(_newuserService, _notifierService, modalService, _router, _activatedRouter) {
        this._newuserService = _newuserService;
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this._router = _router;
        this._activatedRouter = _activatedRouter;
    }
    AdduserComponent.prototype.ngOnInit = function () {
        this.user = {
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
        this.notifierService = this._notifierService;
    };
    AdduserComponent.prototype.onSubmit = function (user, UserForm) {
        var _this = this;
        if (user.SystemSettings === false &&
            user.SupplierEdit === false &&
            user.SupplierDeleteMoney === false &&
            user.SupplierDelete === false &&
            user.SupplierAddMoney === false &&
            user.SupplierAdd === false &&
            user.StoreTransferBalance === false &&
            user.StoreEdit === false &&
            user.StoreDelete === false &&
            user.StoreAdd === false &&
            user.SalesPointTransferMoney === false &&
            user.SalesPointReport === false &&
            user.SalesPointDepositWithdrow === false &&
            user.SalesManSummaryReport === false &&
            user.SalesInvoiceCancel === false &&
            user.SalesInvoice === false &&
            user.SalesDiscount === false &&
            user.SalesDiscard === false &&
            user.ReportTotalMoneyInfo === false &&
            user.ReportSupplierBuys === false &&
            user.ReportStoreStock === false &&
            user.ReportSalesManSales === false &&
            user.ReportProfitLose === false &&
            user.ReportProductMove === false &&
            user.ReportCustomerSales === false &&
            user.ReportAddCost === false &&
            user.ProductResetStock === false &&
            user.ProductOpenCancel === false &&
            user.ProductOpen === false &&
            user.ProductEdit === false &&
            user.ProductDelete === false &&
            user.ProductAdd === false &&
            user.EmpSalary === false &&
            user.EmpPunish === false &&
            user.EmpEdit === false &&
            user.EmpDelete === false &&
            user.EmpDebit === false &&
            user.EmpComm === false &&
            user.EmpCancelPunish === false &&
            user.EmpCancelComm === false &&
            user.EmpAdd === false &&
            user.CustomerEdit === false &&
            user.CustomerDelete === false &&
            user.CustomerCancelMoney === false &&
            user.CustomerAddMoney === false &&
            user.CustomerAdd === false &&
            user.BuyInvoiceCancel === false &&
            user.BuyInvoice === false &&
            user.BuyDiscard === false &&
            user.AdditionalCost === false &&
            user.UserEdit === false &&
            user.UserDelete === false &&
            user.UserAdd === false) {
            this.notifierService.notify('error', 'من فضلك قم باختيار صلاحية واحدة على الاقل لهذا المستخدم');
            return;
        }
        this._newuserService.newUser(user).subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.notifierService.notify('success', _this.result.Message);
                UserForm.reset();
                _this.modalRef.hide();
                //  this.ngOnInit();
            }
            else {
                _this.notifierService.notify('error', _this.result.Message);
            }
        });
    };
    AdduserComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AdduserComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    AdduserComponent = __decorate([
        core_1.Component({
            selector: 'app-adduser',
            templateUrl: './adduser.component.html',
            styleUrls: ['./adduser.component.css']
        }),
        __metadata("design:paramtypes", [newuser_service_1.NewuserService,
            angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], AdduserComponent);
    return AdduserComponent;
}());
exports.AdduserComponent = AdduserComponent;
//# sourceMappingURL=adduser.component.js.map