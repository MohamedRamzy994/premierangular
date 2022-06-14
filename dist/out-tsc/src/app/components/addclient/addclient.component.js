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
var angular_notifier_1 = require("angular-notifier");
var customers_1 = require("./../../models/customers");
var core_1 = require("@angular/core");
var addcustomer_service_1 = require("../../services/customers/addcustomer.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AddclientComponent = /** @class */ (function () {
    function AddclientComponent(_addcustomerService, modalService, _notifierService) {
        this._addcustomerService = _addcustomerService;
        this.modalService = modalService;
        this._notifierService = _notifierService;
        this.addCustomer = new customers_1.AddCustomerModel();
    }
    AddclientComponent.prototype.ngOnInit = function () {
    };
    AddclientComponent.prototype.AddCustomer = function (_customer, _formGroup) {
        var _this = this;
        this._addcustomerService.AddCustomer(_customer).subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _formGroup.reset();
            }
            else {
                _this.modalRef.hide();
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    AddclientComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AddclientComponent = __decorate([
        core_1.Component({
            selector: 'app-addclient',
            templateUrl: './addclient.component.html',
            styleUrls: ['./addclient.component.css']
        }),
        __metadata("design:paramtypes", [addcustomer_service_1.AddcustomerService,
            ngx_bootstrap_1.BsModalService,
            angular_notifier_1.NotifierService])
    ], AddclientComponent);
    return AddclientComponent;
}());
exports.AddclientComponent = AddclientComponent;
//# sourceMappingURL=addclient.component.js.map