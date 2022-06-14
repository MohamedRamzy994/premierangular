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
var suppliers_1 = require("./../../models/suppliers");
var core_1 = require("@angular/core");
var addsupplier_service_1 = require("../../services/suppliers/addsupplier.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AddsupplierComponent = /** @class */ (function () {
    function AddsupplierComponent(_addsupplierService, modalService, _notifierService) {
        this._addsupplierService = _addsupplierService;
        this.modalService = modalService;
        this._notifierService = _notifierService;
        this.addSupplier = new suppliers_1.AddSupplierModel();
    }
    AddsupplierComponent.prototype.ngOnInit = function () {
    };
    AddsupplierComponent.prototype.AddSupplier = function (_supplier, _formGroup) {
        var _this = this;
        this._addsupplierService.AddSupplier(_supplier).subscribe(function (_result) {
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
    AddsupplierComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AddsupplierComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    AddsupplierComponent = __decorate([
        core_1.Component({
            selector: 'app-addsupplier',
            templateUrl: './addsupplier.component.html',
            styleUrls: ['./addsupplier.component.css']
        }),
        __metadata("design:paramtypes", [addsupplier_service_1.AddsupplierService,
            ngx_bootstrap_1.BsModalService,
            angular_notifier_1.NotifierService])
    ], AddsupplierComponent);
    return AddsupplierComponent;
}());
exports.AddsupplierComponent = AddsupplierComponent;
//# sourceMappingURL=addsupplier.component.js.map