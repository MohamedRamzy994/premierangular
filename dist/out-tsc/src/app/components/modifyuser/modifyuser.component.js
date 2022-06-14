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
var angular_notifier_1 = require("../../../../node_modules/angular-notifier");
var edituser_service_1 = require("../../services/user/edituser.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ModifyuserComponent = /** @class */ (function () {
    function ModifyuserComponent(_edituserService, _notifierService, _router, modalService, _activatedRouter) {
        this._edituserService = _edituserService;
        this._notifierService = _notifierService;
        this._router = _router;
        this.modalService = modalService;
        this._activatedRouter = _activatedRouter;
        this.notifierService = this._notifierService;
    }
    ModifyuserComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    ModifyuserComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ModifyuserComponent.prototype.getUser = function () {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var userId = this._activatedRouter.snapshot.params.userId;
        this._edituserService.getUserPermission(userId).subscribe(function (_result) {
            _this.user = _result.UserList[0];
        });
    };
    ModifyuserComponent.prototype.onSubmit = function (user) {
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
        this._edituserService.editUser(user).subscribe(function (_result) {
            _this.result = _result;
            if (_this.result.Status === true) {
                _this.modalRef.hide();
                _this.notifierService.notify('success', _this.result.Message);
                _this.ngOnInit();
            }
            else {
                _this.notifierService.notify('error', _this.result.Message);
            }
        });
    };
    ModifyuserComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    ModifyuserComponent = __decorate([
        core_1.Component({
            selector: 'app-modifyuser',
            templateUrl: './modifyuser.component.html',
            styleUrls: ['./modifyuser.component.css']
        }),
        __metadata("design:paramtypes", [edituser_service_1.EdituserService,
            angular_notifier_1.NotifierService,
            router_1.Router,
            ngx_bootstrap_1.BsModalService,
            router_1.ActivatedRoute])
    ], ModifyuserComponent);
    return ModifyuserComponent;
}());
exports.ModifyuserComponent = ModifyuserComponent;
//# sourceMappingURL=modifyuser.component.js.map