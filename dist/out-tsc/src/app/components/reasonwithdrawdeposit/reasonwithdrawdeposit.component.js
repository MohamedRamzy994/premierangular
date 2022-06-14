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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var angular_notifier_1 = require("angular-notifier");
var router_1 = require("@angular/router");
var salespoints_1 = require("src/app/models/salespoints");
var listwithdrawdepositreasons_service_1 = require("src/app/services/salespoints/listwithdrawdepositreasons.service");
var addwithdrawdepositreason_service_1 = require("src/app/services/salespoints/addwithdrawdepositreason.service");
var deletewithdrawdepositreason_service_1 = require("src/app/services/salespoints/deletewithdrawdepositreason.service");
var editwithdrawdepositreason_service_1 = require("../../services/salespoints/editwithdrawdepositreason.service");
var ReasonwithdrawdepositComponent = /** @class */ (function () {
    function ReasonwithdrawdepositComponent(_notifierService, modalService, router, _listwithdrawdepositreasonsService, _addwithdrawdepositreasonService, _deletewithdrawdepositreasonService, _editWithdrawDepositReasonService) {
        this._notifierService = _notifierService;
        this.modalService = modalService;
        this.router = router;
        this._listwithdrawdepositreasonsService = _listwithdrawdepositreasonsService;
        this._addwithdrawdepositreasonService = _addwithdrawdepositreasonService;
        this._deletewithdrawdepositreasonService = _deletewithdrawdepositreasonService;
        this._editWithdrawDepositReasonService = _editWithdrawDepositReasonService;
    }
    ReasonwithdrawdepositComponent.prototype.ngOnInit = function () {
        this.SearchSuppliers = '';
        this.WithdrawDepositReasonList = [];
        this.selectedReason = new salespoints_1.ListWithdrawDepositReasonModel();
        this.selectedReason.ReasonID = 0;
        this.reason = '';
        this.getAllWithdrawDepositReasons();
    };
    ReasonwithdrawdepositComponent.prototype.SelectRow = function (_customer) {
        this.selectedReason = _customer;
        this.buttonAdd.nativeElement.disabled = true;
    };
    ReasonwithdrawdepositComponent.prototype.RowSelected = function (_customer) {
        if (!this.selectedReason) {
            return false;
        }
        return this.selectedReason.ReasonID === _customer.ReasonID ? true : false;
    };
    ReasonwithdrawdepositComponent.prototype.RemoveSelection = function (_customer) {
        this.selectedReason = new salespoints_1.ListWithdrawDepositReasonModel();
        this.selectedReason.ReasonID = 0;
        this.buttonAdd.nativeElement.disabled = false;
    };
    ReasonwithdrawdepositComponent.prototype.openModal = function (template) {
        if (this.selectedReason.ReasonID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد سبب واحد على الاقل للقيام بعملية الحذف ');
        }
        else {
            if (this.RowSelected(this.selectedReason) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.selectedReason) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد سبب واحد على الاقل للقيام بعملية الحذف ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    ReasonwithdrawdepositComponent.prototype.getAllWithdrawDepositReasons = function () {
        var _this = this;
        this._listwithdrawdepositreasonsService.GetAllWithdrawDepositReason().subscribe(function (_result) {
            if (_result.ListWithdrawDepositReason.length == 0) {
                _this.WithdrawDepositReasonList = [];
            }
            else {
                _this.WithdrawDepositReasonList = _result.ListWithdrawDepositReason;
            }
            _this.WithdrawDepositReasonList = _result.ListWithdrawDepositReason;
        });
    };
    ReasonwithdrawdepositComponent.prototype.openAddModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ReasonwithdrawdepositComponent.prototype.openEditModal = function (template) {
        if (this.selectedReason.ReasonID === 0) {
            this._notifierService.notify('error', 'من فضلك يجب تحديد سبب واحد على الاقل للقيام بعملية التعديل ');
        }
        else {
            if (this.RowSelected(this.selectedReason) === true) {
                this.modalRef = this.modalService.show(template);
            }
            else if (this.RowSelected(this.selectedReason) === false) {
                this._notifierService.notify('error', 'من فضلك يجب تحديد سبب واحد على الاقل للقيام بعملية التعديل ');
            }
            else {
                this._notifierService.notify('error', 'شئ ما خاطئ من فضلك حاول مرة اخرى لاحقا');
            }
        }
    };
    ReasonwithdrawdepositComponent.prototype.AddWithdrawDepositReason = function (_reason, _formGroup) {
        var _this = this;
        this._addwithdrawdepositreasonService
            .AddWithdrawDepositReason(_reason)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _formGroup.reset();
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    ReasonwithdrawdepositComponent.prototype.DeleteWithdrawDepositReason = function (_reasonID) {
        var _this = this;
        this._deletewithdrawdepositreasonService
            .DeleteWithdrawDepositReason(_reasonID)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    ReasonwithdrawdepositComponent.prototype.EditWithdrawDepositReason = function (_listWithdrawDepositReasonModel) {
        var _this = this;
        this._editWithdrawDepositReasonService
            .EditWithdrawDepositReason(_listWithdrawDepositReasonModel)
            .subscribe(function (_result) {
            if (_result.Status === true) {
                _this.modalRef.hide();
                _this._notifierService.notify('success', _result.Message);
                _this.ngOnInit();
            }
            else {
                _this._notifierService.notify('error', _result.Message);
            }
        });
    };
    ReasonwithdrawdepositComponent.prototype.Refresh = function () {
        this.ngOnInit();
    };
    __decorate([
        core_1.ViewChild('ButtonAdd'),
        __metadata("design:type", core_1.ElementRef)
    ], ReasonwithdrawdepositComponent.prototype, "buttonAdd", void 0);
    ReasonwithdrawdepositComponent = __decorate([
        core_1.Component({
            selector: 'app-reasonwithdrawdeposit',
            templateUrl: './reasonwithdrawdeposit.component.html',
            styleUrls: ['./reasonwithdrawdeposit.component.css']
        }),
        __metadata("design:paramtypes", [angular_notifier_1.NotifierService,
            ngx_bootstrap_1.BsModalService,
            router_1.Router,
            listwithdrawdepositreasons_service_1.ListwithdrawdepositreasonsService,
            addwithdrawdepositreason_service_1.AddwithdrawdepositreasonService,
            deletewithdrawdepositreason_service_1.DeletewithdrawdepositreasonService,
            editwithdrawdepositreason_service_1.EditwithdrawdepositreasonService])
    ], ReasonwithdrawdepositComponent);
    return ReasonwithdrawdepositComponent;
}());
exports.ReasonwithdrawdepositComponent = ReasonwithdrawdepositComponent;
//# sourceMappingURL=reasonwithdrawdeposit.component.js.map